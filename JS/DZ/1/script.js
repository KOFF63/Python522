
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    
    
    who() {
        return `Я ${this.name} мне ${this.age} лет. Я работаю ${this.job}ом.`;
    }
}


const person1 = new Person('Дмитрий', 26, 'Дизайнер');
const person2 = new Person('Станислав', 29, 'Программист');
const person3 = new Person('Сергей', 35, 'Менеджер');


const people = [person1, person2, person3];


function displayPeople() {
    const container = document.getElementById('people-container');
    
    people.forEach(person => {
        const div = document.createElement('div');
        div.className = 'person';
        div.textContent = person.who();
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', displayPeople);