import Layout from '../components/Layout'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout title="Kontakt - Turm 20">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 theatre-gold">
              Kontakt
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold theatre-gold mb-6">Kontaktinformationen</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">
                      Turm 20 Theater & Kulturverein<br/>
                      Turm 20<br/>
                      4040 Linz, Österreich
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">E-Mail</h3>
                    <p className="text-gray-300">
                      office@turm20-linz.at
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Telefon</h3>
                    <p className="text-gray-300">
                      +43 732 123456
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Öffnungszeiten</h3>
                    <p className="text-gray-300">
                      Während Veranstaltungen<br/>
                      1 Stunde vor Vorstellungsbeginn
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold theatre-gold mb-6">Nachricht senden</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-theatre-gold"
                      placeholder="Ihr Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">E-Mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-theatre-gold"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Betreff</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-theatre-gold"
                      placeholder="Ihr Betreff"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2">Nachricht</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-theatre-gold"
                      placeholder="Ihre Nachricht..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Nachricht Senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold theatre-gold mb-6">Folgen Sie Uns</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
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
