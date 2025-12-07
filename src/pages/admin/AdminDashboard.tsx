/**
 * Dashboard del Administrador (resumen).
 * Prácticas: UX con tarjetas, acceso rápido a CRUD de programadores/horarios.
 */
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="space-y-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Programadores</div>
          <div className="stat-value">--</div>
          <div className="stat-desc">Total registrados</div>
        </div>
        <div className="stat">
          <div className="stat-title">Asesorías pendientes</div>
          <div className="stat-value">--</div>
          <div className="stat-desc">Requieren aprobación</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Gestionar programadores</h2>
            <p className="text-sm text-base-content/70">
              Crear/editar perfiles, asignar rol de programador y datos de
              contacto.
            </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="/admin/programadores">
                Abrir gestión
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Horarios de asesoría</h2>
            <p className="text-sm text-base-content/70">
              Registra la disponibilidad de cada programador para que usuarios
              agenden.
            </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary" to="/admin/horarios">
                Configurar horarios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
