import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ['latin'] })
import 'tailwindcss/tailwind.css';

export const metadata = {
  title: "Constanza's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
        />
        {children}</body>
    </html>
  )
}
