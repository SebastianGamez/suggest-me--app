# Fast Api
from fastapi import FastAPI

# Models
from models.register import UserRegister
from models.login import UserLogin
from models.pleasures import Pleasures
from models.books import Genders

# Helpers
from helpers.database import database

app = FastAPI()

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
@app.get('/api/books')
async def get_books(genders: Genders):
    return {'result': database.get_books(tuple(dict(genders)['genders']))}
