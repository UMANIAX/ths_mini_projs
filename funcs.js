function bar() {

    var a = 4

    function bam(){

        a += 3

        var a = 1

        console.log(a)

        c = 'npt'
    }

    bam();
}

bar();