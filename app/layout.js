import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ai Powered Personal Finance Manager",
  description: "Expense Manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* this main tag help us to know what is the main content  */}
          {/* footer */}
          <footer className="bg-blue-500 py-12 ">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made By Deepak & Group </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
