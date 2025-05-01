# Calculadora de IMC web con eventos

Este proyecto implementa una **Calculadora de Índice de Masa Corporal (IMC)** interactiva en el navegador, utilizando eventos de JavaScript y mostrando notificaciones atractivas con **SweetAlert2**.

## Tecnologias

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Demo](#demo)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Descripción

La calculadora recibe los datos personales (nombre y edad) y las medidas corporales (peso en kg y altura en cm) del usuario, calcula su IMC y muestra el resultado junto con una recomendación de salud. En caso de entradas inválidas, se muestra una alerta descriptiva.

## Características

- Validación de campos obligatorios.
- Cálculo automático del IMC.
- Notificaciones modales con SweetAlert2.
- Botón para reiniciar y realizar nuevos cálculos.

## Demo

> Abre `http://localhost:5173` después de iniciar el servidor de desarrollo para ver la aplicación en tu navegador.

## Instalación

**Requisitos previos:**
- [Node.js](https://nodejs.org/) v14 o superior

```bash
# Clona este repositorio
git clone https://github.com/LFDIAZDEV2209/calculadora-imc-web.git
cd calculadora-imc-events

# Instala las dependencias
npm install
```

## Uso

```bash
# Inicia el servidor de desarrollo con Vite
npm run dev
```

1. Abre tu navegador en la URL que indique la terminal (por defecto `http://localhost:5173`).
2. Completa tus datos personales y corporales.
3. Haz clic en **Calcular IMC** y observa el resultado.
4. Para empezar de nuevo, pulsa **Calcular de nuevo**.

## Scripts disponibles

- `npm run dev`  → Inicia el servidor de desarrollo.
- `npm run build` → Genera una carpeta `dist` lista para producción.
- `npm run preview` → Sirve la carpeta `dist` localmente para previsualizar la versión de producción.

## Estructura del proyecto

```
calculadora-imc-web/
├── index.html           # Punto de entrada HTML
├── package.json         # Configuración de dependencias y scripts
├── src/                 # Archivos fuente
│   ├── main.js          # Lógica principal y eventos
│   └── styles.css       # Estilos de la UI
├── public/              # Archivos estáticos adicionales
└── README.md            # Documentación del proyecto
```

## Tecnologías

- **Vite** → Bundler y servidor de desarrollo.
- **JavaScript** → Lógica de cálculo y gestión de eventos.
- **HTML5 & CSS3** → Estructura y estilos de la interfaz.
- **SweetAlert2** → Notificaciones modales.

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un `fork` del repositorio.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz `commit` (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz `push` a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request** explicando tus cambios.

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
