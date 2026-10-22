import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoppe Web | Sitios web que conectan",
  description:
    "Diseñamos y desarrollamos sitios web a medida para marcas con visión. Tu intuición merece una presencia digital extraordinaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
