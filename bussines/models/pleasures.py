from pydantic import BaseModel


class Pleasures(BaseModel):
    id: int
    pleasures: str
