import base64
import pdfkit
import io
import qrcode

from typing import Optional
from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader, select_autoescape


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(["html", "xml"]),
)
certificate_template = env.get_template("certificate.html")

explorer = "https://goerli.etherscan.io/tx/"


class PdfInput(BaseModel):
    creator: str
    social: int
    environment: int
    impact: int
    booster: int
    waste_points: int


def generate_pdf_certificate(input: PdfInput, txn_hash: str):
    img = qrcode.make(f"{explorer}{txn_hash}")

    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)
    img_data_uri = base64.b64encode(buffer.read()).decode("ascii")

    html = certificate_template.render(
        creator=input.creator,
        social=input.social,
        environment=input.environment,
        impact=input.impact,
        booster=input.booster,
        waste_points=input.waste_points,
        txn_hash=txn_hash,
        img_data_uri=img_data_uri,
    )

    return pdfkit.from_string(html, False)
