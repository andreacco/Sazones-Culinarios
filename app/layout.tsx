import './globals.css'
import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google';
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitch/ThemeSwitcher";

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'],
  variable: "--primary-font"
})

export const metadata: Metadata = {
  title: 'Sazones Culinarios',
  description: 'Explora el arte culinario con nuestros cursos de cocina en línea. Aprende recetas, técnicas y secretos de chefs expertos. Domina la cocina internacional y la repostería creativa. Únete hoy a Sazones Culinarios y desata tu pasión por cocinar.',
  // description: 'Aprende con los mejores profesionales y descubre todos los secretos de la cocina. Cursos desde Paselería moderna hasta Coctelería. Únete y difruta de todos nuestros beneficios!',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${bricolage.variable} font-sans bg-sc-background dark:bg-sc-darkBackground`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
