# LingoQuest Teacher — By Mr. Arias

Primera versión de la aplicación web para organizar la preparación de clases ESL de primero a sexto de primaria.

## Incluye
- Menú independiente para Inicio, Planeación, Biblioteca y Actividades.
- Plantilla de planeación editable.
- Guardar, abrir y eliminar planeaciones en el navegador actual.
- Imprimir la planeación desde el navegador.
- Catálogo inicial de grados 1.º a 6.º.
- Banco de dinámicas para celular, bocina, flashcards o sin materiales.
- Diseño adaptable a computadora y celular.

## Importante
Esta versión es un prototipo local/web estático. Las planeaciones se guardan en `localStorage` del navegador y no se sincronizan entre dispositivos. El catálogo incluye algunos títulos preliminares que deben verificarse con los documentos originales; no importa ni copia automáticamente archivos adjuntos. Los grados 5.º y 6.º aparecen como pendientes de indexar/verificar.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo llamado `LingoQuestTeacher`.
2. Descarga y descomprime el archivo ZIP.
3. Sube `index.html`, `styles.css`, `app.js` y `README.md` a la raíz del repositorio (no subas la carpeta exterior `LingoQuestTeacher` como una subcarpeta).
4. En GitHub abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
7. Espera a que GitHub Pages publique la página.

La dirección esperada será `https://TU-USUARIO.github.io/LingoQuestTeacher/`, sustituyendo `TU-USUARIO` por tu nombre de usuario real de GitHub.

## Siguiente desarrollo
- Verificar los resúmenes y guías de Elfin 1–6 contra los archivos originales.
- Añadir recursos propios y enlaces a audios autorizados.
- Implementar exportación PDF más completa, calendarios y rúbricas.
- Definir cómo compartir el catálogo con LingoQuest Student sin modificar el repositorio Student.
- Añadir almacenamiento seguro solo cuando sea necesario.

## Instalación en Android (PWA)

Esta versión incluye manifest, iconos y service worker para que el sitio pueda instalarse como aplicación web en navegadores compatibles. Después de publicar los archivos en GitHub Pages:

1. Abre `https://jarias562.github.io/LingoQuestTeacher/` en Google Chrome en Android.
2. Toca el menú ⋮ y selecciona **Instalar aplicación** o **Añadir a pantalla de inicio**.
3. Confirma la instalación. El icono LQ Teacher aparecerá en el celular.
4. Usa **Compartir** dentro de la app o envía el enlace del sitio por WhatsApp a otros docentes.

Nota: esta aplicación inicial guarda las planeaciones en el almacenamiento local del navegador/dispositivo. Compartir el enlace permite que otros maestros instalen su propia copia, pero no sincroniza automáticamente las planeaciones entre personas o dispositivos.
