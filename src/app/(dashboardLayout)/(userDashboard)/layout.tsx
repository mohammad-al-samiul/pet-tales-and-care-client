export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      user dashboard
      <div className={`antialiased`}>{children}</div>
    </>
  );
}
