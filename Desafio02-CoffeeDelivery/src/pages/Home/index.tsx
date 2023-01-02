import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  ShoppingCartSimple,
} from "phosphor-react";
import heroImage from "../../assets/hero.png";
import productImage from "../../assets/products-images/Expresso Tradicional.png";

import {
  HeroContainer,
  Presentation,
  Title,
  Subtitle,
  ItemsContainer,
  Item,
  ProductsListSection,
  ProductsList,
  ProductCard,
  ProductTag,
  ProductName,
  ProductDescription,
  PriceContainer,
  ProductCardFooter,
  AmountInputContainer,
  OrderButtonsContainer,
  AddToCardButton,
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
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
          <ProductCard>
            <img src={productImage} alt="Imagem de um Expresso Tradicional" />

            <ProductTag>TRADICIONAL</ProductTag>

            <ProductName>Expresso Tradicional</ProductName>
            <ProductDescription>
              O tradicional café feito com água quente e grãos moídos
            </ProductDescription>

            <ProductCardFooter>
              <PriceContainer>
                R$ <span>9,90</span>
              </PriceContainer>

              <OrderButtonsContainer>
                <AmountInputContainer>
                  <input type="number" />
                </AmountInputContainer>
                <AddToCardButton>
                  <ShoppingCartSimple weight="fill" />
                </AddToCardButton>
              </OrderButtonsContainer>
            </ProductCardFooter>
          </ProductCard>
        </ProductsList>
      </ProductsListSection>
    </main>
  );
}
