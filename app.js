document.querySelector('Textarea').addEventListener('input', function (event) {

    let Text = event.target.value.toString();

    document.getElementById('tecken').innerHTML = "tecken: " + Text.length
    document.getElementById('ord').innerHTML = "ord: " + Text.match( /(\w+)/g ).length

});