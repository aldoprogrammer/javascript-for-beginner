document.getElementById('submitButton').onclick = function () {
    a = document.getElementById('aTextBox').value;
    a = Number(a);

    b = document.getElementById('bTextBox').value;
    a = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('cLabel').innerHTML = "Side C is: " + c;
}