import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Gradient } from "@/components/ui/gradient";

export const runtime = 'edge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Units',
  description: 'For converting between units.',
  applicationName: 'Units',
  authors: [{ name: 'Ranulph', url: 'https://ranulph.run' }],
  keywords: "Units, unit converter, unit convertor, unit conversion, currency converter, currency conversion",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#1A1A1A" }, { media: "(prefers-color-scheme: light)", color: "#FAFAFA" }],
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    height: 'device-height',
    interactiveWidget: 'resizes-visual',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    viewportFit: 'cover'
  },
  manifest: "https://units.run/site.webmanifest",
  icons: [{ rel: "icon", url: "https://units.run/android/android-launchericon-512-512.png" }, { rel: "apple-touch-icon", url: "https://units.run/ios/512.png" }],
  openGraph: {
    type: "website",
    url: "https://units.run",
    title: "Units",
    description: "For converting between units.",
    siteName: "Units",
  },
  appleWebApp: { capable: true, title: "Units", statusBarStyle: "black-translucent" }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Toaster />
          </ThemeProvider>
          <Gradient className="top-[-500px] opacity-[0.15] w-[1000px] h-[800px] pointer-events-none" />
        </body> 
      </html>
    </>
  )
}