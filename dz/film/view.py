def add_title(title):
    def wrapper(func):
        def wrap(*args, **kwargs):
            print(f" {title} ".center(50, "="))
            output = func(*args, **kwargs)
            print("=" * 50)
            return output

        return wrap

    return wrapper


class FilmView:
    @add_title("Редактирование каталога фильмов")
    def wait_user_answer(self):
        print("Действия с фильмами:")
        print("1 - добавление фильма")
        print("2 - просмотр всех фильмов")
        print("3 - просмотр определенного фильма")
        print("4 - удаление фильма")
        print("q - выход из программы")
        return input("Выберите вариант действия: ")

    @add_title("Добавление фильма")
    def add_user_film(self):
        film_data = {
            "название": input("Введите название фильма: "),
            "жанр": input("Введите жанр: "),
            "режиссер": input("Введите режиссера: "),
            "год выпуска": input("Введите год выпуска: "),
            "длительность": input("Введите длительность (мин): "),
            "студия": input("Введите студию: "),
            "актеры": [actor.strip() for actor in input("Введите актеров (через запятую): ").split(",")]
        }
        return film_data

    @add_title("Список фильмов")
    def show_all_films(self, films):
        for idx, film in enumerate(films, 1):
            print(f"{idx}. {film}")

    @add_title("Ввод названия фильма")
    def get_user_film(self):
        return input("Введите название фильма: ")

    @add_title("Просмотр фильма")
    def show_single_film(self, film):
        for key, value in film.items():
            print(f"{key}: {value}")

    @add_title("Сообщение об ошибке")
    def show_incorrect_title_error(self, film_title):
        print(f"Фильма с названием '{film_title}' не существует")

    @add_title("Удаление фильма")
    def remove_single_film(self, film_title):
        print(f"Фильм '{film_title}' был удален")

    @add_title("Сообщение об ошибке")
    def show_incorrect_answer_error(self, answer):
        print(f"Варианта '{answer}' не существует")
