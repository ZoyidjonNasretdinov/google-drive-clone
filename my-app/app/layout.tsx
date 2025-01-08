import {
  ClerkProvider
} from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='google-drive'
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}