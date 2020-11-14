import os
import json
import random
from twilio.rest import Client

class TwilioBot():
    def __init__(self, sid, auth_token, from_):
        self.client = Client(sid, auth_token)
        self.from_ = from_

    def send_message(self, to):
        first = random.randrange(10)
        second = random.randrange(10)
        third = random.randrange(10)

        body = f'Your numbers are: {first} {second} {third}'

        message = self.client.messages.create(
            body=body,
            from_=self.from_,
            to=to
        )

        return message.sid

    def call(self, to):    
        call = self.client.calls.create(
            twiml='<Response><Gather action="/results" method="POST" input="speech" timeout="5" finishOnKey="#" numDigits="3"><Say>Please pronounce the words sent to you by SMS</Say></Gather></Response>',
            to=to,
            from_=self.from_,
        )

        print(call)
        return call.sid


SID = 'AC868cb50af81ae922f12c63ae6cf59c01'
TOKEN = '938ff01e79065440238a37f37d07c960'
from_ = '+12057728058'

SID_2 = 'AC89cddec6afb1f106d6405a1b67b0e687'
TOKEN_2 = '144598689191f7deefb467707d1c4ab7'
from_2 = '+12056547897'

sms_bot = TwilioBot(SID, TOKEN, from_)
call_bot = TwilioBot(SID_2, TOKEN_2, from_2)