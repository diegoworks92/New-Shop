import Link from "next/link";
import { validateAccessToken } from "../../../utils/auth/validateAccesToken";
import dynamic from "next/dynamic";
import styles from "./Header.module.sass";

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {
  ssr: false,
});

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (
          <Link href="/my-account">Welcome {customer.firstName}</Link>
        ) : (
          <ul className={styles.Header__list}>
            <li>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        )}
        <NoSSRShoppingCart />
      </div>
    </header>
  );
};
