import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="theatre-gold">Turm 20</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Theater & Kulturverein Linz
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Genießen Sie mit uns das Theater & die Sommerkonzerte im malerischen Ambiente des Turm 20 in Linz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary inline-block text-center">
              Aktuelle Veranstaltungen
            </Link>
            <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all inline-block text-center">
              Kontaktieren Sie Uns
            </Link>
          </div>
        </div>
      </section>

      {/* Current Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 theatre-gold">
            Aktuelle Veranstaltungen
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Romeo & Julia</h3>
                <p className="text-gray-400 mb-4">Sommertheater 2026</p>
              </div>
              <p className="text-gray-300 mb-6">
                Shakespeares klassische Liebesgeschichte in moderner Inszenierung unter freiem Himmel.
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <p>📅 15. Juli - 15. August 2026</p>
                <p>🕗 20:00 Uhr</p>
                <p>📍 Turm 20, Linz</p>
              </div>
              <Link href="/events/romeo-julia" className="btn-primary inline-block w-full text-center">
                Mehr Informationen
              </Link>
            </div>

            {/* Event Card 2 */}
            <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Sommerkonzerte</h3>
                <p className="text-gray-400 mb-4">Musik im Sommer</p>
              </div>
              <p className="text-gray-300 mb-6">
                Genießen Sie sommerliche Klänge von lokalen und internationalen Künstlern.
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <p>📅 Jeden Samstag im Juli</p>
                <p>🕗 19:00 Uhr</p>
                <p>📍 Turm 20, Linz</p>
              </div>
              <Link href="/events/concerts" className="btn-primary inline-block w-full text-center">
                Konzertprogramm
              </Link>
            </div>

            {/* Event Card 3 */}
            <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold theatre-gold mb-2">Lesereihe</h3>
                <p className="text-gray-400 mb-4">Literarische Abende</p>
              </div>
              <p className="text-gray-300 mb-6">
                Entdecken Sie neue Stimmen und klassische Werke in unserer intimen Lesereihe.
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <p>📅 Erster Freitag im Monat</p>
                <p>🕗 19:30 Uhr</p>
                <p>📍 Turm 20, Linz</p>
              </div>
              <Link href="/events/readings" className="btn-primary inline-block w-full text-center">
                Termine & Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 theatre-gold">
            Über Turm 20
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Das Turm 20 ist mehr als nur ein Theater – es ist ein kultureller Treffpunkt im Herzen von Linz. 
            Seit 2019 bieten wir ein Programm aus Theater, Musik und Literatur, das Besucher aus ganz Oberösterreich anzieht.
          </p>
          <Link href="/about" className="btn-primary inline-block">
            Mehr Über Uns Erfahren
          </Link>
        </div>
      </section>
    </Layout>
  )
}
