from fastapi import FastAPI, Response
from handlers.blockchain import blockchain

app = FastAPI()

app.mount("/tokens", blockchain)
