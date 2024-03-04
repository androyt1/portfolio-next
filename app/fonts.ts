import { Inter, Roboto, Cookie } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const cookie = Cookie({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});
