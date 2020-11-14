```
curl --location --request POST 'http://localhost:8000/generate-pdf' \
--header 'Content-Type: application/json' \
--data-raw '{
    "actor": "Location-X",
    "score_data": {
        "social": 1,
        "environment": 0,
        "impact": 8,
        "booster": 0
    },
    "waste_points": 9,
    "certificate_reference": "some contract addr? or someting else."
}'
```
