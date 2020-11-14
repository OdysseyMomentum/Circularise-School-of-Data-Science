import pdfkit

from typing import Optional
from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader, select_autoescape


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(["html", "xml"]),
)
certificate_template = env.get_template("certificate.html")


class ScoreData(BaseModel):
    social: int
    environment: int
    impact: int
    booster: Optional[int] = 0


class PdfInput(BaseModel):
    actor: str
    score_data: ScoreData
    waste_points: int
    certificate_reference: str


def generate_pdf_certificate(input: PdfInput):
    html: str = certificate_template.render(title="test Hello PDF!")
    print(html)
    return pdfkit.from_string(html, False)
