from pydantic import BaseModel


class WasteToken(BaseModel):
    creator: str = '0x4E799D483A36e954E641938f6b52B44aB107f1bf'
    social: int = 1000
    environment: int = 2000
    impact: int = 3000
    booster: int = 4000
    waste_points: int = 5000


class BurnData(BaseModel):
    owner: str = '0x4E799D483A36e954E641938f6b52B44aB107f1bf'
    amount: int = 100
    id: int = 0


class TransferData(BaseModel):
    owner: str = '0x4E799D483A36e954E641938f6b52B44aB107f1bf'
    to: str = '0xbf5A4176A00d7589362956FFE5e7d099970973AB'
    amounts: list = [100, 200]
    ids: list = [0, 1]
