import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import heroImage from "../../assets/hero.png";
import { products } from "../../data/products-listing";
import { ProductCard } from "./components/ProductCard";

import {
  HeroContainer,
  Presentation,
  Title,
  Subtitle,
  ItemsContainer,
  Item,
  ProductsListSection,
  ProductsList,
} from "./styles";

export function Home() {
  return (
    <main>
      <HeroContainer>
        <Presentation>
          <div>
            <Title>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </Subtitle>
          </div>

          <ItemsContainer>
            <div>
              <Item color="yellow-dark">
                <span>
                  <ShoppingCart />
                </span>
                Compra simples e segura
              </Item>
              <Item color="yellow">
                <span>
                  <Timer />
                </span>
                Entrega rápida e rastreada
              </Item>
            </div>
            <div>
              <Item color="base-text">
                <span>
                  <Package />
                </span>
                Embalagem mantém o café intacto
              </Item>
              <Item color="purple">
                <span>
                  <Coffee />
                </span>
                O café chega fresquinho até você
              </Item>
            </div>
          </ItemsContainer>
        </Presentation>
        <img src={heroImage} alt="" />
      </HeroContainer>

      <ProductsListSection>
        <h1>Nossos cafés</h1>

        <ProductsList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              tags={product.tags}
              price={product.price}
            />
          ))}
        </ProductsList>
      </ProductsListSection>
    </main>
  );
}
