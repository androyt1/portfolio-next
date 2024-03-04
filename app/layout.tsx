import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
import { roboto } from "./fonts";

export const metadata: Metadata = {
    title: "Aghoghovwia Andrew",
    description: "Full Stack Web Developer Next React Express Node",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth bg-dark-blue'>
            <body className={clsx("bg-slate-800", roboto.className)}>
                <main>{children}</main>
            </body>
        </html>
    );
}
