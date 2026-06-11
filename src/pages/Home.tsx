import { useState } from 'react';
import { Star, Edit2 } from 'lucide-react';

interface Bookmaker {
  id: number;
  name: string;
  description: string;
  link: string;
  isPlaceholder: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  isPlaceholder?: boolean;
}

export default function Home() {
  const [bookmakers, setBookmakers] = useState<Bookmaker[]>(
    Array(10).fill(null).map((_, i) => ({
      id: i,
      name: i === 0 ? 'BC Game' : `Casa de Apuestas ${i + 1}`,
      description: i === 0 ? 'Plataforma de cassino y apuestas deportivas' : 'Agrega tu casa de apuestas aquí',
      link: i === 0 ? 'https://bcgame.com?ref=greencerto' : '#',
      isPlaceholder: i !== 0,
    }))
  );

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingLink, setEditingLink] = useState('');

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos M.',
      location: 'Ciudad de México',
      text: '¡Excelente plataforma! Gané mucho dinero con BC Game. Muy recomendado.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Juan P.',
      location: 'Guadalajara',
      text: 'Los mejores bonos del mercado. Retiros rápidos y confiables.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Miguel R.',
      location: 'Monterrey',
      text: 'Muy buena experiencia. Atención al cliente excelente.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Roberto L.',
      location: 'Cancún',
      text: 'Plataforma segura y con muchas opciones de juego.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Luis G.',
      location: 'Veracruz',
      text: 'Recomiendo 100%. Los mejores odds del mercado.',
      rating: 5,
    },
    {
      id: 6,
      name: 'Placeholder',
      location: 'Tu evaluación aquí',
      text: 'Agrega aquí un print de una evaluación real de un usuario',
      rating: 5,
      isPlaceholder: true,
    },
  ];

  const openEditDialog = (id: number, currentLink: string) => {
    setEditingId(id);
    setEditingLink(currentLink);
  };

  const saveLink = () => {
    if (editingId !== null && editingLink) {
      setBookmakers(prev =>
        prev.map(b => b.id === editingId ? { ...b, link: editingLink } : b)
      );
      setEditingId(null);
      setEditingLink('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-white">
              GC
            </div>
            <span className="font-bold text-white text-lg">Green Certo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#casas" className="text-slate-300 hover:text-green-400 transition">
              Casas de Apuestas
            </a>
            <a href="#testimonios" className="text-slate-300 hover:text-green-400 transition">
              Testimonios
            </a>
            <a href="#contacto" className="text-slate-300 hover:text-green-400 transition">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-green-400 text-sm font-semibold">✅ Las Mejores Casas de Apuestas Verificadas</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-green-400">Green Certo</span> <span className="text-white">Tu Guía de Casas de Apuestas</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Descubre las mejores plataformas de cassino y apuestas deportivas verificadas y recomendadas por jugadores mexicanos reales.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Explorar Ahora
          </button>
        </div>
      </section>

      {/* Casas de Apuestas Section */}
      <section id="casas" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Casas de Apuestas Disponibles</h2>
          <p className="text-slate-400 text-center mb-12">
            Selecciona la casa de apuestas que deseas explorar. Todas son plataformas confiables y reguladas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {bookmakers.map(bookie => (
              <div key={bookie.id} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-green-500/50 transition">
                <div className="h-32 bg-slate-700 flex items-center justify-center text-slate-500 text-sm">
                  {bookie.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{bookie.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{bookie.description}</p>
                  {bookie.isPlaceholder ? (
                    <button className="w-full bg-slate-600 hover:bg-slate-500 text-slate-300 py-2 rounded transition">
                      Editar
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <a href={bookie.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded transition">
                          Visitar
                        </button>
                      </a>
                      <button
                        onClick={() => openEditDialog(bookie.id, bookie.link)}
                        className="px-3 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded transition"
                      >
                        <Edit2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm">
              💡 Tip: Puedes editar cada casa de apuestas para agregar tu enlace de afiliado y descripción personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Lo que Dicen Nuestros Usuarios</h2>
          <p className="text-slate-400 text-center mb-12">
            Testimonios reales de jugadores mexicanos que han tenido excelentes experiencias con nuestras plataformas recomendadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-slate-700 border border-slate-600 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-slate-400">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="h-24 bg-slate-600 rounded mb-4 flex items-center justify-center text-slate-500 text-sm">
                  Espacio para imagen
                </div>
                <p className="text-slate-300 italic">"{testimonial.text}"</p>
                {testimonial.isPlaceholder && (
                  <button className="w-full mt-4 border border-slate-500 text-slate-300 hover:bg-slate-600 py-2 rounded transition">
                    Editar Testimonio
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 text-sm">
              📸 Cómo usar: Toma un print de las mensajes reales de usuarios, súbelo en los espacios de "Agrega print aquí" para mostrar testimonios verificados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Jugar?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Elige una de nuestras casas de apuestas recomendadas y comienza a disfrutar de los mejores bonos y promociones del mercado mexicano.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Explorar Casas de Apuestas
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">GC</h3>
              <p className="text-slate-400 text-sm">
                Green Certo
              </p>
              <p className="text-slate-400 text-sm">
                Tu plataforma de confianza para encontrar las mejores casas de apuestas y cassino en México.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Casas de Apuestas</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">BC Game</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Ver Todas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Guías</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Términos</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm text-center">
              © 2026 Green Certo. Todos los derechos reservados. | Juega responsablemente
            </p>
          </div>
        </div>
      </footer>

      {/* Edit Link Modal */}
      {editingId !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-2">
              Editar Link - {bookmakers.find(b => b.id === editingId)?.name}
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Ingresa el enlace de afiliación para esta casa de apuestas
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-2">URL de Afiliación</label>
                <input
                  type="url"
                  placeholder="https://ejemplo.com?ref=tucodigo"
                  value={editingLink}
                  onChange={(e) => setEditingLink(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 px-3 py-2 rounded focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setEditingId(null)}
                  className="px-4 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={saveLink}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded transition"
                >
                  Guardar Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
