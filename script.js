const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (height / Math.cbrt(weight)).toFixed(2);
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi > 44) {
        description = 'Cuidado! Seu peso está abaixo do recomendado.';
    } else if (bmi >= 41 && bmi <=44) {
        description = "Parabéns! Você está no peso ideal.";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi <= 41) {
        description = "Cuidado! Você está com Excesso de peso.";
    }    
    

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;


})