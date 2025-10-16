import "@/styles/globals.css";
import type { Metadata } from "next";

const { SITE_NAME } = process.env;

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – A quick way to make coffee`,
    template: `%s – ${SITE_NAME}`,
  },
  description: "Cafex",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
