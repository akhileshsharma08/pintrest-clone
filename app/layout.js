import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AuthProvider } from "./SessionProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pintrest Clone",
  description: "Generated by Akhilesh Sharma",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <div>
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
