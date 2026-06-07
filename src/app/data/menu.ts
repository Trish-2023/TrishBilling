import { MenuItem } from "../types";

// 🍽️ MENU MANAGEMENT
// Edit this file to add, remove, or modify menu items
// Simply change the name, price, or add new items to the array

export const MENU_ITEMS: MenuItem[] = [
  // Fried Rice
  {
    id: "1",
    name: "Chicken fried Rice",
    price: 130,
    category: "Fried Rice",
  },
  {
    id: "2",
    name: "Prawn Fried Rice",
    price: 200,
    category: "Fried Rice",
  },
  {
    id: "3",
    name: "Egg Fried Rice",
    price: 90,
    category: "Fried Rice",
  },
  {
    id: "4",
    name: "Paneer Fried Rice",
    price: 130,
    category: "Fried Rice",
  },
  {
    id: "5",
    name: "Mushroom Fried Rice",
    price: 130,
    category: "Fried Rice",
  },
  {
    id: "6",
    name: "Gopi Fried Rice",
    price: 120,
    category: "Fried Rice",
  },
  {
    id: "7",
    name: "Veg Fried Rice",
    price: 80,
    category: "Fried Rice",
  },
  {
    id: "8",
    name: "Mixed Veg Fried Rice",
    price: 150,
    category: "Fried Rice",
  },
  {
    id: "9",
    name: "Mixed Nonveg Fried Rice",
    price: 200,
    category: "Fried Rice",
  },

  // Chilli
  {
    id: "10",
    name: "Chilli Chicken",
    price: 150,
    category: "Starters",
  },
  {
    id: "11",
    name: "Chilli Prawn",
    price: 200,
    category: "Starters",
  },
  {
    id: "12",
    name: "Chilli Paneer",
    price: 150,
    category: "Starters",
  },
  {
    id: "13",
    name: "Chilli Egg",
    price: 130,
    category: "Starters",
  },

  // Dragon
  {
    id: "14",
    name: "Dragon Chicken",
    price: 200,
    category: "Starters",
  },
  {
    id: "15",
    name: "Dragon Paneer",
    price: 200,
    category: "Starters",
  },

  // Manchurian
  {
    id: "16",
    name: "Chicken Manchurian",
    price: 150,
    category: "Starters",
  },
  {
    id: "17",
    name: "Lollypop Manchurian",
    price: 130,
    category: "Starters",
  },
  {
    id: "18",
    name: "Gopi Manchurian",
    price: 150,
    category: "Starters",
  },
{
    id: "19",
    name: "Mushroom Munchurian",
    price: 170,
    category: "Starters",
  },
  {
    id: "20",
    name: "Strawberry Thickshake",
    price: 100,
    category: "ThickShake",
  },
  {
    id: "21",
    name: "Butterscotch Thickshake",
    price: 120,
    category: "ThickShake",
  },
  {
    id: "22",
    name: "Blackcurrent Thickshake",
    price: 120,
    category: "ThickShake",
  },
  {
    id: "23",
    name: "Boost with dates",
    price: 150,
    category: "ThickShake",
  },
  
// Panipuri
  {
    id: "24",
    name: "Panipuri",
    price: 20,
    category: "Panipuri",
  },
  {
    id: "25",
    name: "Dahi puri",
    price: 40,
    category: "Panipuri",
  },
  {
    id: "26",
    name: "Chesse puri",
    price: 50,
    category: "Panipuri",
  },
  {
    id: "27",
    name: "Mayo puri",
    price: 40,
    category: "Panipuri",
  },
  {
    id: "28",
    name: "Sweet puri",
    price: 30,
    category: "Panipuri",
  },
  {
    id: "29",
    name: "Shawarma puri",
    price: 50,
    category: "Panipuri",
  },
  {
    id: "30",
    name: "BBQ Dry puri",
    price: 40,
    category: "Panipuri",
  },

// Quickbites
{
    id: "31",
    name: "French fries",
    price: 50,
    category: "Quickbites",
  },
  {
    id: "32",
    name: "Peri Peri fries",
    price: 80,
    category: "Quickbites",
  },
  {
    id: "33",
    name: "Crispy Chicken popcorn",
    price: 100,
    category: "Quickbites",
  },
  {
    id: "34",
    name: "Crispy Chicken pakoda",
    price: 100,
    category: "Quickbites",
  },
  {
    id: "35",
    name: "Chicken samosa",
    price: 20,
    category: "Quickbites",
  },
  {
    id: "36",
    name: "Chicken Cheesy strips",
    price: 120,
    category: "Quickbites",
  },
  {
    id: "37",
    name: "Chicken nuggets",
    price: 100,
  },

  // Sandwich
 {
    id: "38",
    name: "Veg Cheese toast",
    price: 60,
    category: "Sandwich",
  },
  {
    id: "39",
    name: "Chicken Cheese toast",
    price: 100,
    category: "Sandwich",
  },
  {
    id: "40",
    name: "Paneer Cheese toast",
    price: 100,
    category: "Sandwich",
  },
  {
    id: "41",
    name: "Egg scrambled cheese toast",
    price: 80,
    category: "Sandwich",
  },
  {
    id: "42",
    name: "Bread omlet",
    price: 50,
    category: "Sandwich",
  },
  {
    id: "43",
    name: "Murukku sandwich",
    price: 50,
    category: "Sandwich",
  },
  {
    id: "44",
    name: "Murukku chesse sandwich",
    price: 70,
    category: "Sandwich",
  },
  

// Burger
 {
    id: "45",
    name: "Crispy chicken ginger",
    price: 100,
    category: "Burger",
  },
  {
    id: "46",
    name: "Paneer jalapeno",
    price: 100,
    category: "Burger",
  },
  {
    id: "47",
    name: "House special twin tower",
    price: 150,
    category: "Burger",
  },
  {
    id: "48",
    name: "Egg cheese",
    price: 80,
    category: "Burger",
  },
  {
    id: "49",
    name: "Classic chicken",
    price: 80,
    category: "Burger",
  },

  // Momos
  {
    id: "50",
    name: "Veg steam",
    price: 50,
    category: "Momos",
  },
  {
    id: "51",
    name: "Paneer steam",
    price: 80,
    category: "Momos",
  },  
 {
    id: "52",
    name: "Corn cheese steam",
    price: 100,
    category: "Momos",
  },
  {
    id: "53",
    name: "Chicken steam",
    price: 80,
    category: "Momos",
  },
  {
    id: "54",
    name: "Veg schezwan fry",
    price: 80,
    category: "Momos",
  },
  {
    id: "55",
    name: "Paneer schezwan fry",
    price: 100,
    category: "Momos",
  },
  {
    id: "56",
    name: "Corn cheese schezwan fry",
    price: 130,
    category: "Momos",
  },
   {
    id: "57",
    name: "Chicken schezwan fry",
    price: 130,
    category: "Momos",
  }, 

  // Rolls&Shawarma
  {
    id: "58",
    name: "Mexian Shawarma",
    price: 130,
    category: "Rolls&Shawarma",
  },
  {
    id: "59",
    name: "Arabian shawarma",
    price: 130,
    category: "Rolls&Shawarma",
  },  
 {
    id: "60",
    name: "Chicken kati roll",
    price: 120,
    category: "Rolls&Shawarma",
  },
  {
    id: "61",
    name: "Paneer kati roll",
    price: 120,
    category: "Rolls&Shawarma",
  },
  {
    id: "62",
    name: "Prawn kati roll",
    price: 160,
    category: "Rolls&Shawarma",
  },
  {
    id: "63",
    name: "Plain egg masala roll",
    price: 50,
    category: "Rolls&Shawarma",
  },
  {
    id: "64",
    name: "Crispy chicken wraps",
    price: 100,
    category: "Rolls&Shawarma",
  },
  {
    id: "65",
    name: "Paneer wraps",
    price: 100,
    category: "Rolls&Shawarma",
  },
{
    id: "66",
    name: "Egg Cheese wraps",
    price: 100,
    category: "Rolls&Shawarma",
  }, 

  // Cheeseloadedbox
  {
    id: "67",
    name: "Cheeseloaded fries",
    price: 150,
    category: "Cheeseloadedbox",
  },
  {
    id: "68",
    name: "Chessey chicken fries",
    price: 200,
    category: "Cheeseloadedbox",
  },
  {
    id: "69",
    name: "Chicken lass Mexican chicken",
    price: 200,
    category: "Cheeseloadedbox",
  },{
    id: "70",
    name: "Chessy cripsy hot wigs",
    price: 200,
    category: "Cheeseloadedbox",
  },
  {
    id: "71",
    name: "Mini cheese lass fries",
    price: 120,
    category: "Cheeseloadedbox",
  },

// Musttry
    {
    id: "72",
    name: "Thread chicken*",
    price: 60,
    category: "Musttry",
  },{
    id: "73",
    name: "Hot BBQ leg fry",
    price: 70,
    category: "Musttry",
  },
  {
    id: "74",
    name: "Crispy chicken cheesy fries",
    price: 200,
    category: "Musttry",
  },
];

export const CATEGORIES = Array.from(
  new Set(MENU_ITEMS.map((item) => item.category))
); 
