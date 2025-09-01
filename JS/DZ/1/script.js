function checkAnswer() {
    const selected = document.querySelector('input[name="radio2"]:checked');
    const result = document.getElementById('result');
    
    if (!selected) {
        result.textContent = "Пожалуйста, выберите ответ!";
        result.className = "incorrect";
        result.style.display = 'block';
        return;
    }
    
    if (selected.value === "correct") {
        result.textContent = "Правильно! Это ёлка!";
        result.className = "correct";
        result.style.display = 'block';
    } else {
        result.textContent = "Неправильно. Попробуйте еще раз!";
        result.className = "incorrect";
        result.style.display = 'block';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', checkAnswer);
    } else{
        
    }
});