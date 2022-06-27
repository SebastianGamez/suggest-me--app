from pydantic import BaseModel


class Gender(BaseModel):
    genders: list
