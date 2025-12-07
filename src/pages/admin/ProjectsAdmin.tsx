/**
 * Panel de administración de proyectos
 */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiEdit2, FiTrash2, FiGithub, FiImage, FiSave, FiX, FiUpload } from 'react-icons/fi'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, Timestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../services/firebase'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  demoUrl?: string
  technologies: string[]
  teamMembers: string[]
  createdAt: Date
}

const ProjectsAdmin = () => {
  const { user } = useAuth()
  const [projects, setProjects] = useState<Project[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    githubUrl: '',
    demoUrl: '',
    technologies: '',
    teamMembers: ''
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'))
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Project[]
      setProjects(projectsData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()))
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadImage = async (file: File): Promise<string> => {
    const timestamp = Date.now()
    const storageRef = ref(storage, `projects/${timestamp}_${file.name}`)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = formData.imageUrl

      // Si hay una nueva imagen, subirla a Firebase Storage
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const projectData = {
        title: formData.title,
        description: formData.description,
        imageUrl,
        githubUrl: formData.githubUrl,
        demoUrl: formData.demoUrl || '',
        technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
        teamMembers: formData.teamMembers.split(',').map(m => m.trim()).filter(Boolean),
        createdAt: Timestamp.now()
      }

      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), projectData)
      } else {
        await addDoc(collection(db, 'projects'), projectData)
      }

      resetForm()
      fetchProjects()
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Error al guardar el proyecto')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      githubUrl: project.githubUrl,
      demoUrl: project.demoUrl || '',
      technologies: project.technologies.join(', '),
      teamMembers: project.teamMembers.join(', ')
    })
    setEditingId(project.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este proyecto?')) return

    try {
      await deleteDoc(doc(db, 'projects', id))
      fetchProjects()
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Error al eliminar el proyecto')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      githubUrl: '',
      demoUrl: '',
      technologies: '',
      teamMembers: ''
    })
    setImageFile(null)
    setImagePreview('')
    setEditingId(null)
    setShowForm(false)
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold">Administrar Proyectos</h1>
            <p className="text-base-content/70">Gestiona los proyectos del equipo</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary gap-2"
          >
            {showForm ? (
              <>
                <FiX className="h-5 w-5" />
                Cancelar
              </>
            ) : (
              <>
                <FiPlus className="h-5 w-5" />
                Nuevo Proyecto
              </>
            )}
          </button>
        </motion.div>

        {/* Formulario */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="card bg-base-100 shadow-xl mb-8"
          >
            <div className="card-body">
              <h2 className="card-title">
                {editingId ? 'Editar Proyecto' : 'Nuevo Proyecto'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Título *</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">URL de GitHub *</span>
                    </label>
                    <div className="join w-full">
                      <span className="join-item btn btn-disabled">
                        <FiGithub className="h-5 w-5" />
                      </span>
                      <input
                        type="url"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                        className="input input-bordered join-item w-full"
                        placeholder="https://github.com/..."
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Descripción *</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="textarea textarea-bordered h-24"
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Imagen del Proyecto *</span>
                    </label>
                    <div className="space-y-2">
                      {(imagePreview || formData.imageUrl) && (
                        <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-base-300">
                          <img 
                            src={imagePreview || formData.imageUrl} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="file-input file-input-bordered w-full"
                      />
                      <div className="divider text-xs">O</div>
                      <div className="join w-full">
                        <span className="join-item btn btn-disabled">
                          <FiImage className="h-5 w-5" />
                        </span>
                        <input
                          type="url"
                          value={formData.imageUrl}
                          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                          className="input input-bordered join-item w-full"
                          placeholder="O pega una URL de imagen"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">URL Demo (opcional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.demoUrl}
                      onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                      className="input input-bordered"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tecnologías (separadas por coma) *</span>
                    </label>
                    <input
                      type="text"
                      value={formData.technologies}
                      onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                      className="input input-bordered"
                      placeholder="React, TypeScript, Firebase"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Miembros del equipo (separados por coma) *</span>
                    </label>
                    <input
                      type="text"
                      value={formData.teamMembers}
                      onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                      className="input input-bordered"
                      placeholder="Kenny, Alexis, Daniel"
                      required
                    />
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-ghost"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <>
                        <FiSave className="h-5 w-5" />
                        {editingId ? 'Actualizar' : 'Guardar'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* Lista de proyectos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card bg-base-100 shadow-xl"
            >
              <figure className="h-48 bg-base-200">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <FiImage className="h-16 w-16 text-base-content/30" />
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="text-sm text-base-content/70 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="badge badge-sm badge-primary badge-outline">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleEdit(project)}
                    className="btn btn-sm btn-ghost gap-2"
                  >
                    <FiEdit2 className="h-4 w-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="btn btn-sm btn-error gap-2"
                  >
                    <FiTrash2 className="h-4 w-4" />
                    Eliminar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-base-content/70">No hay proyectos todavía</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsAdmin
