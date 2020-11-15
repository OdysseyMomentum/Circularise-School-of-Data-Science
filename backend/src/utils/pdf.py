import pdfkit

from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader, select_autoescape


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(["html", "xml"]),
)
certificate_template = env.get_template("certificate.html")


class PdfInput(BaseModel):
    creator: str
    social: int
    environment: int
    impact: int
    booster: int
    waste_points: int
    txn_hash: str = None


def generate_pdf_certificate(input: PdfInput, txn_hash: str):
    html: str = certificate_template.render(
        title='Your WP Certificate',
        creator=input.creator,
        social=input.social,
        environment=input.environment,
        impact=input.impact,
        booster=input.booster,
        waste_points=input.waste_points,
        txn_hash=txn_hash
    )

    return pdfkit.from_string(html, False)
