import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function RomeoJulia() {
  return (
    <Layout title="Romeo & Julia - Turm 20">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/images/DSC_0820-Soldaten-scaled.jpg" 
              alt="Romeo & Julia Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 theatre-gold">
              Romeo & Julia
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Sommertheater 2026
            </p>
            <p className="text-lg text-gray-400">
              Von William Shakespeare
            </p>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-bold theatre-gold mb-2">Datum</h3>
                <p className="text-gray-300">15. Juli - 15. August 2026</p>
                <p className="text-gray-400 text-sm">Dienstags bis Sonntags</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold theatre-gold mb-2">Uhrzeit</h3>
                <p className="text-gray-300">20:00 Uhr</p>
                <p className="text-gray-400 text-sm">Einlass ab 19:00 Uhr</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold theatre-gold mb-2">Ort</h3>
                <p className="text-gray-300">Turm 20</p>
                <p className="text-gray-400 text-sm">4040 Linz</p>
              </div>
            </div>

            <div className="card rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold theatre-gold mb-6">Über die Aufführung</h2>
              <p className="text-lg text-gray-300 mb-6">
                Im Juli 2026 spielen wir an acht Abenden Shakespeares Romeo & Julia - im wildromantischen Ambiente des Turm 20 am Pöstlingberg mit unserem fantastischen, international besetzten Ensemble!
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Shakespeares klassische Liebesgeschichte erhält eine moderne Interpretation, die die zeitlosen Themen von Liebe, Hass und Schicksal in den Fokus rückt. Unter freiem Himmel entsteht eine einzigartige Atmosphäre, die das Publikum direkt ins Geschehen zieht.
              </p>
              <p className="text-lg text-gray-300">
                Die Aufführung ist für Theaterliebhaber aller Generationen geeignet und bietet unvergessliche Momente in einem der schönsten Freilichtbühnen Oberösterreichs.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 theatre-gold">
              Ensemble & Impressionen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0828-Leonata-scaled.jpg" alt="Leonata" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0830-Hero-scaled.jpg" alt="Hero" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0838-Leonata-Ursula-Hero-scaled.jpg" alt="Leonata, Ursula, Hero" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0868-Beatrice-2-scaled.jpg" alt="Beatrice" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0879-ClaudioBenedikt-scaled.jpg" alt="Claudio und Benedikt" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0883-PedroClaudioBenedikt-scaled.jpg" alt="Pedro, Claudio, Benedikt" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0907-DonJohn-scaled.jpg" alt="Don John" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0926-Hofdamen-scaled.jpg" alt="Hofdamen" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0968-Borachio-Maskenball-scaled.jpg" alt="Maskenball" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_0981-Maskenball-Hero-Leonata-Wachmann-scaled.jpg" alt="Maskenball Szene" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_1024-Margarete-Claudio-Hero-scaled.jpg" alt="Margarete, Claudio, Hero" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/DSC_1289-Leonata-scaled.jpg" alt="Leonata" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Cast Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 theatre-gold">
              Besetzung
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card rounded-lg p-6">
                <h3 className="text-xl font-bold theatre-gold mb-4">Hauptrollen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><span className="font-semibold">Romeo:</span> [Name]</li>
                  <li><span className="font-semibold">Julia:</span> [Name]</li>
                  <li><span className="font-semibold">Leonata:</span> [Name]</li>
                  <li><span className="font-semibold">Mercurio:</span> [Name]</li>
                  <li><span className="font-semibold">Benvolio:</span> [Name]</li>
                  <li><span className="font-semibold">Tybalt:</span> [Name]</li>
                </ul>
              </div>
              <div className="card rounded-lg p-6">
                <h3 className="text-xl font-bold theatre-gold mb-4">Weitere Rollen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><span className="font-semibold">Claudio:</span> [Name]</li>
                  <li><span className="font-semibold">Beatrice:</span> [Name]</li>
                  <li><span className="font-semibold">Don Pedro:</span> [Name]</li>
                  <li><span className="font-semibold">Borachio:</span> [Name]</li>
                  <li><span className="font-semibold">Dogberry:</span> [Name]</li>
                  <li><span className="font-semibold">Margarete:</span> [Name]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tickets */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 theatre-gold">
              Karten & Eintritt
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="card rounded-lg p-6">
                <h3 className="text-xl font-bold theatre-gold mb-2">Erwachsene</h3>
                <p className="text-2xl text-gray-300 mb-4">€ 25,-</p>
                <p className="text-gray-400 text-sm">Normalpreis</p>
              </div>
              <div className="card rounded-lg p-6">
                <h3 className="text-xl font-bold theatre-gold mb-2">Ermäßigt</h3>
                <p className="text-2xl text-gray-300 mb-4">€ 18,-</p>
                <p className="text-gray-400 text-sm">Studenten, Senioren</p>
              </div>
              <div className="card rounded-lg p-6">
                <h3 className="text-xl font-bold theatre-gold mb-2">Gruppen</h3>
                <p className="text-2xl text-gray-300 mb-4">€ 20,-</p>
                <p className="text-gray-400 text-sm">Ab 10 Personen</p>
              </div>
            </div>
            <div className="space-y-4">
              <Link href="/contact" className="btn-primary inline-block">
                Karten Reservieren
              </Link>
              <p className="text-gray-400 text-sm">
                Karten können auch vor Ort erworben werden (subject to availability)
              </p>
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="py-12 px-4 text-center">
          <Link href="/events" className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all inline-block mr-4">
            ← Zurück zu Veranstaltungen
          </Link>
          <Link href="/" className="btn-primary inline-block">
            Zur Startseite
          </Link>
        </section>
      </div>
    </Layout>
  )
}
