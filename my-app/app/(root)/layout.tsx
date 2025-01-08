import Navbar from "@/components/shared/navbar"
import { Sidebar } from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar/>
        <main className="flex items-center justify-center w-full h-[90vh]  relative">
          {children}
        </main>
      </body>
    </html>
  )
}