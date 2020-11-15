from pydantic import BaseModel


class WasteToken(BaseModel):
    creator: str = '0x4E799D483A36e954E641938f6b52B44aB107f1bf'
    social: int = 1000
    environment: int = 2000
    impact: int = 3000
    booster: int = 4000
    waste_points: int = 5000


class BurnData(BaseModel):
    owner: str
    amount: int
    id: int


class TransferData(BaseModel):
    owner: str
    to: str
    amounts: list
    ids: list
