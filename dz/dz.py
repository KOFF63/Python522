# import os
#
#
# def process_files(root_dir='Work'):
#     empty_dir = os.path.join('work', 'empty_files')
#     os.makedirs(empty_dir, exist_ok=True)
#     print("Непустые файлы:")
#     for root, dirs, files in os.walk(root_dir):
#         for file in files:
#             file_path = os.path.join(root, file)
#             size = os.path.getsize(file_path)
#             if size > 0:
#                 print(f"'{file_path}' - {size} bytes")
#     print("\nПеремещение пустых файлов:")
#     for root, dirs, files in os.walk(root_dir):
#         for file in files:
#             file_path = os.path.join(root, file)
#             if os.path.getsize(file_path) == 0:
#                 new_path = os.path.join(empty_dir, file)
#                 with open(file_path, 'rb') as src, open(new_path, 'wb') as dst:
#                     dst.write(src.read())
#                 os.remove(file_path)
#                 print(f"Перемещение: '{file}' из '{file_path}' в '{new_path}'")
#
#
# if __name__ == "__main__":
#     process_files()

#
# class Car:
#     def __init__(self, model_name="", year=0, manufacturer="", engine_power="", color="", price=0.0):
#         self._model_name = model_name
#         self._year = year
#         self._manufacturer = manufacturer
#         self._engine_power = engine_power
#         self._color = color
#         self._price = price
#
#     def display_data(self):
#         print(" Данные автомобиля ".center(40, "*"))
#         print(f"Название модели: {self._model_name}")
#         print(f"Год выпуска: {self._year}")
#         print(f"Производитель: {self._manufacturer}")
#         print(f"Мощность двигателя: {self._engine_power}")
#         print(f"Цвет машины: {self._color}")
#         print(f"Цена: {self._price}")
#         print("=" * 40)
#
#     def get_model_name(self):
#         return self._model_name
#
#     def get_year(self):
#         return self._year
#
#     def get_manufacturer(self):
#         return self._manufacturer
#
#     def get_engine_power(self):
#         return self._engine_power
#
#     def get_color(self):
#         return self._color
#
#     def get_price(self):
#         return self._price
#
#     def set_model_name(self, model_name):
#         self._model_name = model_name
#
#     def set_year(self, year):
#         self._year = year
#
#     def set_manufacturer(self, manufacturer):
#         self._manufacturer = manufacturer
#
#     def set_engine_power(self, engine_power):
#         self._engine_power = engine_power
#
#     def set_color(self, color):
#         self._color = color
#
#     def set_price(self, price):
#         self._price = price
#
#
# car = Car()
# car.set_model_name("X7 M50i")
# car.set_year(2021)
# car.set_manufacturer("BMW")
# car.set_engine_power("530 л.с.")
# car.set_color("white")
# car.set_price(10790000)
#
# car.display_data()
# car.set_model_name("Q7 4M")
# car.set_year(2022)
# car.set_manufacturer("AUDI")
# car.set_engine_power("286 л.с.")
# car.set_color("black")
# car.set_price(9000000)
#
# print("\nПосле изменения:")
# print(f"Название модели: {car.get_model_name()}")
# print(f"Год выпуска: {car.get_year()}")
# print(f"Производитель: {car.get_manufacturer()}")
# print(f"Мощность двигателя: {car.get_engine_power()}")
# print(f"Цвет машины: {car.get_color()}")
# print(f"Цена: {car.get_price()}")


class WeightConverter:
    def __init__(self, kilograms: float):
        self._kilograms = kilograms

    @property
    def kilograms(self):
        return self._kilograms

    @kilograms.setter
    def kilograms(self, value: float):
        if not isinstance(value, (int, float)):
            raise ValueError("Килограммы задаются только числами")
        self._kilograms = value

    @property
    def pounds(self):
        return round(self._kilograms * 2.205, 3)

    def __str__(self):
        return f"{self._kilograms} кг => {self.pounds} фунтов"


converter1 = WeightConverter(12)
print(converter1)
converter2 = WeightConverter(41)
print(converter2)

try:
    converter1.kilograms = "100"
except ValueError as e:
    print(f"{e}")

