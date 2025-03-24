def swap_lines(filename, pos1, pos2):
    with open(filename, 'r') as file:
        lines = file.readlines()
    lines[pos1], lines[pos2] = lines[pos2], lines[pos1]
    with open(filename, 'w') as file:
        file.writelines(lines)
    return lines


filename = 'test.txt'
pos1 = 1
pos2 = 2
with open(filename, 'w') as file:
    file.write("Замена строки в текстовом файле;\n")
    file.write("изменить строку в списке;\n")
    file.write("записать список в файл;\n")
print("Содержимое файла до обмена:")

with open(filename, 'r') as file:
    print(file.read())

new_lines = swap_lines(filename, pos1, pos2)
print("\nСодержимое файла после обмена:")
print(''.join(new_lines))
