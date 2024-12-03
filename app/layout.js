import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
  title: "Mood Mapper",
  description: "Visualize Your Emotional Trends!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex items-center justify-between gap-4 p-4 sm:p-8">
      <Link href={"/"} aria-label="Home Page">
        <h1 className="font-sans text-base sm:text-lg textGradient">
          Mood Mapper
        </h1>
      </Link>
    </header>
  );

  const footer = (
    <footer className="grid p-4 sm:p-8 place-items-center">
      <Link
        href={"https://solarluiso-portfolio.vercel.app/"}
        target="_blank"
        aria-label="Visit Luiso's Portfolio"
        className=""
      >
        <p className="font-mono text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500">
          Built by Luiso! ⨀
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-200`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
