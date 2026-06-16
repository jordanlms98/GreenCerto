import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

interface Bookmaker {
  id: number
  name: string
  description: string
  link: string
  isPlaceholder: boolean
}

interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  rating: number
  isPlaceholder?: boolean
}

export default function Home() {
  const [bookmakers, setBookmakers] = useState<Bookmaker[]>(
    Array(5).fill(null).map((_, i) => ({
      id: i,
      name:
  i === 0
    ? 'BC Game'
    : i === 1
    ? 'Novibet'
    : i === 2
    ? 'Betway'
    : i === 3
    ? 'Betsson'
    : i === 4
    ? 'BetWinner'
    : `Casa de Apuestas ${i + 1}`,

description:
  i === 0
    ? 'BC.GAME combina apuestas deportivas, casino en línea y pagos rápidos en una plataforma moderna y confiable. Una excelente opción para quienes buscan diversión, variedad y practicidad en un solo lugar.'
    : i === 1
    ? 'Novibet reúne apuestas deportivas, casino en línea y bonos de hasta $5.000 MXN en una plataforma segura y rápida. Duplica tu primer depósito, recibe apuestas gratis y giros gratis. Todo con pagos instantáneos y soporte 24/7. Diversión, recompensas y confianza en un solo lugar.'
    : i === 2
    ? 'Betway combina apuestas deportivas, casino en línea y bonos de hasta $4.000 MXN en una plataforma confiable y ágil. Duplica tu primer depósito, disfruta de giros gratis y promociones semanales. Entretenimiento sin límites con pagos rápidos y atención al cliente 24/7.'
    : i === 3
    ? 'Betsson reúne apuestas deportivas, casino online y bonificaciones de hasta $3.000 MXN en una plataforma moderna y segura. Recibe 100% en tu primer depósito más apuestas sin riesgo. Promociones semanales, cashback y torneos con premios en efectivo. Diversión y ganancias en un solo lugar.'
    : i === 4
    ? 'Betwinner ofrece apuestas deportivas, casino en vivo y bonos de hasta $2.600 MXN con código promocional en una plataforma rápida y confiable. Duplica tu depósito, obtén giros gratis y acceso a promociones diarias. Pagos instantáneos, múltiples deportes y entretenimiento sin fin.'
    : 'Agrega aquí el nombre, resumen y enlace de tu casa afiliada.',

link:
  i === 0
    ? 'https://nobreaff.com/api/v3/offer/221?affiliate_id=67&url_id=3826'
    : i === 1
    ? 'https://oddspartners.xyz/262-14091'
    : i === 2
    ? 'https://betway.mx/bwp/casino-welcome-50/es-mx/?s=bfp49683&a=spadid219108'
    : i === 3
    ? 'https://www.betsson.mx/'
    : i === 4
    ? 'https://bwredir.com/2XB6?p=%2Fregistration%2F'
    : '#',

isPlaceholder: false,
    }))
  )

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingLink, setEditingLink] = useState('')
  const [testimonialStart, setTestimonialStart] = useState(0)
  const testimonials: Testimonial[] = [
    { id: 1, name: 'Gabriela Ponce.', location: 'Ciudad de México', text: 'Muy buena guía para encontrar casas confiables.', rating: 5 },
    { id: 2, name: 'Juan P.', location: 'Guadalajara', text: 'Este sitio me ayudó muchísimo a encontrar la casa de apuestas perfecta para mí. Las comparativas son claras, los bonos están bien explicados y no me dejé engañar por falsas promesas. Gracias por la información confiable. ¡Muy recomendado!', rating: 5 },
    { id: 3, name: 'Claudia Oropeza Bernal.', location: 'Monterrey', text: 'BC.GAME es simplemente la mejor. Combinan apuestas deportivas, casino y pagos rápidos en una sola plataforma. El diseño es moderno, la seguridad es impecable y los bonos son realmente generosos. He probado varias casas y esta es la que más me gusta. ¡Definitivamente mi favorita!', rating: 5 },
    { id: 4, name: 'Roberto L.', location: 'Tijuana', text: 'El sitio tiene buena información sobre las diferentes casas de apuestas. Me permitió comparar opciones y elegir la que mejor se adaptaba a mis necesidades. Podrían mejorar con más actualizaciones, pero en general muy útil.', rating: 5 },
    { id: 5, name: 'Alan Adair.', location: 'Veracruz', text: 'Novibet me sorprendió gratamente. El bono de hasta $5.000 MXN fue increíble, y lo mejor es que el Pago Anticipado me permitió asegurar ganancias en varios partidos. La app móvil es muy rápida y el soporte 24/7 siempre está disponible.', rating: 5 },
    { id: 6, name: 'Debanhi Dayara O.', location: 'Puebla', text: 'Finalmente encontré un sitio que realmente ayuda a elegir una buena casa de apuestas sin ser engañada. Las guías son claras, los bonos están explicados correctamente y la información es actualizada. ¡Gracias por existir!', rating: 5, isPlaceholder: true },
  ]
useEffect(() => {
  const interval = setInterval(() => {
    setTestimonialStart(prev => (prev + 1) % testimonials.length)
  }, 3000)

  return () => clearInterval(interval)
}, [testimonials.length])
  
  const openEditDialog = (id: number, currentLink: string) => {
    setEditingId(id)
    setEditingLink(currentLink)
  }

  const saveLink = () => {
    if (editingId !== null && editingLink) {
      setBookmakers(prev =>
        prev.map(b => (b.id === editingId ? { ...b, link: editingLink } : b))
      )
      setEditingId(null)
      setEditingLink('')
    }
  }

  return (
    <div className="gc-page">
      <style>{`
        .gc-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f172a 0%, #17233a 55%, #0f172a 100%);
          color: #ffffff;
          font-family: Inter, Arial, sans-serif;
          overflow-x: hidden;
        }
@media (max-width: 600px) {
  .gc-container {
    width: 100%;
    padding: 0 16px;
    overflow: hidden;
  }

  .gc-orbit-wrap {
    width: 300px;
    height: 300px;
    margin: 30px auto 45px;
  }

  .gc-orbit-center {
    width: 115px;
    height: 115px;
  }

  .gc-orbit-center img {
    width: 90px;
  }

  .gc-orbit-item {
    width: 82px;
    height: 46px;
    padding: 8px;
  }

  .item-1 {
    top: -23px;
  }

  .item-2 {
    right: -41px;
  }

  .item-3 {
    right: 5px;
    bottom: 5px;
  }

  .item-4 {
    left: 5px;
    bottom: 5px;
  }

  .item-5 {
    left: -41px;
  }
}

.orbit-dot {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 14px rgba(34, 197, 94, 0.9);
}

.dot-1 {
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dot-2 {
  top: 20%;
  left: 86%;
  transform: translate(-50%, -50%);
}

.dot-3 {
  top: 70%;
  left: 86%;
  transform: translate(-50%, -50%);
}

.dot-4 {
  top: 70%;
  left: 14%;
  transform: translate(-50%, -50%);
}

.dot-5 {
  top: 20%;
  left: 14%;
  transform: translate(-50%, -50%);
}

        .gc-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .gc-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          backdrop-filter: blur(10px);
        }

        .gc-nav-inner {
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gc-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 800;
        }

        .gc-logo-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #00c853, #006341);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .gc-menu {
          display: flex;
          gap: 28px;
        }

        .gc-menu a {
          color: #00c853;
          text-decoration: none;
          font-weight: 700;
        }

        .gc-menu a:hover {
          color: #00c853;
        }

        .gc-hero {
          padding: 100px 0 80px;
          text-align: center;
        }

        .gc-badge {
          display: inline-block;
          margin-bottom: 22px;
          padding: 8px 16px;
          border-radius: 999px;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.45);
          font-size: 14px;
          font-weight: 700;
        }

        .gc-title {
          max-width: 850px;
          margin: 0 auto 24px;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .gc-title span {
          color: #00c853;
        }

        .gc-subtitle {
          max-width: 760px;
          margin: 0 auto 34px;
          color: #cbd5e1;
          font-size: 21px;
          line-height: 1.6;
        }

        .gc-button {
          border: none;
          cursor: pointer;
          border-radius: 12px;
          padding: 14px 28px;
          background: #00c853;
          color: #06120b;
          font-size: 16px;
          font-weight: 800;
          text-decoration: none;
          display: inline-block;
        }

        .gc-button:hover {
          background: #22c55e;
        }

        .gc-section {
          padding: 70px 0;
        }

        .gc-section-title {
          text-align: center;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .gc-section-desc {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 42px;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.6;
        }

        .gc-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .gc-card {
          background: rgba(30, 41, 59, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .gc-card:hover {
          border-color: rgba(34, 197, 94, 0.55);
          transform: translateY(-2px);
          transition: 0.2s;
        }

        .gc-card-logo {
          height: 130px;
          background: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 20px;
          font-weight: 900;
        }

        .gc-card-body {
          padding: 18px;
        }

        .gc-card h3 {
          font-size: 18px;
          margin-bottom: 8px;
        }

        .gc-card p {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.45;
          min-height: 44px;
          margin-bottom: 16px;
        }

        .gc-card-actions {
          display: flex;
          gap: 8px;
        }

        .gc-visit {
          flex: 1;
          text-align: center;
          background: #00c853;
          color: #06120b;
          border-radius: 10px;
          padding: 10px;
          font-weight: 800;
          text-decoration: none;
        }

        .gc-edit {
          border: 1px solid #64748b;
          background: transparent;
          color: #cbd5e1;
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
        }

        .gc-tip {
          margin-top: 28px;
          padding: 16px 18px;
          border-radius: 14px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.35);
          color: #4ade80;
        }

        .gc-testimonials {
          background: rgba(15, 23, 42, 0.35);
        }

        .gc-test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .gc-test-card {
          background: rgba(51, 65, 85, 0.85);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 18px;
          padding: 22px;
        }

        .gc-test-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .gc-test-name {
          font-weight: 800;
          font-size: 17px;
        }

        .gc-test-location {
          color: #cbd5e1;
          font-size: 14px;
          margin-top: 4px;
        }

        .gc-stars {
          display: flex;
          gap: 2px;
          color: #facc15;
        }

        .gc-image-space {
          height: 90px;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .gc-quote {
          color: #e2e8f0;
          font-style: italic;
          line-height: 1.5;
        }

        .gc-footer {
          background: #0f172a;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
          padding: 46px 0;
        }

        .gc-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 32px;
        }

        .gc-footer h3, .gc-footer h4 {
          margin-bottom: 14px;
        }

        .gc-footer p, .gc-footer a {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.7;
          text-decoration: none;
        }

        .gc-footer ul {
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .gc-copy {
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid rgba(148, 163, 184, 0.18);
          text-align: center;
          color: #94a3b8;
          font-size: 14px;
        }

        .gc-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 100;
        }

        .gc-modal-box {
          width: min(460px, 100%);
          background: #1e293b;
          border: 1px solid #475569;
          border-radius: 18px;
          padding: 24px;
        }

        .gc-modal-box input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #64748b;
          background: #334155;
          color: white;
          margin: 14px 0;
        }

        .gc-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .gc-cancel {
          padding: 10px 16px;
          border-radius: 10px;
          border: 1px solid #64748b;
          background: transparent;
          color: #cbd5e1;
          cursor: pointer;
        }
        .gc-orbit-wrap {
  position: relative;
  width: 420px;
  height: 420px;
  margin: 35px auto 55px;
}

.gc-orbit-center {
  position: absolute;
  width: 150px;
  height: 150px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border: 1px solid rgba(34, 197, 94, 0.45);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
}

.gc-orbit-center img {
  width: 140px;
  height: auto;
  object-fit: contain;
}

.gc-orbit-ring {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 50%;
  animation: gcOrbitRotate 22s linear infinite;
}

.gc-orbit-item {
  position: absolute;
  width: 112px;
  height: 58px;
  background: #334155;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.18);
}

.gc-orbit-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-1 {
  top: -29px;
  left: 50%;
  transform: translateX(-50%);
}

.item-2 {
  right: -56px;
  top: 30%;
}

.item-3 {
  right: 18px;
  bottom: 18px;
}

.item-4 {
  left: 18px;
  bottom: 18px;
}

.item-5 {
  left: -56px;
  top: 30%;
}

@keyframes gcOrbitRotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

        @media (max-width: 1100px) {
          .gc-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 800px) {
          .gc-menu {
            display: none;
          }

          .gc-hero {
            padding: 70px 0 50px;
          }

          .gc-grid,
          .gc-test-grid,
          .gc-footer-grid {
            grid-template-columns: 1fr;
          }

          .gc-title {
            font-size: 42px;
          }

          .gc-subtitle {
            font-size: 17px;
          }
        }
      `}</style>

      <nav className="gc-nav">
        <div className="gc-container gc-nav-inner">
          <div className="gc-logo">
  <img
    src="/logo1.png"
    alt="Green Certo"
    style={{
      height: '70px',
      width: 'auto'
    }}
  />
</div>
          <div className="gc-menu">
            <a href="#casas">Casas de Apuestas</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <section id="casas" className="gc-section">
        <div className="gc-container">
          <h2 className="gc-section-title">Encuentra tu Próxima Plataforma Favorita</h2>
          <p className="gc-section-desc">
            Nuestro objetivo es ayudarte a encontrar plataformas confiables y populares, facilitando el acceso a información clara y organizada en un solo lugar.
          </p>
          <div className="gc-orbit-wrap">
  <div className="gc-orbit-center">
    <img src="/logo1.png" alt="Green Certo" />
  </div>

  <div className="gc-orbit-ring">

    <span className="orbit-dot dot-1"></span>
  <span className="orbit-dot dot-2"></span>
  <span className="orbit-dot dot-3"></span>
  <span className="orbit-dot dot-4"></span>
  <span className="orbit-dot dot-5"></span>
    
    <div className="gc-orbit-item item-1">
      <img src="/bcgame3.png" alt="BC Game" />
    </div>

    <div className="gc-orbit-item item-2">
      <img src="/novibet.png" alt="Novibet" />
    </div>

    <div className="gc-orbit-item item-3">
      <img src="/betway.png" alt="Betway" />
    </div>

<div className="gc-orbit-item item-4">
  <img
    src="/betwinner1.png"
    alt="BetWinner"
    className="betwinner-logo"
  />
</div>
   {/* 
    <div className="gc-orbit-item item-5">
      <img src="/betsson.png" alt="Betsson" />
    </div>
    */}
  </div>
</div>

          <div className="gc-grid">
  {bookmakers
  .filter(bookie => bookie.id !== 3)
  .map(bookie => (
    <div key={bookie.id} className="gc-card">
      <div className="gc-card-logo">
        {bookie.id === 0 ? (
  <img
    src="/bcgame3.png"
    alt="BC Game"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    }}
  />
) : bookie.id === 1 ? (
  <img
    src="/novibet.png"
    alt="Novibet"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    }}
  />
      ) : bookie.id === 2 ? (
    <img
      src="/betway.png"
      alt="Betway"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '12px',
      }}
    />
  ) : bookie.id === 3 ? (
    <img
      src="/betsson.png"
      alt="Betsson"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '12px',
      }}
    />
  ) : bookie.id === 4 ? (
    <img
      src="/betwinner1.png"
      alt="BetWinner"
      style={{
        width: '300%',
        height: '150%',
        objectFit: 'contain',
      }}
    />
) : (
  bookie.name.substring(0, 2).toUpperCase()
)}
      </div>

      <div className="gc-card-body">
        <h3>{bookie.name}</h3>
        <p>{bookie.description}</p>

        {bookie.isPlaceholder ? (
          <button
            className="gc-visit"
            onClick={() => openEditDialog(bookie.id, bookie.link)}
          >
            Editar
          </button>
        ) : (
          <div className="gc-card-actions">
            <a
              className="gc-visit"
              href={bookie.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

          <div className="gc-tip">
            💡 Explora las mejores casas de apuestas disponibles para México y encuentra la plataforma ideal para tus preferencias.
          </div>
        </div>
      </section>

      <section id="testimonios" className="gc-section gc-testimonials">
        <div className="gc-container">
          <h2 className="gc-section-title">Lo que Dicen Nuestros Usuarios</h2>
          <p className="gc-section-desc">
            Opiniones y experiencias compartidas por jugadores que han utilizado las plataformas disponibles en nuestro sitio.
          </p>

          <div className="gc-test-grid">
  {[...testimonials, ...testimonials]
    .slice(testimonialStart, testimonialStart + 3)
    .map((testimonial, index) => (
      <div key={`${testimonial.id}-${index}`} className="gc-test-card">
                <div className="gc-test-head">
                  <div>
                    <div className="gc-test-name">{testimonial.name}</div>
                    <div className="gc-test-location">{testimonial.location}</div>
                  </div>
                  <div className="gc-stars">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="gc-quote">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="gc-tip">
            📸 Dica: você pode substituir esses depoimentos por prints reais, avaliações ou mensagens de usuários.
          </div>
        </div>
      </section>

      <section className="gc-section">
        <div className="gc-container" style={{ textAlign: 'center' }}>
          <h2 className="gc-section-title">¿Listo para Explorar?</h2>
          <p className="gc-section-desc">
            Compara las casas recomendadas, revisa los detalles y elige la plataforma que mejor se adapta a tu perfil.
          </p>
          <a className="gc-button" href="#casas">Ver Casas de Apuestas</a>
        </div>
      </section>

      <section id="terminos" className="gc-section">
  <div className="gc-container">
    <h2 className="gc-section-title">Términos de Uso</h2>
    <p className="gc-section-desc">
      Green Certo es una guía informativa sobre plataformas de apuestas deportivas y casino online. No operamos juegos, no aceptamos depósitos y no procesamos pagos. El uso de cualquier plataforma externa es responsabilidad del usuario.
    </p>
  </div>
</section>

<section id="privacidad" className="gc-section">
  <div className="gc-container">
    <h2 className="gc-section-title">Política de Privacidad</h2>
    <p className="gc-section-desc">
      No recopilamos información sensible ni datos bancarios de los usuarios. Podemos utilizar enlaces externos o de afiliado para redirigir a plataformas de terceros. Recomendamos revisar las políticas de privacidad de cada sitio antes de registrarse.
    </p>
  </div>
</section>

<section id="contacto-info" className="gc-section">
  <div className="gc-container">
    <h2 className="gc-section-title">Contacto</h2>
    <p className="gc-section-desc">
      Para dudas, sugerencias o solicitudes relacionadas con Green Certo, puedes contactarnos a través de nuestro canal oficial de atención.
    </p>
  </div>
</section>

      <footer id="contacto" className="gc-footer">
        <div className="gc-container">
          <div className="gc-footer-grid">
            <div>
              <h3>Green Certo</h3>
              <p>
                Tu guía de confianza para encontrar casas de apuestas y casinos online enfocados en el mercado mexicano.
              </p>
            </div>
            <div>
              <h4>Casas</h4>
              <ul>
                <li><a href="#casas">Ver todas</a></li>
              </ul>
            </div>
            <div>
              <h4>Recursos</h4>
              <ul>
                <li><a href="#">Guías</a></li>
                <li><a href="#testimonios">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#terminos">Términos</a></li>
                <li><a href="#privacidad">Privacidad</a></li>
                <li><a href="#contacto-info">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="gc-copy">
            © 2026 Green Certo. Todos los derechos reservados. Juega responsablemente. +18
          </div>
        </div>
      </footer>

      {editingId !== null && (
        <div className="gc-modal">
          <div className="gc-modal-box">
            <h3>Editar Link</h3>
            <p>Ingresa el enlace de afiliado para esta casa de apuestas.</p>

            <input
              type="url"
              placeholder="https://ejemplo.com?ref=tucodigo"
              value={editingLink}
              onChange={e => setEditingLink(e.target.value)}
            />

            <div className="gc-modal-actions">
              <button className="gc-cancel" onClick={() => setEditingId(null)}>Cancelar</button>
              <button className="gc-button" onClick={saveLink}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
