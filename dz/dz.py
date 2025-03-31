import os


def process_files(root_dir='Work'):
    empty_dir = os.path.join('work', 'empty_files')
    os.makedirs(empty_dir, exist_ok=True)
    print("Непустые файлы:")
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            file_path = os.path.join(root, file)
            size = os.path.getsize(file_path)
            if size > 0:
                print(f"'{file_path}' - {size} bytes")
    print("\nПеремещение пустых файлов:")
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.getsize(file_path) == 0:
                new_path = os.path.join(empty_dir, file)
                with open(file_path, 'rb') as src, open(new_path, 'wb') as dst:
                    dst.write(src.read())
                os.remove(file_path)
                print(f"Перемещение: '{file}' из '{file_path}' в '{new_path}'")


if __name__ == "__main__":
    process_files()
