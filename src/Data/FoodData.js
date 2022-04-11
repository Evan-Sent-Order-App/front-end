export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Fruit Medley",
    img: "/Assets/Fruit_medley.png",
    section: "Brunch",
    quantityPerOrder: "Half-Pan",
    description: "seasonal, fresh-cut, veggies",
    allergies: "TBD based on seasonality",
    price: 20,
  },
  {
    name: "Bacon Wrapped Asparagus",
    img: "/Assets/AspargusBacon.png",
    quantityPerOrder: "12",
    description: "pork bacon wrapped around aspargus - served by the dozen.  ",
    section: "Bites",
    price: 16,
  },
  {
    name: "Deviled Eggs",
    img: "/Assets/Deviled_Eggs.png",
    quantityPerOrder: "12",
    section: "Bites",
    description: "bacon, eggs, chives and paprika - served by the dozen",
    allergies: "allium, dairy",
    price: 14,
  },
  {
    name: "Mini Quiche",
    style: "Asparagus & Herb",
    img: "/Assets/Mini_Quiche.png",
    quantityPerOrder: "48",
    section: "Brunch",
    description: "four dozen mini quiches with asparagus, fresh herbs & cheese",
    allergies: "allium, dairy",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Bacon, Spinach & Leek",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    description: "four dozen mini quiches with bacon, spinach & leek",
    allergies: "allium, dairy",
    quantityPerOrder: "48",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Broccoli & Cheddar",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    quantityPerOrder: "48",
    description: "four dozen mini quiches with broccoli & cheddar",
    allergies: "allium, dairy",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Ham & Four Cheese",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    quantityPerOrder: "48",
    description:
      "four dozen mini quiches with ham, cheese1, cheese2, cheese3, cheese4",
    allergies: "allium, dairy",
    price: 28,
  },
  {
    name: "Veggie Pasta Salad",
    img: "/Assets/Pasta_Salad.png",
    section: "Bites",
    quantityPerOrder: "Half-Pan",
    description: "description",
    allergies: "allium, nightshade, gluten, dairy",
    price: 35,
  },
  {
    name: "Salami Pasta Salad",
    img: "/Assets/Pasta_Salad.png",
    section: "Bites",
    quantityPerOrder: "Half-Pan",
    description: "half-pan of description",
    allergies: "allium, nightshade, gluten, dairy",
    price: 35,
  },
  {
    name: "Fried Chicken & Savory Waffles",
    img: "/Assets/Waffles.png",
    section: "Brunch",
    quantityPerOrder: "20",
    description: "description",
    allergies: "allium, nightshade, gluten, dairy",
    price: 28,
  },
  {
    name: "Mini Loaded Banana Bread",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
    description: "description",
    allergies: "nuts, dairy",
    price: 7,
  },
  {
    name: "Mini Loaded Zucchini Bread",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
    description: "description",
    allergies: "nuts, dairy",
    price: 7,
  },
  {
    name: "Mini Loaded Carrot Cake",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
    description: "description",
    allergies: "nuts, dairy",
    price: 7,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
