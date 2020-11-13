from fastapi import FastAPI
from bot import sms_bot, call_bot

app = FastAPI()

@app.get('/message')
def message():
    sid = sms_bot.send_message('Triggered via API', '+31623129754')
    return {'sid': sid}

@app.get('/call')
def call():
    sid = call_bot.call('+31623129754')
    return {'sid': sid}
