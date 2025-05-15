import { Metadata } from "next";
import { RocknRoll_One } from "next/font/google";
import "./globals.css";

const rocknRollOne = RocknRoll_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "手づくり肉まんの店パオ",
  description:
    "「手づくり」にこだわって、一つ一つ生地から手づくりしています。素朴で体にやさしい中国の家庭の味です。どうぞたっぷりとお楽しみください。",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={rocknRollOne.className}>{children}</body>
    </html>
  );
}
