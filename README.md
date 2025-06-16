# Conversor de Tipos de Archivos

Este proyecto es una aplicación frontend desarrollada con React y TypeScript, cuyo objetivo es facilitar la conversión entre diferentes tipos de archivos de forma sencilla e intuitiva para el usuario.

## Características

- **Carga de archivos:** Permite al usuario subir un archivo desde su dispositivo.
- **Detección automática:** El tipo de archivo subido se detecta automáticamente.
- **Opciones de conversión inteligentes:** Según el tipo del archivo subido, se muestran solo las opciones de conversión compatibles.
- **Feedback visual:** Se informa al usuario sobre el estado del proceso de carga y conversión, mostrando un loader cuando corresponde.
- **Componentización:** La interfaz está construida mediante componentes reutilizables, siguiendo buenas prácticas de desarrollo frontend moderno.
- **Tipado fuerte:** Uso de TypeScript para mayor robustez y escalabilidad.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```

## Uso

1. Sube un archivo desde tu dispositivo.
2. El sistema detectará su tipo automáticamente.
3. Selecciona a qué tipo de archivo deseas convertirlo (las opciones disponibles dependen del tipo de archivo subido).
4. Observa el estado del proceso mediante los indicadores visuales.

## Estructura del Proyecto

- `/src/App.tsx`: Componente principal, maneja la lógica de carga de archivos, estados y renderizado general.
- `/src/components/SelectType.tsx`: Selector para elegir el tipo de archivo al que convertir.
- `/src/components/IputTypeDoc.tsx`: Componente para subir archivos.
- `/src/components/CardContainter.tsx`: Componente de layout para agrupar contenido.
- `/src/ui/loader.tsx`: Indicador visual de carga.
- `/src/utils/utils.ts`: Funciones utilitarias, como la detección del tipo de archivo.
- `/src/hooks/useOptionsXType.ts`: Hook personalizado para determinar las opciones de conversión disponibles.

## Tecnologías usadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (sugerido para desarrollo rápido)
- [Tailwind CSS](https://tailwindcss.com/) para estilos utilitarios

## Contribución

¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerencias, mejoras o reportes de errores.

## Licencia

MIT

---

> _Este proyecto fue desarrollado siguiendo buenas prácticas de desarrollo frontend, priorizando la experiencia de usuario y la mantenibilidad del código._
