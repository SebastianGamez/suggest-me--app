import psycopg2

from book import Book


class DatabaseReader:
    def __init__(self, host, user, password, database):
        self._host = host
        self._user = user
        self._password = password
        self._database = database

    @property
    def host(self):
        return self._host

    @property
    def user(self):
        return self._user

    @property
    def password(self):
        return self._password

    @property
    def database(self):
        return self._database

    def get_books(self) -> list:
        connection = psycopg2.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database
        )
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM "Books"')
        rows = cursor.fetchall()
        return [Book(book[0], book[1], book[2], book[3], book[4]) for book in rows]



