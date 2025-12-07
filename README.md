# LEXISWARE - Portafolio Profesional

> Plataforma web para gestión de portafolios administrable multiusuario con sistema de asesorías

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-Academic-green.svg)]()

## 📋 Descripción

Aplicación web desarrollada como proyecto integrador para la asignatura **Programación y Plataformas Web** de la carrera de Computación. Implementa un sistema completo de gestión de portafolios con tres roles diferenciados: Administrador, Programador y Usuario Externo.

### ✨ Características Principales

- 🔐 **Autenticación con Google** (Firebase Auth)
- 👥 **Sistema de Roles**: Admin, Programmer, External
- 📂 **Gestión de Proyectos**: Académicos y Laborales
- 📅 **Sistema de Asesorías**: Solicitud y aprobación
- 📱 **Diseño Responsive**: Mobile-first con TailwindCSS
- 🎨 **Múltiples Temas**: Dark/Light con DaisyUI
- 💾 **localStorage**: Gestión de imágenes sin backend adicional

## 🚀 Tecnologías

### Frontend
- **React 19** con TypeScript
- **Vite 7.2** - Build tool ultrarrápido
- **React Router v6** - Navegación SPA
- **TailwindCSS + DaisyUI** - Estilos y componentes

### Backend
- **Firebase Authentication** - Login con Google OAuth
- **Cloud Firestore** - Base de datos NoSQL
- **Firebase Hosting** - Despliegue estático

### Herramientas
- **pnpm** - Gestor de paquetes
- **ESLint** - Linting de código
- **Framer Motion** - Animaciones

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.x
- pnpm >= 8.x
- Cuenta de Firebase

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/kennypallchizaca-coder/PORTAFOLIO.git
cd PORTAFOLIO

# Instalar dependencias
pnpm install

# Configurar Firebase
# Crear archivo .env con tus credenciales:
# VITE_FIREBASE_API_KEY=tu_api_key
# VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
# ... etc

# Modo desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview del build
pnpm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── LocalImage.tsx
│   ├── NavBar.tsx
│   └── ...
├── context/         # React Context (AuthContext, ThemeContext)
├── layouts/         # Layouts principales (Public, Dashboard)
├── pages/
│   ├── admin/       # Páginas del administrador
│   ├── programmer/  # Páginas del programador
│   ├── public/      # Páginas públicas
│   └── auth/        # Login
├── services/        # Servicios Firebase (auth, firestore)
├── utils/           # Utilidades (FormUtils)
└── App.tsx          # Enrutador principal
```

## 👤 Roles y Funcionalidades

### 🔧 Administrador
- CRUD completo de usuarios programadores
- Gestión de proyectos globales
- Configuración de horarios de asesorías
- Dashboard con estadísticas

### 💻 Programador
- Editor de perfil (foto, skills, redes sociales)
- Gestión de proyectos propios
- Inbox de solicitudes de asesorías
- Dashboard personal

### 🌐 Usuario Externo
- Explorar directorio de programadores
- Ver proyectos académicos y laborales
- Solicitar asesorías
- Acceso público sin autenticación

## 🔑 Variables de Entorno

Crear archivo `.env` en la raíz:

```env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=tu-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto
VITE_FIREBASE_STORAGE_BUCKET=tu-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123:web:abc123
```

## 📝 Scripts Disponibles

```bash
pnpm run dev        # Servidor desarrollo (localhost:5173)
pnpm run build      # Build producción
pnpm run preview    # Preview del build
pnpm run lint       # Ejecutar ESLint
```

## 🌐 Despliegue en Firebase

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar proyecto
firebase init hosting

# Build y deploy
pnpm run build
firebase deploy
```

## 📄 Licencia

Proyecto académico desarrollado para la Universidad Nacional de Loja - Carrera de Computación.

**Asignatura:** Programación y Plataformas Web  
**Docente:** Ing. Cristian Timbi Sisalima  
**Período:** Octubre 2025 - Febrero 2026

## 👥 Autores

- **Kenny Pallchizaca** - [@kennypallchizaca-coder](https://github.com/kennypallchizaca-coder)
- **[Nombre Compañero]** - Desarrollo colaborativo

---

⭐ **LEXISWARE** - Portafolio Profesional © 2025
