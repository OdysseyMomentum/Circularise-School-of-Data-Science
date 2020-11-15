import base64
import pdfkit
import io
import qrcode

from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader, select_autoescape

from models.requests import WasteToken

env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(["html", "xml"]),
)
certificate_template = env.get_template("formatted.html")

explorer = "https://goerli.etherscan.io/tx/"

logo_path = open('./templates/badge.png', 'rb')
# logo = logo_path.read()
logo_data_uri = base64.b64encode(logo_path.read()).decode("ascii")

def generate_pdf_certificate(token: WasteToken, txn_hash: str):
    img = qrcode.make(f"{explorer}{txn_hash}")

    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)
    img_data_uri = base64.b64encode(buffer.read()).decode("ascii")

    html = certificate_template.render(
        creator=token.creator,
        social=token.social,
        environment=token.environment,
        impact=token.impact,
        booster=token.booster,
        waste_points=token.waste_points,
        txn_hash=txn_hash,
        logo_data_uri=logo_data_uri,
        img_data_uri=img_data_uri,
    )

    return pdfkit.from_string(html, False)
