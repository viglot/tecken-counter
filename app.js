document.querySelector('Textarea').addEventListener('input', function (event) {

    let Text = event.target.value.toString();


    document.getElementById('tecken').innerHTML = "tecken: " + Text.length

    document.getElementById('ord').innerHTML = "ord: " + Text.match( /(\w+)/g ).length

    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        return str.split(' ').length;
      }
});