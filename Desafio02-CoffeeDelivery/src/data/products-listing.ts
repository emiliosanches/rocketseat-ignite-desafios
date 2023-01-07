import espressoImage from "../assets/products-images/Expresso Tradicional.png";
import americanEspresssoImage from "../assets/products-images/Americano.png";
import creamyEspressoImage from "../assets/products-images/Expresso Cremoso.png";
import icyEspressoImage from "../assets/products-images/Café Gelado.png";
import coffeeWithMilkImage from "../assets/products-images/Café com Leite.png";
import latteImage from "../assets/products-images/Latte.png";
import cappuccinoImage from "../assets/products-images/Capuccino.png";
import macchiatoImage from "../assets/products-images/Macchiato.png";
import mocaccinoImage from "../assets/products-images/Mocaccino.png";
import hotChocolateImage from "../assets/products-images/Chocolate Quente.png";
import cubanCoffeeImage from "../assets/products-images/Cubano.png";
import havaianCoffeeImage from "../assets/products-images/Havaiano.png";
import arabianCoffeeImage from "../assets/products-images/Árabe.png";
import irishCoffeeImage from "../assets/products-images/Irlandês.png";

export const products = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: espressoImage,
    price: 7.5,
    tags: ["TRADICIONAL"],
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: americanEspresssoImage,
    price: 8,
    tags: ["TRADICIONAL"],
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: creamyEspressoImage,
    price: 8.5,
    tags: ["TRADICIONAL"],
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: icyEspressoImage,
    price: 7.5,
    tags: ["TRADICIONAL", "GELADO"],
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: coffeeWithMilkImage,
    price: 9,
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latteImage,
    price: 11,
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: cappuccinoImage,
    price: 9.5,
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiatoImage,
    price: 12,
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mocaccinoImage,
    price: 13.5,
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: hotChocolateImage,
    price: 11.5,
    tags: ["ESPECIAL", "COM LEITE"],
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubanCoffeeImage,
    price: 15.5,
    tags: ["ESPECIAL", "ALCOOLICO", "GELADO"],
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: havaianCoffeeImage,
    price: 14,
    tags: ["ESPECIAL"],
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabianCoffeeImage,
    price: 10.5,
    tags: ["ESPECIAL"],
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irishCoffeeImage,
    price: 17,
    tags: ["ESPECIAL", "ALCOÓLICO"],
  },
];
