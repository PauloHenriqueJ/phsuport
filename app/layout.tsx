import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";



export const metadata: Metadata = {
  title: "Ph infomática | Suporte ",
  description: "Manuntenção de computador, notebooks, automatização residencial",
  keywords: "manuntenção de computador, notebooks, Salvador",
  openGraph: {
    title:'ph Suporte ',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://phsuport.vercel.app/',
    images:['https://i.imgur.com/VKrVYlc.jpg']
  },
robots:{
  index: true,
  follow: true,
  nocache: true,
  googleBot:{
    index: true,
    follow: true,
    nocache: true,
    noimageindex: true,
  }
}
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body >
        <Header/>
        {children}</body>
    </html>
  );
}
