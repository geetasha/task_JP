var log = document.getElementById('log');
function Calculator() {

}
Calculator.prototype.add = function(a, b) {
    return a + b;
}
Calculator.prototype.subtract = function(a, b) {
    return a - b;
}
Calculator.prototype.multiply = function(a, b) {
    return a * b;
}
Calculator.prototype.divide = function(a, b) {
    return a / b;
}
var calculator = new Calculator();

function ScientificCalculator() {
    Calculator.call(this);
    this.sin = function(a) {
        return Math.sin(a);
    }
    this.cos = function(a) {
        return Math.cos(a);
    }
    this.tan = function(a) {
        return Math.tan(a);
    }
    this.log = function(a) {
        return Math.log(a);
    }
}


ScientificCalculator.prototype = Object.create(Calculator.prototype);
var scalculator = new ScientificCalculator();

function withExponents() {
    this.pow = function(a, b) {
        return Math.pow(a, b);
    }
    this.multiplyExp = function() {
        var max = 1;
        for (i = 0; i < arguments.length; i++) {
            max *= Math.pow(arguments[i][0], arguments[i][1]);
        }
        return max;
    }
    this.divideExp = function() {
        var min = Math.pow(arguments[0][0], arguments[0][1]);
        for (i = 1; i < arguments.length; i++) {
            min /= Math.pow(arguments[i][0], arguments[i][1]);
        }
        return min;
    }
}
withExponents.prototype = Object.create(Calculator.prototype);
var wcalculator = new withExponents();
//withExponents.call(calculator);


function delay(a, b, c, d) {

    var keys = [],
        result;
    for (var key in b) {
        keys.push(key);
    }

    var p1 = new Promise(function(resolve, reject) {

        if (keys.indexOf(c) !== -1) {
            window.setTimeout(function() {              
                if (c === 'add') {
                    result = b.add(d[0], d[1]);
                } else if (c === 'subtract') {
                    result = b.subtract(d[0], d[1]);
                } else if (c === 'multiply') {
                    result = b.multiply(d[0], d[1]);
                } else if (c === 'divide') {
                    result = b.divide(d[0], d[1]);
                }
                resolve(result);
            }, a);

        } else {
            resolve('rejected');
        }
    });
    return p1;
}

///test
console.log(log,'log----');
log.insertAdjacentHTML('beforeend',' calculator.add( 1, 2 ) === '+calculator.add(1, 2)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.subtract( 9, 2 ) === '+calculator.subtract(9, 2)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.multiply( 4, 3 ) === '+calculator.multiply(4, 3)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.divide( 10, 2 ) === '+calculator.divide(10, 2)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.divide( 5, 0 ) === '+ parseInt(calculator.divide(5, 0)) +'<br>');

log.insertAdjacentHTML('beforeend',' ( calculator ).to.be.instanceOf( Calculator ) === '+ (scalculator instanceof Calculator) +'<br>');
log.insertAdjacentHTML('beforeend',' ( calculator ).to.be.instanceOf( ScientificCalculator ) === '+ (scalculator instanceof ScientificCalculator) +'<br>');

log.insertAdjacentHTML('beforeend',' ( calculator.sin( Math.PI / 2 ) ) === '+scalculator.sin(Math.PI / 2)+'<br>');
log.insertAdjacentHTML('beforeend',' (calculator.cos( Math.PI ) === '+scalculator.cos(Math.PI)+'<br>');
log.insertAdjacentHTML('beforeend',' ( calculator.tan( 0 ) ) === '+scalculator.tan(0)+'<br>');
log.insertAdjacentHTML('beforeend',' ( calculator.log( 1 ) ) === '+scalculator.log(1)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.pow( 2, 3 ) === '+wcalculator.pow(2, 3)+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.multiplyExp( [ 2, 3 ], [ 2, 4 ] ) === '+wcalculator.multiplyExp([2, 3], [2, 4])+'<br>');
log.insertAdjacentHTML('beforeend',' calculator.divideExp( [ 2, 3 ], [ 2, 5 ] ) === '+wcalculator.divideExp([2, 3], [2, 5])+'<br>');
var willAdd = new delay(100, calculator, 'add', [1, 1]);
log.insertAdjacentHTML('beforeend','willAdd instanceof Promise>>>'+ (willAdd instanceof Promise) +'<br>');
willAdd.then(function(val) {
    log.insertAdjacentHTML('beforeend',"delay( 100, calculator, 'add', [ 1, 1 ] )>>> "+ val+'<br>');
});
var d = new delay(500, calculator, 'subtract', [9, 5]);
d.then(function(val) {
    log.insertAdjacentHTML('beforeend',"delay( 500, calculator, 'subtract', [ 9, 5 ])>>> "+ val+'<br>');
});

var del = delay(1000, calculator, 'sqrt', [2, 2])
del.then(function(val) {
    log.insertAdjacentHTML('beforeend',"delay( 1000, calculator, 'sqrt', [ 2, 2 ] ) >>> "+ val+'<br>');
});