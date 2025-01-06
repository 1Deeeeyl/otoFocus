import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/container/Container";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "OtoFocus",
  description: "OtoFocus Photography Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Container>
          <Navigation/>
        {children}
        </Container>
        </body>
    </html>
  );
}
