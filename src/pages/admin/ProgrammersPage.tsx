/**
 * Gestión de programadores (Admin).
 * Prácticas: Formularios controlados, consumo Firestore, feedback DaisyUI.
 */
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { listProgrammers, upsertProgrammer } from '../../services/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../services/firebase'
import type { DocumentData } from 'firebase/firestore'

// Datos base para el formulario de alta/edición
const initialForm = {
  uid: '',
  displayName: '',
  email: '',
  specialty: '',
  bio: '',
  role: 'programmer',
  photoURL: '',
  github: '',
  instagram: '',
  whatsapp: '',
}

const ProgrammersPage = () => {
  const [form, setForm] = useState(initialForm)
  const [programmers, setProgrammers] = useState<(DocumentData & { id: string })[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState('')

  const loadProgrammers = async () => {
    const data = await listProgrammers()
    setProgrammers(data)
  }

  useEffect(() => {
    loadProgrammers()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadPhoto = async (uid: string, file: File): Promise<string> => {
    const storageRef = ref(storage, `programmers/${uid}/profile.jpg`)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    try {
      if (!form.uid || !form.displayName || !form.email) {
        setError('UID, nombre y correo son obligatorios.')
        setLoading(false)
        return
      }

      let photoURL = form.photoURL

      // Si hay una nueva foto, subirla a Firebase Storage
      if (photoFile) {
        photoURL = await uploadPhoto(form.uid, photoFile)
      }

      await upsertProgrammer(form.uid, {
        displayName: form.displayName,
        email: form.email,
        specialty: form.specialty,
        bio: form.bio,
        role: 'programmer',
        photoURL,
        socials: {
          github: form.github || undefined,
          instagram: form.instagram || undefined,
          whatsapp: form.whatsapp || undefined,
        },
      })
      setMessage('Programador guardado correctamente.')
      setForm(initialForm)
      setPhotoFile(null)
      setPhotoPreview('')
      await loadProgrammers()
    } catch (err) {
      setError('No se pudo guardar. Verifica permisos y conexión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Programadores</h1>
          <p className="text-base-content/70">
            Crea o edita perfiles y asigna el rol de programador.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-md">
          <div className="card-body space-y-3">
            <h2 className="card-title">Nuevo / editar</h2>
            {message && <div className="alert alert-success text-sm">{message}</div>}
            {error && <div className="alert alert-error text-sm">{error}</div>}
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Foto de perfil</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {photoPreview || form.photoURL ? (
                      <img src={photoPreview || form.photoURL} alt="Preview" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-base-300">
                        <span className="text-3xl">👤</span>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">UID de Firebase *</span>
              </label>
              <input
                name="uid"
                value={form.uid}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="UID del usuario autenticado"
              />
              <span className="label-text-alt text-base-content/60">
                Se crea el documento en users con este UID y rol programmer.
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre *</span>
              </label>
              <input
                name="displayName"
                value={form.displayName}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo *</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Especialidad</span>
              </label>
              <input
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                className="textarea textarea-bordered"
              />
            </div>

            <div className="divider">Redes Sociales</div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub</span>
              </label>
              <input
                name="github"
                value={form.github}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="https://github.com/usuario"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Instagram</span>
              </label>
              <input
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="https://instagram.com/usuario"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">WhatsApp</span>
              </label>
              <input
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                className="input input-bordered"
                placeholder="https://wa.me/593988888888"
              />
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar programador'}
              </button>
            </div>
          </div>
        </form>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="card-title">Listado</h2>
              <span className="badge badge-secondary">{programmers.length}</span>
            </div>
            <div className="space-y-2">
              {programmers.map((dev) => (
                <div key={dev.id} className="flex flex-col rounded-lg border border-base-200 p-3">
                  <div className="flex items-start gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        {dev.photoURL ? (
                          <img src={dev.photoURL} alt={dev.displayName} />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-base-300">
                            <span className="text-lg">👤</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{dev.displayName}</p>
                        <span className="badge badge-outline capitalize">
                          {dev.specialty || 'Especialidad'}
                        </span>
                      </div>
                      <p className="text-xs text-base-content/60">{dev.email}</p>
                      <p className="text-sm text-base-content/70">{dev.bio}</p>
                      {dev.socials && (
                        <div className="mt-2 flex gap-2">
                          {dev.socials.github && (
                            <a 
                              href={dev.socials.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="badge badge-ghost badge-sm"
                            >
                              GitHub
                            </a>
                          )}
                          {dev.socials.instagram && (
                            <a 
                              href={dev.socials.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="badge badge-ghost badge-sm"
                            >
                              Instagram
                            </a>
                          )}
                          {dev.socials.whatsapp && (
                            <a 
                              href={dev.socials.whatsapp} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="badge badge-ghost badge-sm"
                            >
                              WhatsApp
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {!programmers.length && (
                <div className="alert alert-info text-sm">
                  Aún no hay programadores. Crea uno con el formulario.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgrammersPage
