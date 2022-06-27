from pydantic import BaseModel


class Pleasure(BaseModel):
    id: int
    pleasures: list
