import io

from fastapi import FastAPI, Query, Request, BackgroundTasks, Header, Depends, Response
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse

from models.requests import BurnData, TransferData, WasteToken
from utils.pdf import generate_pdf_certificate
from utils.smart_contract import contract_instance

blockchain = FastAPI()


@blockchain.get("/balance")
def get_balance(request: Request, public_key: str = "0x4E799D483A36e954E641938f6b52B44aB107f1bf", token_id: int = 0):
    balance = contract_instance.get_token_balance(public_key, token_id)

    return JSONResponse({"balance": balance})


@blockchain.get("/balances")
def get_balances(request: Request, public_key: str = "0x4E799D483A36e954E641938f6b52B44aB107f1bf"):
    balances = contract_instance.get_token_balances(public_key)

    return JSONResponse({"balances": balances})


@blockchain.get("/current")
def get_current_id(request: Request):
    current_id = contract_instance.get_current_id()

    return JSONResponse({"currentId": current_id})


@blockchain.get("/introspect")
def get_token_by_id(request: Request, id: int = 0):
    token = contract_instance.get_token(id)

    return JSONResponse({"token": token})


@blockchain.post("/mint")
def mint_token(request: Request, data: WasteToken):
    minted, txn_hash = contract_instance.mint_waste_token(
        data.creator,
        False,
        data.waste_points,
        data.social,
        data.environment,
        data.impact,
        data.booster,
    )

    if not minted:
        return JSONResponse({"minted": False}, status_code=409)

    return JSONResponse({"minted": True, "txnHash": txn_hash.hex()})


@blockchain.post("/mint/certified")
def mint_certified_token(request: Request, data: WasteToken):
    minted, txn_hash = contract_instance.mint_waste_token(
        data.creator,
        True,
        data.waste_points,
        data.social,
        data.environment,
        data.impact,
        data.booster,
    )

    if not minted:
        return JSONResponse({"minted": False}, status_code=409)

    try:
        txn_receipt = contract_instance.w3.eth.waitForTransactionReceipt(
            txn_hash)
    except Exception as e:
        return JSONResponse({"message": str(e)}, status_code=409)

    returned_hash = txn_receipt["transactionHash"].hex()

    cert = generate_pdf_certificate(data, returned_hash)

    return Response(content=cert, media_type="application/pdf")


@blockchain.post("/burn")
def burn_token(request: Request, data: BurnData):
    burnt, txn_hash = contract_instance.burn_waste_token(
        data.owner,
        data.amount,
        data.id
    )

    if not burnt:
        return JSONResponse({"burnt": False}, status_code=409)

    return JSONResponse({"burnt": True, "txnHash": txn_hash.hex()})


@blockchain.post("/transfer")
def transfer_tokens(request: Request, data: TransferData):
    transferred, txn_hash = contract_instance.safe_batch_transfer(
        data.owner,
        data.to,
        data.ids,
        data.amounts
    )

    if not transferred:
        return JSONResponse({"transferred": False}, status_code=409)

    return JSONResponse({"transferred": True, "txnHash": txn_hash.hex()})