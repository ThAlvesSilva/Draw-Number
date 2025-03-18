// function generateNumber() {

//     const min = Math.ceil(document.querySelector('.input-min').value)
//     const max = Math.floor(document.querySelector('.input-max').value)

//     const result = Math.floor(Math.random() * (max - min + 1)) + min;


//     alert(result)
    
// }

function generateNumber() {
    const minInput = document.querySelector('.input-min');
    const maxInput = document.querySelector('.input-max');

    if (!minInput.value || !maxInput.value) {
        alert("Por favor, preencha ambos os campos.");
        return; // Impede a execução do restante da função
    }

    const min = Math.ceil(parseFloat(minInput.value));
    const max = Math.floor(parseFloat(maxInput.value));

    // Verifique se os valores são números válidos
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos nos campos.");
        return;
    }

    // Verifique se o valor mínimo é menor ou igual ao valor máximo
    if (min > max) {
        alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}