import toast from "react-hot-toast";

import tshirt2 from "../../Assets/products/tshirt2.png";
import tshirt3 from "../../Assets/products/tshirt3.png";
import tshirt4 from "../../Assets/products/tshirt4.png";
import tshirt5 from "../../Assets/products/tshirt5.png";

import hoodie2 from "../../Assets/products/hoodie2.png";

import cup2 from "../../Assets/products/cup2.png";
import cup3 from "../../Assets/products/cup3.png";
import cup4 from "../../Assets/products/cup4.png";

import bag2 from "../../Assets/products/bag2.png";
import bag3 from "../../Assets/products/bag3.png";
import bag4 from "../../Assets/products/bag4.png";
import bag5 from "../../Assets/products/bag5.png";

export const prods = [
  {
    prod: "Printed Hoodie",
    desc: "New brand hoodie  , unisex",
    img: hoodie2,
    price: "499 ₹",
  },
  {
    price: "399 ₹",
    prod: "Blue Tshirt",
    desc: "Customized classy",
    img: tshirt2,
  },
  {
    price: "499 ₹",
    prod: "Green Tshirt",
    desc: "Customized classy",
    img: tshirt3,
  },
  {
    price: "299 ₹",
    prod: "Quoted Tshirt",
    desc: "Customized classy",
    img: tshirt4,
  },
  {
    price: "459 ₹",
    prod: "Custom Tshirt",
    desc: "Customized classy",
    img: tshirt5,
  },
  {
    price: "499 ₹",
    prod: "Designed Cup",
    desc: "Cup by your name",
    img: cup2,
  },
  {
    price: "399 ₹",
    prod: "Printed Cup",
    desc: "Cup by your name",
    img: cup3,
  },
  { price: "699 ₹", prod: "Quoted Cup", desc: "Cup by your name", img: cup4 },
  {
    price: "199 ₹",
    prod: "Printed Totes",
    desc: "The Customized Tote bag",
    img: bag2,
  },
  {
    price: "499 ₹",
    prod: "Textured Totes",
    desc: "The Customized Tote bag",
    img: bag3,
  },
  {
    price: "999 ₹",
    prod: "Strippy Totes",
    desc: "The Customized Tote bag",
    img: bag4,
  },
  {
    price: "299 ₹",
    prod: "Stylish Totes",
    desc: "The Customized Tote bag",
    img: bag5,
  },
];

export const iconButtonStyle = {
  color: "black",
  padding: 0,
  minWidth: "max-content",
};

export const inpStye = {
  "& .MuiInput-underline:after": {
    borderWidth: "1px !important",
  },
  "&:hover .MuiInput-underline:before": {
    borderWidth: "1px !important",
  },
  "& .MuiInputLabel-root": {
    borderWidth: "1px !important",
  },
};

export const selStyle = {
  color: "black",
  ".MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
};

export const curencySelStyle = {
  color: "black",
  ".MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
};

export const sliderStyle = {
  "& .MuiSlider-thumb": {
    width: 12, // Decrease the thumb size
    height: 12,
    "&:hover, &:active, &:focus": {
      boxShadow: "none", // Remove the shadow effect on interaction
    },
  },
};

export const htmlStrDef = `<h5><strong style="font-size: 14px;">Product details :&nbsp;</strong></h5><p><em style="font-size: 14px;">write about product details</em></p><h5><strong style="font-size: 14px;">About this item :</strong></h5><p><em style="font-size: 14px; color: rgb(0, 0, 0);">write about the item</em></p><h5><strong style="font-size: 14px;">Additional information :</strong></h5><p><em style="font-size: 14px; color: rgb(0, 0, 0);">write any additional information</em></p><p><br></p>`;

export const templates = {
  Default: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Type:</strong> [Type of product here]</li>
    <li><strong>Material:</strong> [Material here]</li>
    <li><strong>Size:</strong> [Size details here]</li>
    <li><strong>Color:</strong> [Color details here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
  `,
  Sneaker: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Material Composition:</strong> [Material composition here]</li>
    <li><strong>Pattern:</strong> [Pattern type here]</li>
    <li><strong>Fit Type:</strong> [Fit type here]</li>
    <li><strong>Closure Type:</strong> [Closure type here]</li>
    <li><strong>Heel Height:</strong> [Heel height here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>

`,
  Tshirt: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Material Composition:</strong> [Material composition here]</li>
    <li><strong>Pattern:</strong> [Pattern type here]</li>
    <li><strong>Fit Type:</strong> [Fit type here]</li>
    <li><strong>Neckline Style:</strong> [Neckline style here]</li>
    <li><strong>Sleeve Length:</strong> [Sleeve length here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>

`,
  Electronic: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Operating System:</strong> [Operating system here]</li>
    <li><strong>Processor:</strong> [Processor type here]</li>
    <li><strong>RAM:</strong> [RAM size here]</li>
    <li><strong>Storage Capacity:</strong> [Storage capacity here]</li>
    <li><strong>Screen Size:</strong> [Screen size here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>

`,
  "Home Appliance": `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Power:</strong> [Power rating here]</li>
    <li><strong>Capacity:</strong> [Capacity here]</li>
    <li><strong>Material:</strong> [Material here]</li>
    <li><strong>Speed Settings:</strong> [Speed settings here]</li>
    <li><strong>Blade Type:</strong> [Blade type here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
  Furniture: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Material:</strong> [Material here]</li>
    <li><strong>Color:</strong> [Color here]</li>
    <li><strong>Adjustable:</strong> [Adjustable features here]</li>
    <li><strong>Max Weight Capacity:</strong> [Weight capacity here]</li>
    <li><strong>Dimensions:</strong> [Dimensions here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
  KitchenWare: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Material:</strong> [Material here]</li>
    <li><strong>Number of Pieces:</strong> [Number of pieces here]</li>
    <li><strong>Compatible with Induction:</strong> [Yes/No]</li>
    <li><strong>Oven Safe:</strong> [Oven safe details here]</li>
    <li><strong>Handle Type:</strong> [Handle type here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
  "Skin & Beauty": `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Ingredients:</strong> [Ingredients here]</li>
    <li><strong>Skin Type:</strong> [Skin type here]</li>
    <li><strong>SPF:</strong> [SPF rating here]</li>
    <li><strong>Size:</strong> [Size here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>

`,
  "Art & Craft": `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Contents:</strong> [List of contents, e.g., beads, glue, paper]</li>
    <li><strong>Material:</strong> [Material type, e.g., plastic, paper]</li>
    <li><strong>Recommended Age:</strong> [Recommended age group]</li>
    <li><strong>Size:</strong> [Size details here]</li>
    <li><strong>Color Variety:</strong> [Number of colors or variety]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
  Book: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Author:</strong> [Author name here]</li>
    <li><strong>Title:</strong> [Book title here]</li>
    <li><strong>Genre:</strong> [Genre here]</li>
    <li><strong>Publisher:</strong> [Publisher name here]</li>
    <li><strong>ISBN:</strong> [ISBN here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
  Food: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Type:</strong> [Type of food or beverage here]</li>
    <li><strong>Flavor:</strong> [Flavor details here]</li>
    <li><strong>Quantity:</strong> [Quantity here]</li>
    <li><strong>Ingredients:</strong> [Ingredients here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>

`,
  Health: `<div><strong>Product details</strong></div><br>
<ul>
    <li><strong>Type:</strong> [Type of health or wellness product here]</li>
    <li><strong>Ingredients:</strong> [Ingredients here]</li>
    <li><strong>Size:</strong> [Size details here]</li>
    <li><strong>Usage:</strong> [Usage instructions here]</li>
    <li><strong>Country of Origin:</strong> [Country here]</li>
</ul>
<div><strong>About this item</strong></div><br>
<ul>
    <li>[Key feature 1]</li>
    <li>[Key feature 2]</li>
    <li>[Key feature 3]</li>
    <li>[Key feature 4]</li>
    <li>[Key feature 5]</li>
</ul>
<div><strong>Additional Information</strong></div><br>
<ul>
    <li><strong>Manufacturer:</strong> [Manufacturer name here]</li>
    <li><strong>Packer:</strong> [Packer name here]</li>
    <li><strong>Importer:</strong> [Importer name here]</li>
    <li><strong>Item Weight:</strong> [Item weight here]</li>
    <li><strong>Item Dimensions (LxWxH):</strong> [Item dimensions here]</li>
    <li><strong>Generic Name:</strong> [Generic name here]</li>
</ul>
`,
};

export const wholeColors = [
  // Basic Colors
  { id: 1, color: "Red", hex: "#D32F2F" },
  { id: 2, color: "Dark Gray", hex: "#616161" },
  { id: 3, color: "Blue", hex: "#1976D2" },
  { id: 4, color: "Green", hex: "#388E3C" },
  { id: 5, color: "Light Gray", hex: "#B0BEC5" },
  { id: 6, color: "Black", hex: "#000000" },
  { id: 7, color: "White", hex: "#FFFFFF" },
  { id: 8, color: "Yellow", hex: "#FBC02D" },
  { id: 9, color: "Purple", hex: "#6A1B9A" },
  { id: 10, color: "Orange", hex: "#F57C00" },
  { id: 11, color: "Teal", hex: "#00796B" },
  { id: 12, color: "Cyan", hex: "#00BCD4" },
  { id: 13, color: "Pink", hex: "#E91E63" },
  { id: 14, color: "Brown", hex: "#795548" },
  { id: 15, color: "Indigo", hex: "#3F51B5" },
  { id: 16, color: "Lime", hex: "#CDDC39" },
  { id: 17, color: "Amber", hex: "#FFC107" },
  { id: 18, color: "Deep Orange", hex: "#FF5722" },
  { id: 19, color: "Light Blue", hex: "#03A9F4" },
  { id: 20, color: "Grey", hex: "#9E9E9E" },

  // Pastel Colors
  { id: 21, color: "Pastel Pink", hex: "#F8BBD0" },
  { id: 22, color: "Pastel Blue", hex: "#AFCBFF" },
  { id: 23, color: "Pastel Yellow", hex: "#FCE5C5" },
  { id: 24, color: "Pastel Green", hex: "#B9D6A9" },

  // Metallic Colors
  { id: 25, color: "Gold", hex: "#FFD700" },
  { id: 26, color: "Silver", hex: "#C0C0C0" },
  { id: 27, color: "Bronze", hex: "#cd7f32" },

  // Neon Colors
  { id: 28, color: "Neon Green", hex: "#39FF14" },
  { id: 29, color: "Neon Pink", hex: "#FF6EC7" },
  { id: 30, color: "Neon Blue", hex: "#1F51FF" },

  // Earth Tones
  { id: 31, color: "Olive Green", hex: "#808000" },
  { id: 32, color: "Terracotta", hex: "#E2725B" },
  { id: 33, color: "Rust", hex: "#B7410E" },

  // Additional Colors
  { id: 34, color: "Turquoise", hex: "#40E0D0" },
  { id: 35, color: "Lavender", hex: "#E6E6FA" },
  { id: 36, color: "Coral", hex: "#FF7F50" },
  { id: 37, color: "Sea Green", hex: "#2E8B57" },
  { id: 38, color: "Slate Blue", hex: "#6A5ACD" },
  { id: 39, color: "Maroon", hex: "#800000" },
  { id: 40, color: "Beige", hex: "#F5F5DC" },

  // Expanded Colors
  { id: 41, color: "Mauve", hex: "#E0B0FF" },
  { id: 42, color: "Peach", hex: "#FFE5B4" },
  { id: 43, color: "Mint Green", hex: "#98FF98" },
  { id: 44, color: "Azure", hex: "#007FFF" },
  { id: 45, color: "Periwinkle", hex: "#CCCCFF" },
  { id: 46, color: "Magenta", hex: "#FF00FF" },
  { id: 47, color: "Crimson", hex: "#DC143C" },
  { id: 48, color: "Blush", hex: "#DE5D83" },
  { id: 49, color: "Mustard", hex: "#FFDB58" },
  { id: 50, color: "Tangerine", hex: "#FFA07A" },
  { id: 51, color: "Pewter", hex: "#96A8A1" },
  { id: 52, color: "Khaki", hex: "#F0E68C" },
  { id: 53, color: "Ivory", hex: "#FFFFF0" },
  { id: 54, color: "Cerulean", hex: "#007BA7" },
  { id: 55, color: "Saffron", hex: "#F4C430" },
  { id: 56, color: "Chartreuse", hex: "#7FFF00" },
  { id: 57, color: "Vermilion", hex: "#E34234" },
  { id: 58, color: "Auburn", hex: "#A52A2A" },
  { id: 59, color: "Emerald", hex: "#50C878" },
  { id: 60, color: "Mint Cream", hex: "#F5FFFA" },
  { id: 61, color: "Honeydew", hex: "#F0FFF0" },
  { id: 62, color: "Salmon", hex: "#FA8072" },
  { id: 63, color: "Copper", hex: "#B87333" },
  { id: 64, color: "Jade", hex: "#00A86B" },
  { id: 65, color: "Amethyst", hex: "#9966CC" },
  { id: 66, color: "Navy", hex: "#000080" },
  { id: 67, color: "Rose", hex: "#FF007F" },
  { id: 68, color: "Ultramarine", hex: "#120A8F" },
  { id: 69, color: "Mulberry", hex: "#C54B8C" },
  { id: 70, color: "Wisteria", hex: "#C9A0DC" },
  { id: 71, color: "Burgundy", hex: "#800020" },
  { id: 72, color: "Denim", hex: "#1560BD" },
  { id: 73, color: "Forest Green", hex: "#228B22" },
  { id: 74, color: "Violet", hex: "#8A2BE2" },
  { id: 75, color: "Charcoal", hex: "#36454F" },
  { id: 76, color: "Bubblegum", hex: "#FFC1CC" },
  { id: 77, color: "Brick Red", hex: "#CB4154" },
  { id: 78, color: "Plum", hex: "#DDA0DD" },
  { id: 79, color: "Ocher", hex: "#CC7722" },
  { id: 80, color: "Caramel", hex: "#FFD59A" },
  { id: 81, color: "Tiffany Blue", hex: "#0ABAB5" },
  { id: 82, color: "Apricot", hex: "#FBCEB1" },
  { id: 83, color: "Mahogany", hex: "#C04000" },
  { id: 84, color: "Sage", hex: "#BCB88A" },
  { id: 85, color: "Dusty Rose", hex: "#DCAE96" },
  { id: 86, color: "Pistachio", hex: "#93C572" },
  { id: 87, color: "Almond", hex: "#EFDECD" },
  { id: 88, color: "Cinnamon", hex: "#D2691E" },
  { id: 89, color: "Sapphire", hex: "#0F52BA" },
  { id: 90, color: "Mint", hex: "#3EB489" },
  { id: 91, color: "Pear", hex: "#D1E231" },
];

export const isDarkColor = (val) => {
  const rgb = val.replace("rgb(", "").replace(")", "").split(",");
  const r = parseInt(rgb[0]);
  const g = parseInt(rgb[1]);
  const b = parseInt(rgb[2]);
  const brightness = 0.299 * r + 0.587 * g + 0.144 * b;
  return brightness < 128 || false;
};

export const isDarkHex = (rgb) => {
  const r = parseInt(rgb.slice(1, 3));
  const g = parseInt(rgb.slice(3, 5));
  const b = parseInt(rgb.slice(5, 7));
  const brightness = 0.299 * r + 0.587 * g + 0.144 * b;
  return brightness < 128 || false;
};

// export const rgbToHex = (rgba) => {
//   const [r, g, b] = rgba.match(/\d+(\.\d+)?/g).map(Number);
//   const toHex = (n) => n.toString(16).padStart(2, "0");
//   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// };

export const hexToRgba = (hex, alpha) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const rgbaToHex = (r, g, b, a) => {
  const toHex = (n) => {
    let hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const alpha = Math.round(a * 255); // Convert alpha to 0-255 scale
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(alpha)}`;
};

export const productCategories = [
  { id: 1, category: "Apron" },
  { id: 2, category: "Cap" },
  { id: 3, category: "Chef Coat" },
  { id: 4, category: "Cup" },
  { id: 5, category: "Hoodie" },
  { id: 6, category: "Jersey" },
  { id: 7, category: "Lab Coat" },
  { id: 8, category: "Over Coat" },
  { id: 9, category: "Shirt" },
  { id: 10, category: "Sleeveless Coat" },
  { id: 11, category: "Tshirt" },
];

export const sampleProducts = [
  { id: 1, product: "Printed Apron" },
  { id: 2, product: "Custom Cap" },
  { id: 3, product: "Embroidered Chef Coat" },
  { id: 4, product: "Personalized Cup" },
  { id: 5, product: "Printed Hoodie" },
  { id: 6, product: "Customized Jersey" },
  { id: 7, product: "Logo Lab Coat" },
  { id: 8, product: "Tailored Over Coat" },
  { id: 9, product: "Custom Shirt" },
  { id: 10, product: "Sleeveless Coat with Embroidery" },
  { id: 11, product: "Printed T-Shirt" },
];

export const benefits = [
  { id: 1, benefit: "Pay on Delivery" },
  { id: 2, benefit: "Free Delivery" },
  { id: 3, benefit: "Top Brand" },
  { id: 4, benefit: "Secure Transaction" },
  { id: 5, benefit: "Easy Returns (10 Days)" },
  { id: 6, benefit: "Easy Returns (3 Days)" },
  { id: 7, benefit: "24/7 Customer Support" },
  { id: 8, benefit: "Exclusive Offers" },
  { id: 9, benefit: "Warranty Included" },
  { id: 10, benefit: "Loyalty Points" },
  { id: 11, benefit: "Quality Assured" },
];

export const methods = [
  { id: 1, method: "Google Pay" },
  { id: 2, method: "Cash On Delivery" },
];

export const sizes = ["S", "M", "L", "XL", "XXL", "Slim", "Baggy", "Universal"];
export const numSizes = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export const gender = ["Men", "Woman", "Unisex"];
export const targets = [
  "Men",
  "Women",
  "Junior",
  "Unisex",
  "Kids",
  "Teens",
  "Adults",
  "Seniors",
  "Babies",
  "All Ages",
];

export const fonts = [
  { id: 1, name: "Arial" },
  { id: 2, name: "Helvetica" },
  { id: 3, name: "Verdana" },
  { id: 4, name: "Tahoma" },
  { id: 5, name: "Trebuchet MS" },
  { id: 6, name: "Gill Sans" },
  { id: 7, name: "Lucida Sans" },
  { id: 8, name: "Segoe UI" },
  { id: 9, name: "Calibri" },
  { id: 10, name: "Franklin Gothic" },
  { id: 11, name: "Century Gothic" },
  { id: 12, name: "Futura" },
  { id: 13, name: "Geneva" },
  { id: 14, name: "Arial Black" },
  { id: 15, name: "Impact" },
  { id: 16, name: "Courier New" },
  { id: 17, name: "Lucida Console" },
  { id: 18, name: "Georgia" },
  { id: 19, name: "Palatino" },
  { id: 20, name: "Times New Roman" },
  { id: 21, name: "Cambria" },
  { id: 22, name: "Garamond" },
  { id: 23, name: "Bookman" },
  { id: 24, name: "Didot" },
  { id: 25, name: "Optima" },
];

export const fontColors = [
  { id: 1, color: "Black", hex: "#000000" },
  { id: 2, color: "White", hex: "#FFFFFF" },
  { id: 3, color: "Purple", hex: "#9C27B0" },
  { id: 4, color: "Deep Purple", hex: "#673AB7" },
  { id: 5, color: "Indigo", hex: "#3F51B5" },
  { id: 6, color: "Blue", hex: "#2196F3" },
  { id: 7, color: "Light Blue", hex: "#03A9F4" },
  { id: 8, color: "Cyan", hex: "#00BCD4" },
  { id: 9, color: "Teal", hex: "#009688" },
  { id: 10, color: "Green", hex: "#4CAF50" },
  { id: 11, color: "Light Green", hex: "#8BC34A" },
  { id: 12, color: "Lime", hex: "#CDDC39" },
  { id: 13, color: "Yellow", hex: "#FFEB3B" },
  { id: 14, color: "Amber", hex: "#FFC107" },
  { id: 15, color: "Orange", hex: "#FF9800" },
  { id: 16, color: "Deep Orange", hex: "#FF5722" },
  { id: 17, color: "Brown", hex: "#795548" },
  { id: 18, color: "Grey", hex: "#9E9E9E" },
  { id: 19, color: "Blue Grey", hex: "#607D8B" },
  { id: 20, color: "Pink", hex: "#E91E63" },
  { id: 21, color: "Red", hex: "#D32F2F" },
];

export const erToast = (title) => {
  toast.error(title);
};

export const successToast = (title) => {
  toast.success(title);
};

export const sampleOrders = [
  {
    id: 1,
    name: "Grove",
    payment: "Rial",
    status: "switch",
    cash: "$899.81",
  },
  {
    id: 2,
    name: "Waverly",
    payment: "Yen",
    status: "visa-electron",
    cash: "$662.75",
  },
  {
    id: 3,
    name: "Angelo",
    payment: "Tenge",
    status: "visa-electron",
    cash: "$330.37",
  },
  {
    id: 4,
    name: "Rollo",
    payment: "Hryvnia",
    status: "maestro",
    cash: "$704.56",
  },
  {
    id: 5,
    name: "Farris",
    payment: "Zloty",
    status: "jcb",
    cash: "$956.58",
  },
  {
    id: 6,
    name: "Maryanna",
    payment: "Won",
    status: "visa-electron",
    cash: "$907.93",
  },
  {
    id: 7,
    name: "Nester",
    payment: "Boliviano",
    status: "bankcard",
    cash: "$731.96",
  },
  {
    id: 8,
    name: "Celeste",
    payment: "Real",
    status: "visa",
    cash: "$731.73",
  },
  {
    id: 9,
    name: "Brnaba",
    payment: "Afghani",
    status: "jcb",
    cash: "$543.83",
  },
  {
    id: 10,
    name: "Toiboid",
    payment: "Peso",
    status: "maestro",
    cash: "$895.83",
  },
  {
    id: 11,
    name: "Rube",
    payment: "Franc",
    status: "visa-electron",
    cash: "$244.81",
  },
  {
    id: 12,
    name: "Ingunna",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$396.21",
  },
  {
    id: 13,
    name: "Theressa",
    payment: "Rial",
    status: "bankcard",
    cash: "$489.01",
  },
  {
    id: 14,
    name: "Arman",
    payment: "Euro",
    status: "instapayment",
    cash: "$697.68",
  },
  {
    id: 15,
    name: "Etheline",
    payment: "Peso",
    status: "switch",
    cash: "$484.10",
  },
  {
    id: 16,
    name: "Lina",
    payment: "Koruna",
    status: "visa-electron",
    cash: "$105.84",
  },
  {
    id: 17,
    name: "Robinia",
    payment: "Rupiah",
    status: "jcb",
    cash: "$544.81",
  },
  {
    id: 18,
    name: "Abe",
    payment: "Naira",
    status: "china-unionpay",
    cash: "$101.77",
  },
  {
    id: 19,
    name: "Sharla",
    payment: "Real",
    status: "maestro",
    cash: "$343.03",
  },
  {
    id: 20,
    name: "Wiley",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$155.21",
  },
  {
    id: 21,
    name: "Ches",
    payment: "Yuan Renminbi",
    status: "china-unionpay",
    cash: "$907.09",
  },
  {
    id: 22,
    name: "Maurits",
    payment: "Ruble",
    status: "maestro",
    cash: "$493.43",
  },
  {
    id: 23,
    name: "Benedick",
    payment: "Euro",
    status: "diners-club-carte-blanche",
    cash: "$98.76",
  },
  {
    id: 24,
    name: "Estele",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$564.56",
  },
  {
    id: 25,
    name: "Kendal",
    payment: "Koruna",
    status: "jcb",
    cash: "$65.44",
  },
  {
    id: 26,
    name: "Gerrie",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$587.80",
  },
  {
    id: 27,
    name: "Mac",
    payment: "Krona",
    status: "jcb",
    cash: "$47.60",
  },
  {
    id: 28,
    name: "Alisa",
    payment: "Peso",
    status: "switch",
    cash: "$187.85",
  },
  {
    id: 29,
    name: "Georg",
    payment: "Shilling",
    status: "mastercard",
    cash: "$733.03",
  },
  {
    id: 30,
    name: "Ulberto",
    payment: "Euro",
    status: "americanexpress",
    cash: "$920.87",
  },
  {
    id: 31,
    name: "Barb",
    payment: "Tenge",
    status: "visa",
    cash: "$176.01",
  },
  {
    id: 32,
    name: "Reece",
    payment: "Euro",
    status: "americanexpress",
    cash: "$335.47",
  },
  {
    id: 33,
    name: "Daryle",
    payment: "Euro",
    status: "maestro",
    cash: "$631.21",
  },
  {
    id: 34,
    name: "Karola",
    payment: "Dong",
    status: "jcb",
    cash: "$731.20",
  },
  {
    id: 35,
    name: "Adrian",
    payment: "Yuan Renminbi",
    status: "americanexpress",
    cash: "$552.61",
  },
  {
    id: 36,
    name: "Northrop",
    payment: "Kuna",
    status: "jcb",
    cash: "$703.50",
  },
  {
    id: 37,
    name: "Tera",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$787.76",
  },
  {
    id: 38,
    name: "Ginevra",
    payment: "Rupiah",
    status: "diners-club-carte-blanche",
    cash: "$280.95",
  },
  {
    id: 39,
    name: "Shirleen",
    payment: "Real",
    status: "mastercard",
    cash: "$684.55",
  },
  {
    id: 40,
    name: "Drud",
    payment: "Euro",
    status: "maestro",
    cash: "$760.88",
  },
  {
    id: 41,
    name: "Karylin",
    payment: "Zloty",
    status: "diners-club-carte-blanche",
    cash: "$995.43",
  },
  {
    id: 42,
    name: "Wally",
    payment: "Dollar",
    status: "mastercard",
    cash: "$607.94",
  },
  {
    id: 43,
    name: "Dionysus",
    payment: "Euro",
    status: "instapayment",
    cash: "$904.81",
  },
  {
    id: 44,
    name: "Ellsworth",
    payment: "Real",
    status: "laser",
    cash: "$723.47",
  },
  {
    id: 45,
    name: "Persis",
    payment: "Krona",
    status: "jcb",
    cash: "$876.94",
  },
  {
    id: 46,
    name: "Cart",
    payment: "Peso",
    status: "jcb",
    cash: "$74.25",
  },
  {
    id: 47,
    name: "Kittie",
    payment: "Denar",
    status: "jcb",
    cash: "$417.52",
  },
  {
    id: 48,
    name: "Reese",
    payment: "Afghani",
    status: "bankcard",
    cash: "$569.07",
  },
  {
    id: 49,
    name: "Sonja",
    payment: "Euro",
    status: "visa",
    cash: "$379.29",
  },
  {
    id: 50,
    name: "Ranna",
    payment: "Lempira",
    status: "solo",
    cash: "$211.57",
  },
  {
    id: 51,
    name: "Amy",
    payment: "Peso",
    status: "jcb",
    cash: "$429.75",
  },
  {
    id: 52,
    name: "Ganny",
    payment: "Peso",
    status: "jcb",
    cash: "$317.26",
  },
  {
    id: 53,
    name: "Calla",
    payment: "Ruble",
    status: "mastercard",
    cash: "$692.46",
  },
  {
    id: 54,
    name: "Freda",
    payment: "Zloty",
    status: "jcb",
    cash: "$914.59",
  },
  {
    id: 55,
    name: "Timothy",
    payment: "Koruna",
    status: "china-unionpay",
    cash: "$81.46",
  },
  {
    id: 56,
    name: "Pacorro",
    payment: "Yuan Renminbi",
    status: "mastercard",
    cash: "$102.28",
  },
  {
    id: 57,
    name: "Grace",
    payment: "Yen",
    status: "mastercard",
    cash: "$744.99",
  },
  {
    id: 58,
    name: "Shaylah",
    payment: "Zloty",
    status: "instapayment",
    cash: "$279.71",
  },
  {
    id: 59,
    name: "Yorker",
    payment: "Yuan Renminbi",
    status: "switch",
    cash: "$471.94",
  },
  {
    id: 60,
    name: "Uriah",
    payment: "Naira",
    status: "maestro",
    cash: "$115.78",
  },
  {
    id: 61,
    name: "Cyrillus",
    payment: "Hryvnia",
    status: "bankcard",
    cash: "$390.94",
  },
  {
    id: 62,
    name: "Kelci",
    payment: "Yuan Renminbi",
    status: "diners-club-enroute",
    cash: "$609.30",
  },
  {
    id: 63,
    name: "Sammy",
    payment: "Rupee",
    status: "mastercard",
    cash: "$44.88",
  },
  {
    id: 64,
    name: "Tam",
    payment: "Dinar",
    status: "americanexpress",
    cash: "$881.29",
  },
  {
    id: 65,
    name: "Morse",
    payment: "Euro",
    status: "visa",
    cash: "$459.72",
  },
  {
    id: 66,
    name: "Julian",
    payment: "Krona",
    status: "americanexpress",
    cash: "$781.15",
  },
  {
    id: 67,
    name: "Kylila",
    payment: "Rupiah",
    status: "switch",
    cash: "$726.00",
  },
  {
    id: 68,
    name: "Fanny",
    payment: "Euro",
    status: "diners-club-carte-blanche",
    cash: "$61.15",
  },
  {
    id: 69,
    name: "Felicle",
    payment: "Rupiah",
    status: "jcb",
    cash: "$224.57",
  },
  {
    id: 70,
    name: "Eadie",
    payment: "Dollar",
    status: "diners-club-enroute",
    cash: "$57.47",
  },
  {
    id: 71,
    name: "Freddi",
    payment: "Ruble",
    status: "jcb",
    cash: "$20.08",
  },
  {
    id: 72,
    name: "Tiler",
    payment: "Zloty",
    status: "jcb",
    cash: "$524.39",
  },
  {
    id: 73,
    name: "Hebert",
    payment: "Shilling",
    status: "jcb",
    cash: "$66.21",
  },
  {
    id: 74,
    name: "Jelene",
    payment: "Euro",
    status: "jcb",
    cash: "$308.00",
  },
  {
    id: 75,
    name: "Angelia",
    payment: "Real",
    status: "americanexpress",
    cash: "$531.53",
  },
  {
    id: 76,
    name: "Davey",
    payment: "Rial",
    status: "jcb",
    cash: "$744.75",
  },
  {
    id: 77,
    name: "Ferdinande",
    payment: "Euro",
    status: "switch",
    cash: "$893.28",
  },
  {
    id: 78,
    name: "Kahaleel",
    payment: "Balboa",
    status: "jcb",
    cash: "$953.14",
  },
  {
    id: 79,
    name: "Rica",
    payment: "Peso",
    status: "mastercard",
    cash: "$641.41",
  },
  {
    id: 80,
    name: "Devondra",
    payment: "Dollar",
    status: "americanexpress",
    cash: "$932.51",
  },
  {
    id: 81,
    name: "Margi",
    payment: "Franc",
    status: "diners-club-us-ca",
    cash: "$953.09",
  },
  {
    id: 82,
    name: "Giorgi",
    payment: "Franc",
    status: "jcb",
    cash: "$96.58",
  },
  {
    id: 83,
    name: "Maighdiln",
    payment: "Dollar",
    status: "jcb",
    cash: "$778.23",
  },
  {
    id: 84,
    name: "Hernando",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$804.17",
  },
  {
    id: 85,
    name: "Fleur",
    payment: "Peso",
    status: "switch",
    cash: "$852.10",
  },
  {
    id: 86,
    name: "Maggee",
    payment: "Yen",
    status: "visa-electron",
    cash: "$2.77",
  },
  {
    id: 87,
    name: "Lennard",
    payment: "Ruble",
    status: "diners-club-enroute",
    cash: "$77.58",
  },
  {
    id: 88,
    name: "Duke",
    payment: "Euro",
    status: "laser",
    cash: "$653.39",
  },
  {
    id: 89,
    name: "Manny",
    payment: "Peso",
    status: "mastercard",
    cash: "$938.21",
  },
  {
    id: 90,
    name: "Mavis",
    payment: "Real",
    status: "laser",
    cash: "$352.85",
  },
  {
    id: 91,
    name: "Ophelia",
    payment: "Zloty",
    status: "visa-electron",
    cash: "$153.11",
  },
  {
    id: 92,
    name: "Morty",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$866.37",
  },
  {
    id: 93,
    name: "Yolane",
    payment: "Rupiah",
    status: "jcb",
    cash: "$811.13",
  },
  {
    id: 94,
    name: "Yuri",
    payment: "Zloty",
    status: "diners-club-carte-blanche",
    cash: "$876.57",
  },
  {
    id: 95,
    name: "Ignaz",
    payment: "Yuan Renminbi",
    status: "jcb",
    cash: "$892.70",
  },
  {
    id: 96,
    name: "Deidre",
    payment: "Rupiah",
    status: "jcb",
    cash: "$273.97",
  },
  {
    id: 97,
    name: "Sutton",
    payment: "Yuan Renminbi",
    status: "visa-electron",
    cash: "$815.07",
  },
  {
    id: 98,
    name: "Tomasina",
    payment: "Dong",
    status: "diners-club-enroute",
    cash: "$400.85",
  },
  {
    id: 99,
    name: "Eleonore",
    payment: "Yen",
    status: "jcb",
    cash: "$842.91",
  },
  {
    id: 100,
    name: "Shayne",
    payment: "Rial",
    status: "jcb",
    cash: "$822.53",
  },
];

export const papStyle = {
  display: "table",
  tableLayout: "fixed",
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
};

export const tableContStyle = {
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100% !important",
  overflow: "scroll",
  flexGrow: 1,
};
