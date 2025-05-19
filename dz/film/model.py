import pickle
import os.path


class Film:
    def __init__(self, title, genre, director, year, duration, studio, actors):
        self.title = title
        self.genre = genre
        self.director = director
        self.year = year
        self.duration = duration
        self.studio = studio
        self.actors = actors

    def __str__(self):
        return f"{self.title} ({self.year})"


class FilmModel:
    def __init__(self):
        self.db_name = "films_db.txt"
        self.films = self.load_data()

    def add_film(self, film_dict):
        film = Film(*film_dict.values())
        self.films[film.title] = film

    def get_all_films(self):
        return self.films.values()

    def get_single_film(self, film_title):
        film = self.films[film_title]
        return {
            "название": film.title,
            "жанр": film.genre,
            "режиссер": film.director,
            "год выпуска": film.year,
            "длительность": film.duration,
            "студия": film.studio,
            "актеры": ', '.join(film.actors)
        }

    def remove_film(self, film_title):
        return self.films.pop(film_title)

    def save_data(self):
        with open(self.db_name, "wb") as f:
            pickle.dump(self.films, f)

    def load_data(self):
        if os.path.exists(self.db_name):
            with open(self.db_name, "rb") as f:
                return pickle.load(f)
        return {}
