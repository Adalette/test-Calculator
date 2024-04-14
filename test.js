const assert = require('assert');
const Calculator = require('./script');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        it('should add two numbers', () => {
            const result = calculator.add(3, 4);
            assert.strictEqual(result, 7);
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers', () => {
            const result = calculator.subtract(7, 3);
            assert.strictEqual(result, 4);
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            const result = calculator.multiply(2, 5);
            assert.strictEqual(result, 10);
        });
    });

    describe('divide', () => {
        it('should divide two numbers', () => {
            const result = calculator.divide(10, 2);
            assert.strictEqual(result, 5);
        });

        it('should throw an error when dividing by zero', () => {
            assert.throws(() => calculator.divide(10, 0), Error);
        });
    });
});
