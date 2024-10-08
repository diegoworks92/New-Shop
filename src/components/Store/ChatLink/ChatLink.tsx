import Link from "next/link";
import styles from "./ChatLink.module.sass";

export const ChatLink = () => {
  return (
    <Link className={styles.ChatLink} href="/chat">
      Chat 🤖
    </Link>
  );
};

/* 
.ChatLink
position: fixed
bottom: 2rem
right: 5rem
background: $gradient
border-radius: 24px
padding: 0.5rem 1rem
font-weight: bold
color: $text-color
text-decoration: none
font-size: 1.5rem
z-index: 4
 */
