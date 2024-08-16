import { ProductsWrapper } from "../../../components/Store/ProductsWrapper";
import { getProducts } from "../../../services/shopify/products";
import {
  getCollectionProducts,
  getCollections,
} from "../../../services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}
