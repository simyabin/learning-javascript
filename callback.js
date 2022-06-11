// const outer = (fn) => {
//     fn();
//     fn();
//     fn();
//     console.log("Outer function");
// };

// outer(
//     () => {
//         console.log("Inner function");
//     }
// );


// const pakistanTaxCalculator = (taxes) => (taxes * 0.05) + taxes
// const UKTaxCalculator = (taxes) => (taxes * 0.09) + taxes



// const getMyTaxes = (n, taxFn) => {
//     const result = taxFn(n);
//     console.log("Your taxes are", result);
// }


// getMyTaxes(10000, pakistanTaxCalculator)
// getMyTaxes(10000, UKTaxCalculator)



const add = (a, b) => a + b;
const sub = (a, b) => a - b;

const calculator = (n1, n2, func) => {
    const result = func(n1, n2);
    console.log(result);
}

calculator(2, 3, add);
calculator(9, 5, sub);
calculator(9, 5,
    (a, b) => a * b
);







// const inner = () => {
//     console.log("fizz");
// };
// const print = (fnc) => {
//     fnc();
//     console.log("buzz");
//     fnc();
// };
// print();