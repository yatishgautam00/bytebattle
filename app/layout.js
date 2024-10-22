import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ByteBattle",
  description: "ByteBattle a project-based hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <section className="bg-image-section">
          <div className="content-wrapper flex flex-col py-10 h-full w-full px-4 justify-center items-center">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
