import Navbar from "@/components/website/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </>
  );
}
