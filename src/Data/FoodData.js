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
    price: 20,
  },
  {
    name: "Bacon Wrapped Asparagus",
    img: "/Assets/AspargusBacon.png",
    quantityPerOrder: "12",
    section: "Bites",
    price: 16,
  },
  {
    name: "Deviled Eggs",
    img: "/Assets/Deviled_Eggs.png",
    quantityPerOrder: "12",
    section: "Bites",
    price: 14,
  },
  {
    name: "Mini Quiche",
    style: "Asparagus & Herb",
    img: "/Assets/Mini_Quiche.png",
    quantityPerOrder: "48",
    section: "Brunch",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Bacon, Spinach & Leek",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    quantityPerOrder: "48",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Broccoli & Cheddar",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    quantityPerOrder: "48",
    price: 28,
  },
  {
    name: "Mini Quiche",
    style: "Ham & Four Cheese",
    img: "/Assets/Mini_Quiche.png",
    section: "Brunch",
    quantityPerOrder: "48",
    price: 28,
  },
  {
    name: "Veggie Pasta Salad",
    img: "/Assets/Pasta_Salad.png",
    section: "Bites",
    quantityPerOrder: "Half-Pan",
    price: 35,
  },
  {
    name: "Salami Pasta Salad",
    img: "/Assets/Pasta_Salad.png",
    section: "Bites",
    quantityPerOrder: "Half-Pan",
    price: 35,
  },
  {
    name: "Fried Chicken & Savory Waffles",
    img: "/Assets/Waffles.png",
    section: "Brunch",
    quantityPerOrder: "20",
    price: 28,
  },
  {
    name: "Mini Loaded Banana Bread",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
    price: 7,
  },
  {
    name: "Mini Loaded Zucchini Bread",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
    price: 7,
  },
  {
    name: "Mini Loaded Carrot Cake",
    img: "/Assets/Heaven_One.png",
    section: "Treats",
    quantityPerOrder: "Small-Loaf",
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
