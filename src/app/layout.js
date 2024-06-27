
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Komosu Network",
  description:
    "Komosu Network is committed to revolutionizing the automotive industry by providing innovative solutions. our dedicated team of experts focuses on building strong relationships with clients, ensuring that they have more time to concentrate on what truly matters to them. ",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
    
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      

      
      <body className={montserrat.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
