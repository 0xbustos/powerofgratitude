'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const impactItems = [
  { 
    emoji: "🍲", 
    title: "Comidas Entregadas", 
    count: 50000, 
    subtitle: "Nutriendo esperanzas",
    images: [
      { src: "/placeholder.svg?height=100&width=100", description: "Voluntarios preparando comidas" },
      { src: "/placeholder.svg?height=100&width=100", description: "Entrega de alimentos a familias" },
      { src: "/placeholder.svg?height=100&width=100", description: "Niños disfrutando de una comida nutritiva" },
      { src: "/placeholder.svg?height=100&width=100", description: "Cocina comunitaria en acción" }
    ]
  },
  { 
    emoji: "👕", 
    title: "Prendas Donadas", 
    count: 25000, 
    subtitle: "Vistiendo sueños",
    images: [
      { src: "/placeholder.svg?height=100&width=100", description: "Donación de ropa en centro comunitario" },
      { src: "/placeholder.svg?height=100&width=100", description: "Voluntarios clasificando prendas" },
      { src: "/placeholder.svg?height=100&width=100", description: "Familias recibiendo ropa nueva" },
      { src: "/placeholder.svg?height=100&width=100", description: "Niños con sus nuevas prendas" }
    ]
  },
  { 
    emoji: "🌱", 
    title: "Árboles Plantados", 
    count: 10000, 
    subtitle: "Cultivando futuro",
    images: [
      { src: "/placeholder.svg?height=100&width=100", description: "Voluntarios plantando árboles" },
      { src: "/placeholder.svg?height=100&width=100", description: "Área reforestada en crecimiento" },
      { src: "/placeholder.svg?height=100&width=100", description: "Niños aprendiendo sobre ecología" },
      { src: "/placeholder.svg?height=100&width=100", description: "Celebración de día de plantación" }
    ]
  },
]

export function CharityLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % impactItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + impactItems.length) % impactItems.length)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="w-full py-4 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-xl sm:text-2xl font-bold text-blue-600">
              <span className="mr-2">💪</span>Fuerza y Gratitud<span className="ml-2">🪬</span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="#impact" className="text-gray-600 hover:text-blue-600">Impacto</Link>
              <Link href="#mission" className="text-gray-600 hover:text-blue-600">Misión y Visión</Link>
              <Link href="#help" className="text-gray-600 hover:text-blue-600">Cómo Ayudar</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contacto</Link>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
          {isMenuOpen && (
            <nav className="mt-4 flex flex-col space-y-2 md:hidden">
              <Link href="#impact" className="text-gray-600 hover:text-blue-600">Impacto</Link>
              <Link href="#mission" className="text-gray-600 hover:text-blue-600">Misión y Visión</Link>
              <Link href="#help" className="text-gray-600 hover:text-blue-600">Cómo Ayudar</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contacto</Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Impact Counter and Image Gallery */}
      <section id="impact" className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center space-y-4 text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
              {impactItems[currentIndex].emoji}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-gray-800">
              {impactItems[currentIndex].count.toLocaleString()}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
              {impactItems[currentIndex].title}
            </p>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-gray-500">
              {impactItems[currentIndex].subtitle}
            </p>
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-gray-500">
              Fuerza y Gratitud: Transformando vidas con apoyo, dignidad y gratitud.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-3xl">
              {impactItems[currentIndex].images.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="p-0 w-full h-full" onClick={() => setSelectedImage(image)}>
                      <Image
                        src={image.src}
                        alt={`Evidencia de ${impactItems[currentIndex].title}`}
                        width={100}
                        height={100}
                        className="rounded-lg shadow-md cursor-pointer w-full h-full object-cover"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{impactItems[currentIndex].title}</DialogTitle>
                      <DialogDescription>{image.description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-2">
                      <Image
                        src={image.src}
                        alt={image.description}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-6 w-full sm:w-auto text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link href="#donate" className="animate-subtle-pulse">Únete a Nuestra Causa 🤗</Link>
            </Button>
            <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 text-blue-600 hover:bg-white hover:text-blue-700 shadow-md"
                onClick={prevSlide}
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 text-blue-600 hover:bg-white hover:text-blue-700 shadow-md"
                onClick={nextSlide}
                aria-label="Siguiente"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section id="mission" className="w-full py-8 md:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-800">Nuestra Misión 🎯</h2>
              <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-500">
                Empoderamos a quienes más lo necesitan, fomentando una cultura de gratitud y solidaridad.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-800">Nuestra Visión 🚀</h2>
              <p className="max-w-md text-sm sm:text-base md:text-lg text-gray-500">
                Ser una organización líder en transformación social con impacto duradero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section id="help" className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-800">¿Cómo Puedes Ayudar? 🤝</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold">Donar</h3>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                  <Link href="#donate">Donar Ahora</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold">Voluntariado</h3>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                  <Link href="#volunteer">Voluntariado</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" x2="12" y1="2" y2="15" />
                </svg>
                <h3 className="text-base sm:text-lg font-bold">Compartir</h3>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300" asChild>
                  <Link href="#share">Compartir Misión</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Navegación</h3>
              <Link className="hover:underline text-sm sm:text-base" href="#">
                Inicio
              </Link>
              <Link className="hover:underline text-sm sm:text-base" href="#donate">
                Donar
              </Link>
              <Link className="hover:underline text-sm sm:text-base" href="#contact">
                Contacto
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Contacto</h3>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm sm:text-base">info@fuerzaygratitud.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm sm:text-base">123 Calle Principal, Ciudad, País</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">Síguenos</h3>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs sm:text-sm">
            © 2023 Fuerza y Gratitud. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}