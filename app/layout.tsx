import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {Github} from "@deemlol/next-icons";
import {UserCheck} from "@deemlol/next-icons";
import {AppWindowMac} from "@deemlol/next-icons";
import {PhoneCall} from "@deemlol/next-icons";
import {ChevronDown} from "@deemlol/next-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oskar Wiktor",
  description: "FrontEnd Developer Curriculum Vitae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="flex flex-col w-68 pr-6 pl-6 h-dvh bg-zinc-900 border-r-1 border-zinc-700">
          <div className="flex w-full pt-6 pb-4 justify-around border-b-1 border-zinc-800">
            <div className="w-14 h-14 ">
              <Link
                href="https://github.com/OskarWiktor"
                className="flex justify-center items-center w-14 h-14 border-1 rounded-md border-amber-400"
              >
                <Github size={36} color="oklch(82.8% 0.189 84.429)" />
              </Link>
            </div>
            <div>
              <p className="text-2xl text-[oklch(0.93_0_132)]">Oskar Wiktor</p>
              <p className="text-[oklch(0.76_0_132)]">FrontEnd Dev</p>
            </div>
          </div>

          <div className="flex flex-col h-fit pt-4 pb-4">
            <Link
              href="/"
              className="flex items-center rounded-md mt-1 mb-1 pl-3 pr-3 pt-1 pb-1 group"
            >
              <UserCheck
                size={16}
                className="mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
              />
              O mnie
              <ChevronDown
                size={16}
                className="ml-auto text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
              />
            </Link>

            <Link
              href="/"
              className="flex items-center rounded-md mt-1 mb-1 pl-3 pr-3 pt-1 pb-1 group"
            >
              <AppWindowMac
                size={16}
                className="mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
              />
              Projekty
              <ChevronDown
                size={16}
                className="ml-auto text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
              />
            </Link>

            <Link
              href="/"
              className="flex items-center rounded-md mt-1 mb-1 pl-3 pr-3 pt-1 pb-1 group"
            >
              <PhoneCall
                size={16}
                className="mr-3 text-[oklch(0.76_0_132)] group-hover:text-[oklch(0.93_0_132)]"
              />
              Kontakt
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
