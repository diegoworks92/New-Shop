import Link from "next/link";
import { ChatLink } from "../../components/Store/ChatLink";
import { getCollections } from "app/../services/shopify/collections";
import styles from "./StoreLayout.module.sass";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <h1 className={styles.StoreLayout__title}>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections?.map((collection: any) => (
            <li key={collection.id} className={styles.StoreLayout__item}>
              <Link
                href={"/store/" + collection.handle}
                className={styles.StoreLayout__chip}
              >
                {collection.title}
              </Link>
            </li>
          ))}
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  );
}
