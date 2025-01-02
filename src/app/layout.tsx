import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col h-screen bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
