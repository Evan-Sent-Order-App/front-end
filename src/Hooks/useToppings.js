import { useState } from "react";

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }
  return {
    checkTopping,
    toppings,
  };
}

const toppingsList = [
  "pepperoni, sausage, & mushroom",
  "artichoke, feta, tomato, kalamata olive",
  "basil, tomato, mozzarella",
  "prosciutto, arugula, balsamic",
];

function getDefaultToppings() {
  return toppingsList.map((topping) => ({
    name: topping,
    checked: false,
  }));
}
