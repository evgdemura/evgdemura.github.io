var text =
    "ТУК - ТУК! | Проснись, Олег...|Следуй за белым кроликом!| Матрица следит за тобой!";
var out = document.getElementById('out');
var index = 0;
var str = '';
//var body = document.getElementById('body');

function matrix() {
    //    body.cssText = "background:#fff";
    setTimeout(function () {
        //      console.log('text', text[index]);

        if (text[index] == '|') {
            str += '<br>';
            out.innerHTML = str;
            index++;
        }
        str += text[index];

        out.innerHTML = str + ' |';
        index++;

        if (index >= text.length) {
            out.innerHTML = str;
            body.style.cssText = "background: url(morfius.jpg) center center no-repeat #000;"
            return;
        }
        matrix()
    }, time(250))
}


var time = function getRandom(max) {
    return Math.floor(Math.random() * (max) + 50);
};
matrix();
