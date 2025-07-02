import ClientLayout from "@/components/ClientLayout";
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientLayout>{children}</ClientLayout>
    </>
  );
}
