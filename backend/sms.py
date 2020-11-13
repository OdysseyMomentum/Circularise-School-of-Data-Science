import os
from twilio.rest import Client

class SMSSender():
    def __init__(self, sid, auth_token, from_):
        self.client = Client(sid, auth_token)
        self.from_ = from_

    def send_message(self, body, to):
        message = self.client.messages.create(
            body=body,
            from_=self.from_,
            to=to
        )

        return message.sid


SID = 'AC868cb50af81ae922f12c63ae6cf59c01'
TOKEN = '938ff01e79065440238a37f37d07c960'
from_number = '+12057728058'

sender = SMSSender(SID, TOKEN, from_number)