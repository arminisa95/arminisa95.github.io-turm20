import Layout from '../components/Layout'
import Link from 'next/link'

export default function Events() {
  return (
    <Layout title="Veranstaltungen - Turm 20">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 theatre-gold">
              Veranstaltungen
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Entdecken Sie unser vielfältiges Programm aus Theater, Musik und Literatur
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event Cards */}
              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Romeo & Julia</h3>
                <p className="text-gray-400 mb-4">Sommertheater 2026</p>
                <p className="text-gray-300 mb-4">
                  Shakespeares klassische Liebesgeschichte
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>📅 15. Juli - 15. August 2026</p>
                  <p>🕗 20:00 Uhr</p>
                </div>
                <Link href="/events/romeo-julia" className="btn-primary inline-block w-full text-center">
                  Details
                </Link>
              </div>

              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Sommerkonzerte</h3>
                <p className="text-gray-400 mb-4">Musik im Sommer</p>
                <p className="text-gray-300 mb-4">
                  Verschiedene Künstler und Genres
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>📅 Jeden Samstag im Juli</p>
                  <p>🕗 19:00 Uhr</p>
                </div>
                <Link href="/events/concerts" className="btn-primary inline-block w-full text-center">
                  Konzertprogramm
                </Link>
              </div>

              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Lesereihe</h3>
                <p className="text-gray-400 mb-4">Literarische Abende</p>
                <p className="text-gray-300 mb-4">
                  Neue Stimmen und klassische Werke
                </p>
                <div className="text-sm text-gray-400 mb-4">
                  <p>📅 Erster Freitag im Monat</p>
                  <p>🕗 19:30 Uhr</p>
                </div>
                <Link href="/events/readings" className="btn-primary inline-block w-full text-center">
                  Termine
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 px-4 text-center">
          <Link href="/" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all inline-block">
            ← Zurück zur Startseite
          </Link>
        </section>
      </div>
    </Layout>
  )
}
