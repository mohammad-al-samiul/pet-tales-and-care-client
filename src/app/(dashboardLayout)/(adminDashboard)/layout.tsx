export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      admin sidebar
      <div className={`antialiased`}>{children}</div>
    </>
  );
}
