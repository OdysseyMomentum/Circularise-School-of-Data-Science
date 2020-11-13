from fastapi import FastAPI
from sms import sender

app = FastAPI()

@app.get('/')
def message():
    sid = sender.send_message('Triggered via API', '+31623129754')
    return {'sid': sid}
