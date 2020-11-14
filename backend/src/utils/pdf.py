import pdfkit

from typing import Optional
from pydantic import BaseModel
from jinja2 import Environment, FileSystemLoader, select_autoescape


env = Environment(
    loader=FileSystemLoader("templates"),
    autoescape=select_autoescape(["html", "xml"]),
)
certificate_template = env.get_template("certificate.html")

# class ScoreData(BaseModel):
#     social: int
#     environment: int
#     impact: int
#     booster: Optional[int] = 0


# class PdfInput(BaseModel):
#     actor: str
#     score_data: ScoreData
#     waste_points: int
#     certificate_reference: str

class PdfInput(BaseModel):
    creator: str
    social: int
    environment: int
    impact: int
    booster: bool
    waste_points: int

def generate_pdf_certificate(input: PdfInput):
    print(input.creator)
    html: str = certificate_template.render(
        title="test Hello PDF!",
        # creator=input.creator,
        # social=input.social,
        # environment=input.environment,
        # impact=input.impact,
        # booster=input.booster,
        # waste_points=input.waste_points
        )

    return pdfkit.from_string(html, False)
