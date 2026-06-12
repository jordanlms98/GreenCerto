import { useState } from 'react'
import { Star, Edit2 } from 'lucide-react'

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
    Array(10).fill(null).map((_, i) => ({
      id: i,
      name: i === 0 ? 'BC Game' : `Casa de Apuestas ${i + 1}`,
      description:
        i === 0
          ? 'BC.GAME combina apuestas deportivas, casino en línea y pagos rápidos en una plataforma moderna y confiable. Una excelente opción para quienes buscan diversión, variedad y practicidad en un solo lugar.'
          : 'Agrega aquí el nombre, resumen y enlace de tu casa afiliada.',
      link: i === 0 ? 'https://nobreaff.com/api/v3/offer/221?affiliate_id=67&url_id=3826' : '#',
      isPlaceholder: i !== 0,
    }))
  )

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingLink, setEditingLink] = useState('')

  const testimonials: Testimonial[] = [
    { id: 1, name: 'Carlos M.', location: 'Ciudad de México', text: 'Muy buena guía para encontrar casas confiables.', rating: 5 },
    { id: 2, name: 'Juan P.', location: 'Guadalajara', text: 'Me ayudó a comparar opciones antes de registrarme.', rating: 5 },
    { id: 3, name: 'Miguel R.', location: 'Monterrey', text: 'Diseño claro, directo y fácil de usar.', rating: 4 },
    { id: 4, name: 'Roberto L.', location: 'Cancún', text: 'Encontré plataformas que no conocía.', rating: 5 },
    { id: 5, name: 'Luis G.', location: 'Veracruz', text: 'Recomiendo revisar las casas antes de jugar.', rating: 5 },
    { id: 6, name: 'Usuario', location: 'Tu evaluación aquí', text: 'Agrega aquí un testimonio real o print de usuario.', rating: 5, isPlaceholder: true },
  ]

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
        }

        .gc-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .gc-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.96);
          border-bottom: 1px solid rgba(148, 163, 184, 0.18);
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
