import {add,substract} from './Calculator';


test('adds two numbers',()=>{
    expect (add(1,2)).toBe(3);
    expect (add(-1,1)).toBe(0);
    expect (add(-1,-2)).toBe(-3);

});

test('substracts two numbers',()=>{
    expect (Substract(3,2)).toBe(1);
    expect (Substract(-1,1)).toBe(-2);
    expect (Substract(0,5)).toBe(-5);
});

