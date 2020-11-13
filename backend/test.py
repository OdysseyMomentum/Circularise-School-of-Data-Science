import requests

def test_call():
    r = requests.get('http://localhost:8000/call')
    print(r.json())
    return r.ok

def test_message():
    r = requests.get('http://localhost:8000/message')
    print(r.json())
    return r.ok

test_call()
