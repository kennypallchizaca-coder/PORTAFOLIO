/**
 * Página de login con Google.
 * Prácticas: Formularios (feedback de error), Auth con Firebase.
 */
import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { motion } from 'framer-motion'
import { 
  FiLock, 
  FiAlertCircle, 
  FiInfo, 
  FiArrowLeft,
  FiShield,
  FiCheckCircle
} from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

const LoginPage = () => {
  const { login, isAuthenticated, loading: authLoading, user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (!authLoading && isAuthenticated && user) {
      const from = (location.state as any)?.from?.pathname || '/'
      navigate(from, { replace: true })
    }
  }, [isAuthenticated, authLoading, user, navigate, location])

  // Mostrar loading mientras se verifica el estado de autenticación
  if (authLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-base-content/70">Verificando sesión...</p>
        </div>
      </div>
    )
  }

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    try {
      await login()
      // Después del login exitoso, AuthContext actualizará el estado
      // y el useEffect redirigirá automáticamente
    } catch (err: any) {
      console.error('Error en login:', err)
      
      let errorMessage = 'No se pudo iniciar sesión. Intenta de nuevo.'
      
      if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Cerraste la ventana. Intenta de nuevo.'
      } else if (err.code === 'auth/popup-blocked') {
        errorMessage = 'Permite ventanas emergentes en tu navegador.'
      } else if (err.code === 'auth/unauthorized-domain') {
        errorMessage = 'Dominio no autorizado. Contacta al administrador.'
      }
      
      setError(errorMessage)
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body space-y-6">
            {/* Logo y título */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-3xl text-white shadow-lg">
                <FiLock className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold">Bienvenido</h2>
              <p className="mt-2 text-base-content/70">
                Inicia sesión para acceder a tu cuenta
              </p>
            </div>

            {/* Mensaje de error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="alert alert-error"
              >
                <FiAlertCircle className="h-5 w-5 shrink-0" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            {/* Información */}
            <div className="rounded-lg bg-primary/10 p-4">
              <div className="flex items-start gap-3">
                <FiInfo className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm text-base-content/80">
                  Usa tu cuenta de Google para continuar. Tu perfil se creará automáticamente como <strong>usuario externo</strong> hasta que un administrador te asigne un rol.
                </div>
              </div>
            </div>

            {/* Botón de login */}
            <button
              className="btn btn-primary btn-lg w-full gap-3 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Conectando...
                </>
              ) : (
                <>
                  <FaGoogle className="h-5 w-5" />
                  Continuar con Google
                </>
              )}
            </button>

            {/* Enlace de regreso */}
            <div className="text-center">
              <Link
                to="/"
                className="link link-hover inline-flex items-center gap-2 text-sm text-base-content/70"
              >
                <FiArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid gap-4 text-center text-sm md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <HiLightningBolt className="h-5 w-5 text-primary" />
            </div>
            <span className="text-base-content/70">Rápido y seguro</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <FiShield className="h-5 w-5 text-secondary" />
            </div>
            <span className="text-base-content/70">Datos protegidos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
              <FiCheckCircle className="h-5 w-5 text-accent" />
            </div>
            <span className="text-base-content/70">Sin registro manual</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage
