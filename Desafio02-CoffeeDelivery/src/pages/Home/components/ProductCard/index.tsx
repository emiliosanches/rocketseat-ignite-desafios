import { useForm, FormProvider } from "react-hook-form";
import { ShoppingCartSimple } from "phosphor-react";
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
  TagsContainer,
} from "./styles";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

export function ProductCard({
  id,
  name,
  description,
  image,
  price,
  tags,
}: ProductCardProps) {
  const addProductToCartForm = useForm({
    defaultValues: {
      itemAmount: 1,
    },
  });

  function handleAddProductToCart(data: { itemAmount: number }) {
    console.log({
      id,
      itemAmount: data.itemAmount,
    });
  }

  return (
    <ProductCardContainer>
      <img src={image} alt="Imagem de um Expresso Tradicional" />

      <TagsContainer>
        {tags.map((tag) => (
          <ProductTag>{tag}</ProductTag>
        ))}
      </TagsContainer>

      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>

      <ProductCardFooter>
        <PriceContainer>
          R$ <span>{price.toFixed(2).replace(".", ",")}</span>
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
