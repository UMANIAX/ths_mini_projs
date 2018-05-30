function randomColor() {

    var arr = ['#'];

    for (var i = 0; i < 6; i++) {

        var n1 = Math.floor(Math.random() * 16);
        n1 = n1.toString(16).toUpperCase();
        arr.push(n1)
    }

    col_str = arr.join('');
    console.log(col_str);

    return col_str;
}

console.log(randomColor());