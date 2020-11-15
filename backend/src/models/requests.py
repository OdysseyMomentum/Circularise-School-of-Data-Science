import os

from pydantic import BaseModel

WP_PUBLIC_KEY = os.environ["WP_PUBLIC_KEY"]
WP_PUBLIC_KEY_RECEIVER = os.environ["WP_PUBLIC_KEY_RECEIVER"]


class WasteToken(BaseModel):
    creator: str = WP_PUBLIC_KEY
    social: int = 1000
    environment: int = 2000
    impact: int = 3000
    booster: int = 4000
    waste_points: int = 5000


class BurnData(BaseModel):
    owner: str = WP_PUBLIC_KEY
    amount: int = 100
    id: int = 0


class TransferData(BaseModel):
    owner: str = WP_PUBLIC_KEY
    to: str = WP_PUBLIC_KEY_RECEIVER
    amounts: list = [100, 200]
    ids: list = [0, 1]
