/**
 * Pagina de inicio publica.
 * Optimizacion: reduce animaciones si el usuario prefiere menos movimiento y usa lazy loading en la ilustracion.
 */

import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { GalaxyComponent } from '@r0rri/react-galaxy-bg'
import headerImg from '../../img/header-img.svg'
import { FiArrowDown, FiCode, FiUsers, FiZap, FiStar } from 'react-icons/fi'

const Home = () => {
  const prefersReducedMotion = useReducedMotion()
  const allowMotion = !prefersReducedMotion

  // ------------------------------
  // EFECTO DE TEXTO DINÁMICO
  // ------------------------------
  const frases = [
    "Si puedes imaginarlo, puedes programarlo",
    "Innovación que impulsa tu futuro",
    "Tecnología al servicio de tus ideas"
  ]

  const [texto, setTexto] = useState("")
  const [indexFrase, setIndexFrase] = useState(0)
  const [pos, setPos] = useState(0)

  useEffect(() => {
    const current = frases[indexFrase]

    if (pos < current.length) {
      const timer = setTimeout(() => {
        setTexto((prev) => prev + current[pos])
        setPos(pos + 1)
      }, 60)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setTexto("")
        setPos(0)
        setIndexFrase((i) => (i + 1) % frases.length)
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [pos, indexFrase])

  // ------------------------------

  return (
    <div className="min-h-screen bg-transparent relative">

      {/* Galaxy Background */}
      <GalaxyComponent
        starCount1={800}
        starCount2={250}
        starCount3={120}
        enableShootingStars={true}
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative min-h-[90vh] flex items-center z-10"
      >
        <div className="grid max-w-7xl mx-auto items-center gap-12 py-16 px-6 md:px-12 lg:px-20 lg:grid-cols-2">

          {/* Contenido izquierdo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">

              {/* H1 con TEXTO DINÁMICO */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold leading-[1.15] tracking-tight text-base-content sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]"
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  {texto || "\u00A0"}
                </span>
              </motion.h1>



              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
              >
                Equipo especializado en desarrollo web, aplicaciones móviles y consultoría tecnológica.
                Convertimos tus ideas en productos digitales excepcionales.
              </motion.p>
            </div>

            {/* Botones */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/proyectos"
                className="btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200"
              >
                <FiCode />
                Ver Proyectos
              </Link>
              <Link
                to="/programadores"
                className="btn btn-lg glass px-8 border-white/20 text-white hover:scale-105 transition-all duration-200"
              >
                <FiUsers />
                Nuestro Equipo
              </Link>
            </motion.div>

            {/* Métricas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-8 pt-4 text-white"
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-white/70">Proyectos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm text-white/70">Clientes</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FiStar className="text-yellow-400 fill-yellow-400 text-3xl" />
                  <div className="text-3xl font-bold text-yellow-400">5.0</div>
                </div>
                <div className="text-sm text-white/70">Valoración</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Ilustración derecha con animaciones */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-full">

              {/* Imagen principal animada */}
              <motion.div
                animate={allowMotion ? { y: [0, -20, 0], rotate: [0, 5, 0] } : undefined}
                transition={allowMotion ? { duration: 6, repeat: Infinity, ease: 'easeInOut' } : undefined}
                className="relative z-10 flex h-full items-center justify-center"
              >
                <img
                  src={headerImg}
                  alt="Developer Illustration"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full max-w-2xl drop-shadow-2xl"
                />
              </motion.div>

              {/* BURBUJAS ANIMADAS — NO QUITADAS */}

              <motion.div
                animate={allowMotion ? { y: [0, -30, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] } : undefined}
                transition={allowMotion ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : undefined}
                className="absolute left-4 top-12 h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 opacity-60 shadow-2xl"
                style={{ transform: 'perspective(1000px) rotateX(20deg)' }}
              ></motion.div>

              <motion.div
                animate={allowMotion ? { y: [0, 40, 0], rotate: [0, -90, -180], scale: [1, 0.9, 1] } : undefined}
                transition={allowMotion ? { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 } : undefined}
                className="absolute right-8 top-20 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-60 shadow-2xl"
              ></motion.div>

              <motion.div
                animate={allowMotion ? { y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 45, 0] } : undefined}
                transition={allowMotion ? { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } : undefined}
                className="absolute bottom-28 left-12 h-14 w-28 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-500 opacity-50 shadow-2xl"
              ></motion.div>

              <motion.div
                animate={allowMotion ? { y: [0, 35, 0], rotate: [0, -180, -360] } : undefined}
                transition={allowMotion ? { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 } : undefined}
                className="absolute bottom-20 right-12 h-24 w-24 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 opacity-55 shadow-2xl"
                style={{ transform: 'perspective(1000px) rotateY(30deg)' }}
              ></motion.div>

              <motion.div
                animate={allowMotion ? { y: [0, -20, 0], scale: [1, 1.2, 1] } : undefined}
                transition={allowMotion ? { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } : undefined}
                className="absolute left-1/2 top-1/3 h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 opacity-45 shadow-xl"
              ></motion.div>

              <motion.div
                animate={allowMotion ? { y: [0, 30, 0], x: [0, -20, 0] } : undefined}
                transition={allowMotion ? { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 } : undefined}
                className="absolute right-1/4 bottom-1/3 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-400 to-rose-600 opacity-50 shadow-2xl"
              ></motion.div>

            </div>
          </motion.div>





        </div>

        {/* Indicador scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <a href="#about" className="flex flex-col items-center gap-2 hover:text-white transition-colors">
            <span className="text-sm">Conocer más</span>
            <motion.div
              animate={allowMotion ? { y: [0, 8, 0] } : undefined}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowDown className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="px-6 py-32 md:px-12 lg:px-20 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >

            {/* Title */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center gap-3 transition-all duration-300"
              >
                <FiStar className="text-primary text-2xl drop-shadow-lg" />
                <span className="text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">Sobre Nosotros</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold md:text-5xl lg:text-6xl text-base-content drop-shadow-2xl"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
              >
                Conoce a{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                  LEXISWARE
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-base-content md:text-2xl max-w-3xl mx-auto font-medium"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              Somos un equipo de desarrolladores apasionados que combinan creatividad,
              experiencia técnica y las últimas tecnologías para crear productos digitales
              que impulsan el crecimiento de tu negocio.
            </motion.p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-12 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.08, y: -12 }}
                className="p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-2xl transition-all"
                  >
                    <FiCode className="text-5xl text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-base-content" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Desarrollo Web</h3>
                  <p className="text-base-content leading-relaxed font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.08, y: -12 }}
                className="p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary via-accent to-secondary flex items-center justify-center shadow-2xl transition-all"
                  >
                    <FiUsers className="text-5xl text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-base-content" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Equipo Experto</h3>
                  <p className="text-base-content leading-relaxed font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Desarrolladores full-stack con experiencia en múltiples tecnologías
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.08, y: -12 }}
                className="p-8 transition-all duration-500 rounded-[3rem] bg-base-100 border border-base-content/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl transition-all"
                  >
                    <FiZap className="text-5xl text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-base-content" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Entrega Rápida</h3>
                  <p className="text-base-content leading-relaxed font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    Metodologías ágiles para entregas rápidas sin comprometer la calidad
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link
                to="/asesoria"
                className="btn btn-lg px-8 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-xl hover:scale-105 transition-all duration-200"
              >
                Solicitar Asesoría
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
