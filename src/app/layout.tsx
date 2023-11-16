import './globals.css'
import { ReactNode } from 'react'
import { inter } from '@/components/common/fonts'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
