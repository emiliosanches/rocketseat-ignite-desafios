import { useForm, FormProvider } from "react-hook-form";
import { ShoppingCartSimple } from "phosphor-react";
import productImage from "../../../../assets/products-images/Expresso Tradicional.png";
import { NumberInput } from "../../../../components/NumberInput";
import {
  ProductCardContainer,
  AddToCardButton,
  AddProductToCartForm,
  PriceContainer,
  ProductCardFooter,
  ProductDescription,
  ProductName,
  ProductTag,
} from "./styles";

export function ProductCard() {
  const addProductToCartForm = useForm({
    defaultValues: {
      itemAmount: 1,
    },
  });

  function handleAddProductToCart(data: { itemAmount: number }) {
    console.log(data);
  }

  return (
    <ProductCardContainer>
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

        <AddProductToCartForm
          onSubmit={addProductToCartForm.handleSubmit(handleAddProductToCart)}
        >
          <FormProvider {...addProductToCartForm}>
            <NumberInput name="itemAmount" />
            <AddToCardButton type="submit">
              <ShoppingCartSimple weight="fill" />
            </AddToCardButton>
          </FormProvider>
        </AddProductToCartForm>
      </ProductCardFooter>
    </ProductCardContainer>
  );
}
