'use strict' 
const random = Math.round(Math.random()*100);
console.log(random);

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
};

const x = function() {
    let count = 10;
    const x2 = function(){
        let question = prompt('угадайте число от 1 до 100!!');
        count--;
        if (question == random) {
            const oneMore = confirm('ура вы выйграли, можем попробовать еще');
            if (oneMore) {
                x();
            } else {
                console.log('увы вы проиграли')
            }
        } else if (count < 1) {
            const oneMore = confirm('попыток больше нет, можем попробовать еще');
            if (oneMore) {
                x();
            } else {
                return
            }
        } else if (question === null) {
            alert('игра окончена');
        } else if (!isNumber(question)) {
            alert('введите число, у вас осталось ' + count + ' попыток');
            x2();
        } else if (question < random) {
            alert('неправильно, число больше. у вас осталось ' + count + ' опыток');
            x2();
        } else if (question > random) {
            alert('неправильно, число меньше. у вас осталось ' + count + 'попыток');
            x2();
        }
    }
    x2();
}

x();