import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="Über Uns - Turm 20">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 theatre-gold">
              Über Turm 20
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ein kultureller Treffpunkt im Herzen von Linz
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Das Turm 20 ist mehr als nur ein Theater – es ist ein kultureller Treffpunkt im Herzen von Linz. 
                Seit 2019 bieten wir ein Programm aus Theater, Musik und Literatur, das Besucher aus ganz Oberösterreich anzieht.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                In unserem einzigartigen Ambiente am Fuße des Pöstlingbergs schaffen wir eine Atmosphäre, 
                in der Kunst und Kultur auf besondere Weise erlebt werden können. Unter freiem Himmel, 
                umgeben von der historischen Architektur des Turm 20, entstehen unvergessliche Momente.
              </p>

              <h2 className="text-3xl font-bold theatre-gold mb-4 mt-8">Unsere Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                Wir möchten Kultur für alle zugänglich machen und ein Ort sein, an dem sich Menschen 
                aus verschiedenen Lebensbereichen begegnen und durch Kunst inspirieren lassen.
              </p>

              <h2 className="text-3xl font-bold theatre-gold mb-4 mt-8">Das Team</h2>
              <p className="text-lg text-gray-300 mb-6">
                Unser engagiertes Team aus Künstlern, Technikern und Freiwilligen arbeitet gemeinsam 
                daran, jedes Event zu einem besonderen Erlebnis zu machen.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12 px-4 text-center">
          <Link href="/" className="btn-primary inline-block mr-4">
            Zurück zur Startseite
          </Link>
          <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all inline-block">
            Kontaktieren Sie Uns
          </Link>
        </section>
      </div>
    </Layout>
  )
}
