import json
import time
from web3 import Web3, HTTPProvider
from web3.middleware import geth_poa_middleware

class CollectableContract:
    def __init__(self, contract_address: str):
        infura_url = 'https://goerli.infura.io/v3/2aa107e325864621b84416725a1bc1d9'
        self.w3 = Web3(HTTPProvider(infura_url))
        self.w3.middleware_onion.inject(geth_poa_middleware, layer=0)
        self.priv = '8f7f80cc49a1c4201b170aeca0dfbae28bf87397307a5aca306d0be63a465a55'

        self.account = self.w3.eth.account.privateKeyToAccount(self.priv)
        self.nonce = self.w3.eth.getTransactionCount(self.account.address)

        contract_address = self.w3.toChecksumAddress(contract_address)
        contract_abi = json.loads(open('./ethereum/ERC1155Collectable.json').read())
        
        self.w3.eth.defaultAccount = self.account
        self.contract = self.w3.eth.contract(address=contract_address, abi=contract_abi['abi'])

    def get_token_balances(self, owner: str):
        balances = self.contract.functions.getTokenBalances(owner).call({'from': self.account.address})
        return balances

    def get_token_balance(self, owner: str, id: int):
        balance = self.contract.functions.getTokenBalance(owner, id).call({'from': self.account.address})
        return balance

    def get_token(self, id: int):
        token = self.contract.functions.getToken(id).call({'from': self.account.address})
        return token

    def get_current_id(self):
        current_id = self.contract.functions.current_id().call({'from': self.account.address})
        return current_id

    def mint_waste_token(self, to: str, certified: bool, amount: int, social: int, environment: int, impact: int, boosted: bool):
        try:
            txn = self.contract.functions.mintWasteToken(to, amount, certified, social, environment, impact, boosted).buildTransaction(
                {
                'chainId': 5,
                'gas': 3000000,
                'gasPrice': self.w3.toWei('1', 'gwei'),
                'nonce': self.nonce,
                'from': self.account.address
            })

            signed_txn = self.w3.eth.account.sign_transaction(txn, private_key=self.priv)
            txn_hash = self.w3.eth.sendRawTransaction(signed_txn.rawTransaction)
            
            self.nonce += 1
            
            return True, txn_hash
        except Exception as e:
            print(e)
            return False, None

contract_instance = CollectableContract('0xB17eed02491290B5689AA5Aede5e727EF7a3437E')

