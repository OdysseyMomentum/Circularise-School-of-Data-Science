import io

from fastapi import FastAPI, Query, Request, BackgroundTasks, Header, Depends, Response
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse

from utils.smart_contract import contract_instance
from utils.pdf import PdfInput, generate_pdf_certificate

blockchain = FastAPI(openapi_url=None, redoc_url=None, docs_url=None
                     )


@blockchain.post('/certificate')
def get_certificate(request: Request, data: PdfInput):
    minted, txn_hash = contract_instance.mint_waste_token(
        data.creator,
        True,
        data.waste_points,
        data.social,
        data.environment,
        data.impact,
        data.booster
    )    

    if not minted:
        return JSONResponse({'minted': False}, status_code=409)

    try:
        txn_receipt = contract_instance.w3.eth.waitForTransactionReceipt(txn_hash)
    except:
        return JSONResponse({'message': 'error'}, status_code=409)

    returned_hash = txn_receipt['transactionHash'].hex()

    cert = generate_pdf_certificate(data, returned_hash)

    return Response(content=cert, media_type="application/pdf")


@blockchain.get('/balances')
def get_balances(request: Request):
    balances = contract_instance.get_token_balances(
        '0x4E799D483A36e954E641938f6b52B44aB107f1bf')

    return JSONResponse({'balances': balances})


@blockchain.get('/balance')
def get_balance(request: Request):
    balance = contract_instance.get_token_balance(
        '0x4E799D483A36e954E641938f6b52B44aB107f1bf', 0)

    return JSONResponse({'balance': balance})


@blockchain.get('/currentid')
def get_id(request: Request):
    current_id = contract_instance.get_current_id()

    return JSONResponse({'currentId': current_id})


@blockchain.get('/token/{id}')
def get_id(request: Request, id: int):
    token = contract_instance.get_token(id)

    return JSONResponse({'token': token})

@blockchain.post('/mint')
def post_mint(request: Request):
    minted, txn_hash = contract_instance.mint_waste_token(
        '0x4E799D483A36e954E641938f6b52B44aB107f1bf',
        False,
        1000,
        1000,
        1000,
        1000,
        1000
    )

    if not minted:
        return JSONResponse({'minted': False}, status_code=409)

    return JSONResponse({'minted': True, 'txnHash': txn_hash.hex()})
