import freshFruitsAndVegetables from "../assets/images/food1.png";
import cookingOilAndGhee from "../assets/images/food2.png";
import meatAndFish from "../assets/images/food3.png";
import bakeryAndSnacks from "../assets/images/food4.png";
import dairyAndEggs from "../assets/images/food5.png";
import beverages from "../assets/images/food6.png";

import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Spinach from "../assets/Cart/1.jpg"
import Carrots from "../assets/Cart/2.jpg"
import Peppers from "../assets/Cart/3.jpg"
import Broccoli from "../assets/Cart/4.jpg"
import Tomatoes from "../assets/Cart/5.jpg"
import Strawberries from "../assets/Cart/6.jpg"
import Bananas from "../assets/Cart/7.jpg"
import Wheat from "../assets/Cart/8.jpg"
import Milk from "../assets/Cart/9.jpg"




export const NavLinks = ["Shop", "Explore", "Cart", "Favorite", "Account"];

export const CardColors = [
    "#f0f4f8", // Light blue-gray
    "#e8f5e9", // Light green
    "#fff3e0", // Light orange
    "#fce4ec", // Light pink
    "#e3f2fd", // Light blue
    "#f9fbe7", // Light yellow
    "#f5f5f5", // Light gray
    "#e0f7fa", // Light cyan
    "#f3e5f5", // Light purple
    "#fffde7"  // Light lemon
  ];

const getColor = () => {
    return Math.floor(Math.random() * CardColors.length) + 1
  }
  
export const FoodItems = [
  {
    name: "Fresh Fruits & Vegetables",
    image: freshFruitsAndVegetables,
    color: CardColors[getColor()]
  },
  {
    name: "Cooking Oil & Ghee",
    image: cookingOilAndGhee,
    color: CardColors[getColor()]
  },
  {
    name: "Meat & Fish",
    image: meatAndFish,
    color: CardColors[getColor()]
  },
  {
    name: "Bakery & Snacks",
    image: bakeryAndSnacks,
    color: CardColors[getColor()]
  },
  {
    name: "Dairy & Eggs",
    image: dairyAndEggs,
    color: CardColors[getColor()]
  },
  {
    name: "Beverages",
    image: beverages,
    color: CardColors[getColor()]
  },
];


export const FooterLinks = [
  { name: "Shop", icon: <StorefrontIcon /> },
  { name: "Explore", icon: <SearchIcon /> },
  { name: "Cart", icon: <ShoppingCartIcon /> },
  { name: "Favorite", icon: <FavoriteIcon /> },
  { name: "Account", icon: <AccountCircleIcon /> },
];
  


export const cartItems = [
  {
    id: 1,
    name: "Fresh Spinach",
    image: Spinach,
    price: 2.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "Organic Carrots",
    image: Carrots,
    price: 1.99,
    quantity: 3,
  },
  {
    id: 3,
    name: "Red Bell Peppers",
    image: Peppers,
    price: 0.99,
    quantity: 5,
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    image: Broccoli,
    price: 1.49,
    quantity: 4,
  },
  {
    id: 5,
    name: "Organic Tomatoes",
    image: Tomatoes,
    price: 3.49,
    quantity: 2,
  },
];



export const favoritesItems = [
  {
    id: 1,
    name: 'Fresh Strawberries',
    image: Strawberries,
    price: '$4.99',
  },
  {
    id: 2,
    name: 'Organic Bananas',
    image: Bananas,
    price: '$2.99',
  },
  {
    id: 3,
    name: 'Whole Wheat Bread',
    image: Wheat,
    price: '$3.49',
  },
  {
    id: 4,
    name: 'Almond Milk',
    image: Milk,
    price: '$5.49',
  },
];