from fastapi import FastAPI, Response
from pdf import PdfInput, generate_pdf_certificate

# from bot import sms_bot, call_bot

app = FastAPI()


@app.post("/generate-pdf/")
def generate_pdf(pdf_input: PdfInput):
    pdf_file = generate_pdf_certificate(pdf_input)
    return Response(content=pdf_file, media_type="application/pdf")


# disabled for now (not used)
# @app.get("/message")
# def message():
#     sid = sms_bot.send_message("Triggered via API", "+31623129754")
#     return {"sid": sid}


# disabled for now (not used)
# @app.get("/call")
# def call():
#     sid = call_bot.call("+31623129754")
#     return {"sid": sid}
