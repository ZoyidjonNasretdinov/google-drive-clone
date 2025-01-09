import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL('https://drive.zoyidjon.me'),
	title: 'Google drive',
	description: 'Google drive web application clone created by zoyidjon.me',
	authors: [{ name: 'Zoyidjon Nasretdinov', url: 'https://drive.zoyidjon.me' }],
	icons: { icon: '/logo.svg' },
	openGraph: {
		title: 'Google drive',
		description: "Google drive web application clone created by zoyidjon.me",
		type: 'website',
		url: 'https://drive.zoyidjon.me',
		locale: 'uz_UZ',
		images: 'https://media.graphassets.com/MZeDZ6H8TbqoBaVufEge',
		countryName: 'Uzbekistan',
		siteName: 'Zoyidjon',
		emails: 'info@zoyidjon.me',
	},
	keywords: "Google Drive, Google drive web, Google drive clone, Google drive web application, samar badriddinov"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}