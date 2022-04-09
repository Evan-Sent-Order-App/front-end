export const foodItems = [
    {
        name: 'Specialty Pizza',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Pizza'
    },
    {
        name: 'Build Your Own Pizza',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Pizza'
    },
    {
        name: 'Meatball Sub',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Vegan Club',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Tuna Melt',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Fries',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Sides'
    },
    {
        name: 'Onion Rings',
        img: '/Assets/pexels-pizza.jpg',
        section: 'Sides'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] =[];
    }
        res[food.section].push(food);
        return res;
    }, {});