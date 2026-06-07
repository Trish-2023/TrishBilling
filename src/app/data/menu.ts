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
    category: "Chilli",
  },
  {
    id: "11",
    name: "Chilli Prawn",
    price: 200,
    category: "Chilli",
  },
  {
    id: "12",
    name: "Chilli Paneer",
    price: 150,
    category: "Chilli",
  },
  {
    id: "13",
    name: "Chilli Egg",
    price: 130,
    category: "Chilli",
  },

  // Dragon
  {
    id: "14",
    name: "Dragon Chicken",
    price: 200,
    category: "Dragon",
  },
  {
    id: "15",
    name: "Dragon Paneer",
    price: 200,
    category: "Dragon",
  },

  // Manchurian
  {
    id: "16",
    name: "Chicken Manchurian",
    price: 150,
    category: "Manchurian",
  },
  {
    id: "17",
    name: "Lollypop Manchurian",
    price: 130,
    category: "Manchurian",
  },
  {
    id: "18",
    name: "Gopi Manchurian",
    price: 150,
    category: "Manchurian",
  },
{
    id: "19",
    name: "Mushroom Munchurian",
    price: 170,
    category: "Manchurian",
  },

  // Pepperfry
  {
    id: "20",
    name: "Chicken Pepperfry",
    price: 160,
    category: "Pepperfry",
  },
  {
    id: "21",
    name: "Mushroom Pepperfry",
    price: 180,
    category: "Pepperfry",
  },
  {
    id: "22",
    name: "Paneer Pepperfry",
    price: 150,
    category: "Pepperfry",
  },
  {
    id: "23",
    name: "Ginger Chicken",
    price: 160,
    category: "Ginger Chicken",
  },
  
// Add on
  {
    id: "24",
    name: "Extra Egg",
    price: 10,
    category: "Add on",
  },
  {
    id: "25",
    name: "Mayo",
    price: 25,
    category: "Add on",
  },
  {
    id: "26",
    name: "Schezwan Sauce",
    price: 30,
    category: "Add on",
  },

  // Shawarma
  {
    id: "27",
    name: "Mini Shawarma Roll",
    price: 60,
    category: "Shawarma",
  },
  {
    id: "28",
    name: "Requral Shawarma Roll",
    price: 90,
    category: "Shawarma",
  },
  {
    id: "29",
    name: "Special Shawarma Roll",
    price: 120,
    category: "Shawarma",
  },
  {
    id: "30",
    name: "Plate Requral ",
    price: 150,
    category: "Shawarma",
  },
{
    id: "31",
    name: "Plate Speacial",
    price: 200,
    category: "Shawarma",
  },
  {
    id: "32",
    name: "Peri Peri",
    price: 20,
    category: "Add on",
  },

  // 65
  {
    id: "33",
    name: "Chicken 65 Boneless",
    price: 120,
    category: "65",
  },
  {
    id: "34",
    name: "Paneer 65",
    price: 150,
    category: "65",
  },
  {
    id: "35",
    name: "Mushroom 65",
    price: 180,
    category: "65",
  },
  {
    id: "36",
    name: "Gopi 65",
    price: 120,
    category: "65",
  },
  {
    id: "37",
    name: "Chicken Lollypop",
    price: 100,
    category: "65"
  },

  // House Special
 {
    id: "38",
    name: "Chicken Hot wings",
    price: 150,
    category: "House Special",
  },
  {
    id: "39",
    name: "Chicken Chindamani",
    price: 180,
    category: "House Special",
  },
  {
    id: "40",
    name: "Butter Garlic Chicken Fried rice",
    price: 180,
    category: "House Special",
  },
];

export const CATEGORIES = Array.from(
  new Set(MENU_ITEMS.map((item) => item.category))
); 
