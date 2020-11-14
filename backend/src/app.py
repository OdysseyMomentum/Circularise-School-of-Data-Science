from fastapi import FastAPI, Body, Request

from handlers.blockchain import blockchain
from utils.bot import sms_bot, call_bot

app = FastAPI()

@app.get('/message')
def message():
    sid = sms_bot.send_message('+31623129754')
    return {'sid': sid}

@app.get('/call')
def call():
    sid = call_bot.call('+31623129754')
    return {'sid': sid}

# @app.post('/results')
# def results(request: Request, SpeechResult = Body(...), Confidence = Body(...)):
#     print(SpeechResult, Confidence)
#     return {'message': 'ok'}


app.mount('/blockchain', blockchain)