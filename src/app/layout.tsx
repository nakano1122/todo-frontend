import { Audiowide, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";

const audiowide = Audiowide({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
});
const noto = Noto_Sans_JP({
  display: "swap",
  preload: false,
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${noto.variable} ${audiowide.variable} bg-blue-500 px-4`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
