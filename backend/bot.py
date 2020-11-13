import os
import json
from twilio.rest import Client

class TwilioBot():
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

    def call(self, to):    
        call = self.client.calls.create(
            url='http://demo.twilio.com/docs/voice.xml',
            # url='https://circularise-logos.s3.eu-west-3.amazonaws.com/test.xml',
            to=to,
            from_=self.from_,
            record=True
        )

        return call.sid

class XMLGenerator():
    def __init__(self):
        with open('words.json', 'r') as file:
            words = file.read()
        self.words = json.loads(words)
        print(json.dumps(self.words, indent=4))


SID = 'AC868cb50af81ae922f12c63ae6cf59c01'
TOKEN = '938ff01e79065440238a37f37d07c960'
from_ = '+12057728058'

SID_2 = 'AC89cddec6afb1f106d6405a1b67b0e687'
TOKEN_2 = '144598689191f7deefb467707d1c4ab7'
from_2 = '+12056547897'

sms_bot = TwilioBot(SID, TOKEN, from_)
call_bot = TwilioBot(SID_2, TOKEN_2, from_2)
xml_gen = XMLGenerator()