var cnt = 1;
var tab = document.getElementById('tab');

for (var i = 1; i <= 10; i++){

    var row = document.createElement('tr');
    tab.appendChild(row);

    for (var j = 1; j <= 10; j++){
        var temp = document.createElement('td');
        temp.textContent = cnt;
        temp.style.border = 'solid 1px black';
        row.appendChild(temp);
        cnt++;
    }
}