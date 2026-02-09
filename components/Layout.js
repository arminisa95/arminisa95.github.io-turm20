import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'Turm 20 - Theater & Kulturverein Linz' }) {
  return (
    <div className="min-h-screen theatre-dark text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Das Sommertheater im Turm 20 - am Fuße des Pöstlingbergs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold theatre-gold">
              Turm 20
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/events" className="nav-link text-gray-300 hover:text-white">
                Veranstaltungen
              </Link>
              <Link href="/artists" className="nav-link text-gray-300 hover:text-white">
                Künstler
              </Link>
              <Link href="/about" className="nav-link text-gray-300 hover:text-white">
                Über Uns
              </Link>
              <Link href="/contact" className="nav-link text-gray-300 hover:text-white">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="theatre-gold text-lg font-semibold mb-2">Turm 20 Theater & Kulturverein</p>
            <p className="text-gray-400">Sommertheater am Fuße des Pöstlingbergs in Linz</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>&copy; 2024 Turm 20 Theater & Kulturverein</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
