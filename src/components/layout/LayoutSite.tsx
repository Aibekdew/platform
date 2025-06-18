import "./globals.scss";
import { geistSans, geistMono } from "@/lib/fonts"; // шрифты
import LayoutSite from "@/components/layout/LayoutSite"; // ваш компонент

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {/* теперь Header и контейнер идут отсюда */}
        <LayoutSite>{children}</LayoutSite>
      </body>
    </html>
  );
}
