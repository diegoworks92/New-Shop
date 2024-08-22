import { getMainProducts } from "../../../services/shopify/products";
import Image from "next/image";
import styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className={styles.MainProducts}>
      <h3 className={styles.MainProducts__title}>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map(
          (product: {
            id: string;
            title: string;
            images: {
              src: string;
            }[];
          }) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <div className={styles.MainProducts__imageWrapper}>
                  <Image
                    src={imageSrc}
                    fill
                    alt={product.title}
                    loading="eager"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className={styles.MainProducts__image}
                  />
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};
