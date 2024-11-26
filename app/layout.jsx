import './globals.css'


export const metadata = {
  title: 'SDB IT - Software Driven Business',
  description: 'SDB IT is a software driven business located in Uttara, Dhaka',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

