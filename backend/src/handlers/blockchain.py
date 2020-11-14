import io

from fastapi import FastAPI, Query, Request, BackgroundTasks, Header, Depends
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse

from utils.smart_contract import contract_instance
from utils.pdf import PdfInput, generate_pdf_certificate

blockchain = FastAPI(openapi_url=None, redoc_url=None, docs_url=None
                     )


@blockchain.post('/certificate')
def get_certificate(request: Request, data: PdfInput):
    print(data)
    cert = generate_pdf_certificate(data)

    with open('testpdf.pdf', 'wb') as file:
        file.write(cert)

    # print(cert)
    cert_file = io.BytesIO(cert)
    return StreamingResponse(cert_file)


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
    minted, receipt = contract_instance.mint_waste_token(
        '0x4E799D483A36e954E641938f6b52B44aB107f1bf',
        1000,
        1000,
        1000,
        1000,
        False
    )

    if not minted:
        return JSONResponse({'minted': False}, status_code=409)

    

    return JSONResponse({'minted': True, 'txnReceipt': receipt})
