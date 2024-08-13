"use client";
import styles from "./ShoppingCart.module.sass";
import { useShoppingCart } from "../../../../hooks/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();

  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />
    </button>
  );
};
