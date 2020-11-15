import os
import json
import time
from web3 import Web3, HTTPProvider
from web3.middleware import geth_poa_middleware

WP_TOKEN_CONTRACT = os.environ["WP_TOKEN_CONTRACT"]
WP_PRIVATE_KEY = os.environ["WP_PRIVATE_KEY"]
WP_INFURA_URL = os.environ["WP_INFURA_URL"]


class CollectableContract:
    def __init__(self, contract_address: str):
        self.w3 = Web3(HTTPProvider(WP_INFURA_URL))
        self.w3.middleware_onion.inject(geth_poa_middleware, layer=0)
        self.priv = WP_PRIVATE_KEY

        self.account = self.w3.eth.account.privateKeyToAccount(self.priv)
        self.nonce = self.w3.eth.getTransactionCount(self.account.address)

        contract_address = self.w3.toChecksumAddress(contract_address)
        contract_abi = json.loads(
            open("./ethereum/ERC1155Collectable.json").read())

        self.w3.eth.defaultAccount = self.account
        self.contract = self.w3.eth.contract(
            address=contract_address, abi=contract_abi["abi"]
        )

    def get_token_balances(self, owner: str):
        balances = self.contract.functions.getTokenBalances(owner).call(
            {"from": self.account.address}
        )
        return balances

    def get_token_balance(self, owner: str, id: int):
        balance = self.contract.functions.getTokenBalance(owner, id).call(
            {"from": self.account.address}
        )
        return balance

    def get_token(self, id: int):
        raw_token = self.contract.functions.getToken(id).call(
            {"from": self.account.address}
        )
        token = {
            "creator": raw_token[0],
            "certified": raw_token[1],
            "social": raw_token[2][0],
            "environment": raw_token[2][1],
            "impact": raw_token[2][2],
            "booster": raw_token[2][3],
        }
        return token

    def get_current_id(self):
        current_id = self.contract.functions.current_id().call(
            {"from": self.account.address}
        )
        return current_id

    def generate_metadata(self):
        metadata = {
            "chainId": 5,
            "gas": 3000000,
            "gasPrice": self.w3.toWei("1", "gwei"),
            "nonce": self.nonce,
            "from": self.account.address,
        }

        return metadata

    def send_transaction(self, txn):
        signed_txn = self.w3.eth.account.sign_transaction(
            txn, private_key=self.priv
        )
        txn_hash = self.w3.eth.sendRawTransaction(
            signed_txn.rawTransaction)

        return txn_hash

    def mint_waste_token(
        self,
        to: str,
        certified: bool,
        amount: int,
        social: int,
        environment: int,
        impact: int,
        boosted: bool,
    ):
        try:
            txn = self.contract.functions.mintWasteToken(
                to, amount, certified, social, environment, impact, boosted
            ).buildTransaction(self.generate_metadata())

            txn_hash = self.send_transaction(txn)
            
            self.nonce += 1

            return True, txn_hash
        except Exception as e:
            print(e)
            return False, None

    def burn_waste_token(self, owner: str, amount: int, id: int):
        try:
            txn = self.contract.functions.burnWasteToken(
                owner, amount, id
            ).buildTransaction(self.generate_metadata())

            txn_hash = self.send_transaction(txn)
            
            self.nonce += 1

            return True, txn_hash
        except Exception as e:
            print(e)
            return False, None

    def safe_batch_transfer(self, _from: str, to: str, ids: list, amounts: list):
        try:
            txn = self.contract.functions.safeBatchTransferFrom(
                _from, to, ids, amounts, ""
            ).buildTransaction(self.generate_metadata())

            txn_hash = self.send_transaction(txn)
            
            self.nonce += 1

            return True, txn_hash
        except Exception as e:
            print(e)
            return False, None


contract_instance = CollectableContract(WP_TOKEN_CONTRACT)
