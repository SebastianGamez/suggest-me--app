class User:
    def __init__(self, id, username, password, pleasures):
        self._id = id
        self._user = username
        self._password = password
        self._pleasures = pleasures

    @property
    def id(self):
        return self._id

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, username):
        self._username = username

    @property
    def password(self):
        return self._password

    @property
    def pleasures(self):
        return self._pleasures

    @pleasures.setter
    def pleasures(self, pleasures):
        self._pleasures = pleasures

    def make_findings(self, library):
        suggestions = {}
        for book in library:
            if book.gender in self.pleasures:
                suggestions[book.title] = {
                    'Id: ' + str(book.id),
                    'Autor:' + book.author,
                    'Publicación: ' + str(book.release_date),
                    'Género: ' + book.gender.capitalize()
                }
        return suggestions
