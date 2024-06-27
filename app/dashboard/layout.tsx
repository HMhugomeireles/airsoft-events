import { Toaster } from "@/components/ui/sonner"
import { PropsWithChildren } from "react"
 
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}