import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import RegisterButton from "./_components/RegisterButton";
import Footer from "./_components/Footer";

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
      <head>
      <title>{metadata.title}</title>
        <meta name="description" content="Start your journey with Zager Digital Services since 2017" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <section className="bg-image-section">
          <Header />
          <div className="content-wrapper h-full w-full flex justify-center items-center">
            {children}
          </div>
          <div className="fixed md:bottom-10 z-50 md:right-10 bottom-5 right-5">
           <RegisterButton />
          </div>
          <Footer />
        </section>
      </body>
    </html>
  );
}
