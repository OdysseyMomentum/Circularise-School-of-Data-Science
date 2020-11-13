import requests

r = requests.get('http://localhost:8000/call')
print(r.json())