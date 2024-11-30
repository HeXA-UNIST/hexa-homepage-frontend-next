import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
    title: "HeXA",
    description: "Hacker's eXiting Academy"
}

export const viewport: Viewport = {
    themeColor: "black",
}

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import "./globals.css";

import { Noto_Sans_KR } from "next/font/google";

import Header from "./_lib/components/header/Header";
import Footer from "./_lib/components/footer/Footer";

const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" className={noto_sans_kr.className}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}