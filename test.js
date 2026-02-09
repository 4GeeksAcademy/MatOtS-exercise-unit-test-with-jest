test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(16);
    expect(fromEuroToDollar(16)).toBe(17.12)
})

test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(120);
    expect(fromEuroToDollar(120)).toBe(128.4)
})

test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar("hola");
    expect(fromEuroToDollar("hola")).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(true);
    expect(fromEuroToDollar(true)).toBe(NaN)
})


test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(null);
    expect(fromEuroToDollar(null)).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(undefined);
    expect(fromEuroToDollar(undefined)).toBe(NaN)
})


test("One Dollar should be 156.5 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(0.12);
    const expected = 0.12 * 156.5;
    expect(fromDollarToYen(0.12)).toBe(175.28)
})

test("One Dollar should be 156.5 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(0.405791);
    const expected = 0.405791 * 156.5;
    expect(fromDollarToYen(0.405791)).toBe(63.5062915)
})

test("One Dollar should be 156.5 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const expected = 5 * 156.5;
    expect(fromDollarToYen(5)).toBe(782.5)
})

test("Value must be a number",function(){
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen("hola");
    expect(fromDollarToYen("hola")).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(true);
    expect(fromDollarToYen(true)).toBe(NaN)
})


test("Value must be a number",function(){
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(null);
    expect(fromDollarToYen(null)).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(undefined);
    expect(fromDollarToYen(undefined)).toBe(NaN)
})


test("One Yen should be 0.87 Puunds", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(2);
    const expected = 2 * 0.87;
    expect(fromYenToPound(2)).toBe(1.74);
})

test("One Yen should be 0.87 Puunds", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(1000);
    const expected = 1000 * 0.87;
    expect(fromYenToPound(1000)).toBe(870);
})

test("One Yen should be 0.87 Puunds", function(){
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(56);
    const expected = 56 * 0.87;
    expect(fromYenToPound(56)).toBe(48.72);
})

test("Value must be a number",function(){
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound("hola");
    expect(fromYenToPound("hola")).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(true);
    expect(fromYenToPound(true)).toBe(NaN)
})


test("Value must be a number",function(){
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(null);
    expect(fromYenToPound(null)).toBe(NaN)
})

test("Value must be a number",function(){
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(undefined);
    expect(fromYenToPound(undefined)).toBe(NaN)
})