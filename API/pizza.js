function pizza(size, ...toppings) {
  console.log(`Making a ${size} inch pizza with:`);

  for (let topping of toppings) {
    console.log(topping);
  }
}

function subSandwich(size, type, ...toppings) {
  console.log(`Making a ${size} inch ${type} sub sandwich with:`);

  for (let topping of toppings) {
    console.log(topping);
  }
}

export default pizza;
export { subSandwich };
