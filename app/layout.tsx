import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selva Studio | Diseño web a tu medida",
  description:
    "Diseñamos y desarrollamos páginas web a la medida de tu proyecto. Experiencias digitales auténticas, claras y listas para crecer contigo.",
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
