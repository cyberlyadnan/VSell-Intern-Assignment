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
  
 
