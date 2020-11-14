from fastapi import FastAPI, Response

from handlers.blockchain import blockchain
from utils.pdf import PdfInput, generate_pdf_certificate

app = FastAPI()
app.mount("/blockchain", blockchain)


@app.post("/generate-pdf/")
def generate_pdf(pdf_input: PdfInput):
    pdf_file = generate_pdf_certificate(pdf_input)
    return Response(content=pdf_file, media_type="application/pdf")
