import './globals.css'

export const metadata = {
  title: 'Abdulbasit Hussain - Portfolio',
  description: 'Abdulbasit Hussain | Fullstack Developer | Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
