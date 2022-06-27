import sys

# Data
sys.path.append('/home/skywalker/Documents/unal/OOP/suggest-me--app/data')
import database


database = database.Database(
    'localhost',
    'postgres',
    '123456',
    'suggest-me',
    '5432'
)
