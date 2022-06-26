# Fast Api
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Models
from models.register import UserRegister
from models.login import UserLogin
from models.pleasures import Pleasures
from models.books import Genders

# Helpers
from helpers.database import database

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# CRUD methods


# Register


@app.post('/api/register')
async def register(user: UserRegister):
    return {'result': database.add_user(dict(user))}

# Login


@app.post('/api/login')
async def login(user: UserLogin):
    return {'result': database.get_user(dict(user))}

# Set pleasures


@app.put('/api/pleasures')
async def set_pleasures(pleasures: Pleasures):
    return {'result': database.set_pleasures(dict(pleasures))}


# Get books
@app.get('/api/books/{genders}')
async def get_books(genders: str):
    return {'result': database.get_books(tuple(genders.split(',')))}
