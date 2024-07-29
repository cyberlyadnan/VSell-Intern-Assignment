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

import Spinach from "../assets/Cart/1.jpg";
import Carrots from "../assets/Cart/2.jpg";
import Peppers from "../assets/Cart/3.jpg";
import Broccoli from "../assets/Cart/4.jpg";
import Tomatoes from "../assets/Cart/5.jpg";
import Strawberries from "../assets/Cart/6.jpg";
import Bananas from "../assets/Cart/7.jpg";
import Wheat from "../assets/Cart/8.jpg";
import Milk from "../assets/Cart/9.jpg";
import Cucumbers from "../assets/Cart/10.jpg";
import SweetCorn from "../assets/Cart/11.jpg";
import GreenBeans from "../assets/Cart/12.jpg";
import RedOnions from "../assets/Cart/13.jpg";
import Potatoes from "../assets/Cart/14.jpg";
import Cauliflower from "../assets/Cart/15.jpg";
import Zucchini from "../assets/Cart/16.jpg";
import Mushrooms from "../assets/Cart/17.jpg";
import Beetroot from "../assets/Cart/18.jpg";
import Kale from "../assets/Cart/19.jpg";
import Radishes from "../assets/Cart/20.jpg";
import Cabbage from "../assets/Cart/21.jpg";
import GreenPeas from "../assets/Cart/22.jpg";
import Avocados from "../assets/Cart/23.jpg";
import ButternutSquash from "../assets/Cart/24.jpg";
import SweetPotatoes from "../assets/Cart/25.jpg";
import Artichokes from "../assets/Cart/26.jpg";
import Asparagus from "../assets/Cart/27.jpg";
import Leeks from "../assets/Cart/28.jpg";




export const NavLinks = ["Shop", "Explore", "Cart", "Favorite", "Account"];

export const CardColors = [
  "#edf2f7", // Soft gray-blue
  "#e6f7f2", // Soft mint green
  "#fff4e6", // Soft peach
  "#fcebf2", // Soft blush pink
  "#eaf4ff", // Soft baby blue
  "#f9f6e7", // Soft buttercream
  "#f4f4f4", // Soft light gray
  "#e7f8fa", // Soft aqua
  "#f3e8fa", // Soft lavender
  "#fffcea"  // Soft pale yellow
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
  }
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




export const shopItemList = [
  {
    name: "Fresh Spinach",
    image: Spinach,
    price: "Rs 60",
    oldPrice: "Rs 80",
    description: "Tender and nutrient-rich fresh spinach, perfect for salads and cooking.",
  },
  {
    name: "Organic Carrots",
    image: Carrots,
    price: "Rs 50",
    oldPrice: "Rs 70",
    description: "Sweet and crunchy organic carrots, great for snacking or adding to dishes.",
  },
  {
    name: "Red Bell Peppers",
    image: Peppers,
    price: "Rs 120",
    oldPrice: "Rs 150",
    description: "Juicy and flavorful red bell peppers, ideal for salads and stir-fries.",
  },
  {
    name: "Broccoli Florets",
    image: Broccoli,
    price: "Rs 80",
    oldPrice: "Rs 100",
    description: "Fresh broccoli florets, packed with vitamins and perfect for steaming or roasting.",
  },
  {
    name: "Cherry Tomatoes",
    image: Tomatoes,
    price: "Rs 90",
    oldPrice: "Rs 110",
    description: "Sweet and juicy cherry tomatoes, great for salads and snacking.",
  },
  {
    name: "Cucumbers",
    image: Cucumbers,
    price: "Rs 40",
    oldPrice: "Rs 60",
    description: "Crisp and refreshing cucumbers, perfect for salads and sandwiches.",
  },
  {
    name: "Sweet Corn",
    image: SweetCorn,
    price: "Rs 70",
    oldPrice: "Rs 90",
    description: "Sweet and tender corn, ideal for grilling or adding to dishes.",
  },
  {
    name: "Green Beans",
    image: GreenBeans,
    price: "Rs 75",
    oldPrice: "Rs 95",
    description: "Fresh green beans, great for steaming, stir-frying, or adding to salads.",
  },
  {
    name: "Red Onions",
    image: RedOnions,
    price: "Rs 60",
    oldPrice: "Rs 80",
    description: "Flavourful red onions, ideal for salads, sandwiches, and cooking.",
  },
  {
    name: "Potatoes",
    image: Potatoes,
    price: "Rs 50",
    oldPrice: "Rs 70",
    description: "Versatile and hearty potatoes, great for baking, boiling, or mashing.",
  },
  {
    name: "Cauliflower",
    image: Cauliflower,
    price: "Rs 90",
    oldPrice: "Rs 110",
    description: "Fresh cauliflower, perfect for roasting, steaming, or using in soups.",
  },
  {
    name: "Zucchini",
    image: Zucchini,
    price: "Rs 70",
    oldPrice: "Rs 90",
    description: "Tender and mild zucchini, great for stir-fries, grilling, or baking.",
  },
  {
    name: "Mushrooms",
    image: Mushrooms,
    price: "Rs 100",
    oldPrice: "Rs 120",
    description: "Fresh mushrooms, ideal for adding to salads, soups, or stir-fries.",
  },
  {
    name: "Beetroot",
    image: Beetroot,
    price: "Rs 80",
    oldPrice: "Rs 100",
    description: "Sweet and earthy beetroot, great for roasting, boiling, or salads.",
  },
  {
    name: "Kale",
    image: Kale,
    price: "Rs 90",
    oldPrice: "Rs 110",
    description: "Nutrient-dense kale, perfect for salads, smoothies, or sautéing.",
  },
  {
    name: "Radishes",
    image: Radishes,
    price: "Rs 60",
    oldPrice: "Rs 80",
    description: "Crisp and spicy radishes, ideal for salads or as a crunchy snack.",
  },
  {
    name: "Cabbage",
    image: Cabbage,
    price: "Rs 70",
    oldPrice: "Rs 90",
    description: "Fresh cabbage, great for salads, slaws, and stir-fries.",
  },
  {
    name: "Green Peas",
    image: GreenPeas,
    price: "Rs 80",
    oldPrice: "Rs 100",
    description: "Sweet and tender green peas, perfect for adding to dishes or enjoying on their own.",
  },
  {
    name: "Avocados",
    image: Avocados,
    price: "Rs 150",
    oldPrice: "Rs 180",
    description: "Creamy and rich avocados, ideal for salads, sandwiches, or smoothies.",
  },
  {
    name: "Butternut Squash",
    image: ButternutSquash,
    price: "Rs 110",
    oldPrice: "Rs 130",
    description: "Sweet and nutty butternut squash, great for soups, roasting, or pureeing.",
  },
  {
    name: "Sweet Potatoes",
    image: SweetPotatoes,
    price: "Rs 90",
    oldPrice: "Rs 110",
    description: "Nutritious sweet potatoes, perfect for baking, mashing, or adding to dishes.",
  },
  {
    name: "Artichokes",
    image: Artichokes,
    price: "Rs 130",
    oldPrice: "Rs 150",
    description: "Tender and flavorful artichokes, great for steaming, grilling, or adding to salads.",
  },
  {
    name: "Asparagus",
    image: Asparagus,
    price: "Rs 120",
    oldPrice: "Rs 140",
    description: "Fresh and crisp asparagus, ideal for grilling, roasting, or adding to dishes.",
  },
  {
    name: "Leeks",
    image: Leeks,
    price: "Rs 100",
    oldPrice: "Rs 120",
    description: "Mild and flavorful leeks, great for soups, stews, and sautés.",
  },
];
