# ConvertidorDeArchivo

ConvertidorDeArchivo es una aplicación web desarrollada con React y TypeScript que permite a los usuarios convertir archivos entre distintos formatos de manera sencilla y rápida.

## 🚀 Demo

Prueba la aplicación en vivo: [convertidor-de-archivo.vercel.app](https://convertidor-de-archivo.vercel.app)

## ✨ Características

- **Conversión de archivos:** Selecciona un archivo y elige el formato de salida deseado.
- **Compatibilidad inteligente:** La app solo muestra los formatos de conversión compatibles según el archivo subido.
- **Feedback al usuario:** Notificaciones, validaciones y loader para una experiencia fluida.
- **Soporte para múltiples formatos:** Imágenes (png, jpg, jpeg, webp), documentos (pdf, txt, csv) y conversiones entre ellos.
- **Desarrollada en:** React + TypeScript, con buenas prácticas de organización y tipado.

## 🗂️ Estructura del proyecto

```
src/
  ├── App.tsx                # Componente principal, maneja estados globales y lógica central
  ├── components/            # Componentes reutilizables (SelectType, CardContainer, etc)
  ├── hooks/                 # Hooks personalizados para lógica modular
  ├── interface/             # Tipos y contratos TypeScript
  ├── services/              # Funciones para interactuar con servicios de conversión
  ├── ui/                    # Elementos visuales (Loader, etc)
  ├── utils/                 # Utilidades y constantes de conversión
  ├── main.tsx               # Punto de entrada de la aplicación
  ├── index.css, App.css     # Estilos generales y de componentes
```

## 🛠️ Instalación y uso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/GianBaeza/ConvertidorDeArchivo.git
   cd ConvertidorDeArchivo
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia la app en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador en** `http://localhost:5173` (o el puerto indicado).

## 🧩 Principales tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Vercel](https://vercel.com/) para despliegue

## 📝 Licencia

Este proyecto no tiene licencia asignada aún. Si tienes pensado compartirlo o permitir contribuciones, considera agregar una [licencia open source](https://choosealicense.com/).

## 🙌 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar la app, reportar bugs o sugerir nuevas funcionalidades, por favor abre un issue o haz un pull request.

---

**Desarrollado por [GianBaeza](https://github.com/GianBaeza)**
