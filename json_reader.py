import json

def read_json_data():
    file = open("data.json")
    data = file.read()
    return json.loads(data)


