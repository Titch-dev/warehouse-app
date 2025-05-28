import Navbar from "@/components/header/navbar";
import Footbar from "@/components/footer/footbar";
import "./globals.css";


import { spartanFont } from "@/lib/fonts";
import styles from './layout.module.css';

export const metadata = {
  title: "Westville Warehouse",
  description: "The Westville Warehouse: Where Durban nightlife comes alive.",
  icons: {
    icon: [
      { url: "/icons/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/icons/icon-180x180.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#242424",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spartanFont.className}>
        <Navbar/>
        <div className={styles.wrapper}>
          {children}
        </div>
        <footer className={styles.footer}>
          <Footbar/>
        </footer>
      </body>
    </html>
  );
}
