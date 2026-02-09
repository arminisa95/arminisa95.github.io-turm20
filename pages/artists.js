import Layout from '../components/Layout'
import Link from 'next/link'

export default function Artists() {
  return (
    <Layout title="Künstler - Turm 20">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 theatre-gold">
              Unsere Künstler
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Entdecken Sie die talentierten Menschen hinter unseren Veranstaltungen
            </p>
          </div>
        </section>

        {/* Artists Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artist Cards */}
              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all text-center">
                <div className="w-32 h-32 bg-theatre-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold theatre-gold">JD</span>
                </div>
                <h3 className="text-xl font-bold theatre-gold mb-2">Julia Schmidt</h3>
                <p className="text-gray-400 mb-4">Schauspielerin</p>
                <p className="text-gray-300 text-sm mb-4">
                  Julia ist seit 2020 Teil unseres Ensembles und begeistert in Romeo & Julia.
                </p>
                <Link href="/artists/julia-schmidt" className="btn-primary inline-block">
                  Profil
                </Link>
              </div>

              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all text-center">
                <div className="w-32 h-32 bg-theatre-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold theatre-gold">RM</span>
                </div>
                <h3 className="text-xl font-bold theatre-gold mb-2">Robert Meyer</h3>
                <p className="text-gray-400 mb-4">Regisseur</p>
                <p className="text-gray-300 text-sm mb-4">
                  Robert inszeniert unsere Sommertheater-Produktionen mit großer Leidenschaft.
                </p>
                <Link href="/artists/robert-meyer" className="btn-primary inline-block">
                  Profil
                </Link>
              </div>

              <div className="card rounded-lg p-6 hover:transform hover:scale-105 transition-all text-center">
                <div className="w-32 h-32 bg-theatre-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold theatre-gold">AW</span>
                </div>
                <h3 className="text-xl font-bold theatre-gold mb-2">Anna Weber</h3>
                <p className="text-gray-400 mb-4">Musikerin</p>
                <p className="text-gray-300 text-sm mb-4">
                  Anna bereichert unsere Sommerkonzerte mit ihrer beeindruckenden Stimme.
                </p>
                <Link href="/artists/anna-weber" className="btn-primary inline-block">
                  Profil
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
