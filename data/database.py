import cryptocode
import psycopg2


class Database:
    def __init__(self, host, user, password, database, port):
        self._host = host
        self._user = user
        self._password = password
        self._database = database
        self._port = port

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

    @property
    def port(self):
        return self._port

    def connection(self) -> object:

        connection = psycopg2.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            database=self.database
        )
        return connection

    def add_user(self, user) -> dict:

        connection = self.connection()
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM public.users WHERE email = %s OR username = %s',
                       (user['email'], user['username']))
        if len(cursor.fetchall()) == 0:

            sentence = 'INSERT INTO public.Users(username, email, password, pleasures) VALUES(%s, %s, %s, %s)'
            values = (user["username"], user["email"], cryptocode.encrypt(user['password'], 'apassword'), None)
            cursor.execute(sentence, values)
            connection.commit()

            result = {
                'registered': True,
                'message': 'User registered'
            }

        else:
            result = {
                'registered': False,
                'error': 405,
                'message': 'The username or email has been registered before'
            }

        return result

    def get_user(self, user) -> dict:

        connection = self.connection()
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM public.users WHERE username = %s', (user['username'],))
        row = cursor.fetchall()

        if len(row) == 1:
            if cryptocode.decrypt(row[0][3], 'apassword') == user['password']:
                result = {
                    'logged': True,
                    'message': 'User logged',
                    'data': {
                        'id': row[0][0],
                        'username': row[0][1],
                        'email': row[0][2],
                        'pleasures': row[0][4]
                    }
                }
            else:
                result = {
                    'logged': False,
                    'error': 405,
                    'message': 'Password or username incorrect'
                }
        else:
            result = {
                'logged': False,
                'error': 405,
                'message': 'Password or username incorrect'
            }

        return result

    def set_pleasures(self, data) -> dict:

        connection = self.connection()
        cursor = connection.cursor()
        cursor.execute('UPDATE public.users SET pleasures = %s WHERE id = %s', (','.join(data['pleasures']), data['id']))
        connection.commit()

        return {
            'added': True,
            'pleasures': data['pleasures'],
            'message': 'Pleasures added'
        }

    def get_books(self, data) -> dict:

        connection = self.connection()
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM public.books WHERE gender IN %s', (data,))

        return {'books': cursor.fetchall()}
