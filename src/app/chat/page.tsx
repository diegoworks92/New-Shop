import { Chat } from "../../components/chat/Chat";
import { getProducts } from "../../services/shopify/products";
import { createAgent } from "../../utils/openai/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map(
    (product: { title: string }) => product.title
  );
  const flatProductTitles = productTitles.join("\n");
  const agent = createAgent(flatProductTitles);

  return <Chat agent={agent} />;
}
