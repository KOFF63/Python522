from view import FilmView
from model import FilmModel


class FilmController:
    def __init__(self):
        self.film_model = FilmModel()
        self.film_view = FilmView()

    def run(self):
        while True:
            user_answer = self.film_view.wait_user_answer()
            if user_answer == "q":
                self.film_model.save_data()
                break
            self.check_user_answer(user_answer)

    def check_user_answer(self, answer):
        if answer == "1":
            film_data = self.film_view.add_user_film()
            self.film_model.add_film(film_data)
        elif answer == "2":
            films = self.film_model.get_all_films()
            self.film_view.show_all_films(films)
        elif answer == "3":
            film_title = self.film_view.get_user_film()
            try:
                film = self.film_model.get_single_film(film_title)
            except KeyError:
                self.film_view.show_incorrect_title_error(film_title)
            else:
                self.film_view.show_single_film(film)
        elif answer == "4":
            film_title = self.film_view.get_user_film()
            try:
                title = self.film_model.remove_film(film_title)
            except KeyError:
                self.film_view.show_incorrect_title_error(film_title)
            else:
                self.film_view.remove_single_film(title)
        else:
            self.film_view.show_incorrect_answer_error(answer)
