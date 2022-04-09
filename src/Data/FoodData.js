export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Specialty Pizza",
    img: "/Assets/pexels-pizza.jpg",
    section: "Pizza",
    price: 12,
  },
  {
    name: "Build Your Own Pizza",
    img: "/Assets/pexels-pizza.jpg",
    section: "Pizza",
    price: 12,
  },
  {
    name: "Meatball Sub",
    img: "/Assets/pexels-pizza.jpg",
    section: "Sandwichs",
    price: 10,
  },
  {
    name: "Vegan Club",
    img: "/Assets/pexels-pizza.jpg",
    section: "Sandwichs",
    price: 12,
  },
  {
    name: "Tuna Melt",
    img: "/Assets/pexels-pizza.jpg",
    section: "Sandwichs",
    price: 10,
  },
  {
    name: "Fries",
    img: "/Assets/pexels-pizza.jpg",
    section: "Sides",
    price: 6,
  },
  {
    name: "Onion Rings",
    img: "/Assets/pexels-pizza.jpg",
    section: "Sides",
    price: 8,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
