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

function create_golden_rect(new_div_id, parent_div_id, dim) {

    var par = document.getElementById(parent_div_id);

    var div = document.createElement('div');
    div.id = new_div_id;

    var par = document.getElementById(parent_div_id);

    var new_height = 0;
    var new_width = 0;

    var par_height = parseInt(par.style.height);
    var par_width = parseInt(par.style.width);

    if (!par_height || !par_width) {

        new_width = dim;
        new_height = dim / 1.62;
    }

    else if (par_height > par_width) {

        new_width = dim;
        new_height = dim / 1.62;
    }

    else {

        new_width = dim / 1.62;
        new_height = dim;
    }

    par.appendChild(div);
    var new_div = document.getElementById(new_div_id);
    new_div.style.height = new_height;
    new_div.style.width = new_width;
    new_div.style.backgroundColor = randomColor();

    var new_dim = Math.min(new_height, new_width);

    if (new_dim > 10) {
        create_golden_rect(new_div_id + 1, new_div_id, new_dim);
    }
}

function onld() {
    create_golden_rect('div1', 'body', 9000);
}

window.onload = onld;