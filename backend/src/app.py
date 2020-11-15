from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from handlers.blockchain import blockchain

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount("/tokens", blockchain)
