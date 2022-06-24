class Book:

    def __init__(self, id, author, title, release_date, gender):
        self._id = id
        self._author = author
        self._title = title
        self._release_date = release_date
        self._gender = gender

    @property
    def id(self):
        return self._id

    @property
    def author(self):
        return self._author

    @property
    def title(self):
        return self._title

    @property
    def release_date(self):
        return self._release_date

    @property
    def gender(self):
        return self._gender
