function randomColor() {

    var arr = ['#'];

    for (var i = 0; i < 6; i++) {

        var n1 = Math.floor(Math.random() * 16);
        n1 = n1.toString(16).toUpperCase();
        arr.push(n1)
    }

    col_str = arr.join('');

    return col_str;
}

function color_gen() {

    document.getElementById('div-id').style.backgroundColor = randomColor();
}

window.onload = color_gen;
document.getElementById('col-cng').onclick = color_gen;
