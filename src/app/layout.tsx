import { Roboto } from "next/font/google";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import "../sass/globals.sass";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
