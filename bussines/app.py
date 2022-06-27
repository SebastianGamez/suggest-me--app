# Fast Api
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Models
from models.user_register import UserRegister
from models.user_login import UserLogin
from models.pleasure import Pleasure

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
async def set_pleasures(pleasures: Pleasure):
    return {'result': database.set_pleasures(dict(pleasures))}


# Get books


@app.get('/api/books/{genders}')
async def get_books(genders: str):
    return {'result': database.get_books(tuple(genders.split(',')))}

