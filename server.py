from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from json_reader import read_json_data

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/artists")
def read_artists():
    return read_json_data()