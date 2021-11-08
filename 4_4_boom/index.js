let num = Number(window.prompt('Choose an integer number'));

(function sevenBoom(num){
    for (let i = 1; i <= num; i++) {
        if ((i%7)===0) {
            if (i.toString(10).includes(7)) {

                console.log('BOOM-BOOM');
            }
            else {
                console.log('BOOM');
            }
        }
        else {
            console.log(i);
        }
    }
})(num);

