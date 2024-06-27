import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { defaultUrl } from "@/utils/utils";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Airsoft events CAP",
  description: "The airsoft events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
          {children}
      </body>
    </html>
  );
}
