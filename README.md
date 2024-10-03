# Eventify Web Frontend

## Descripción

Eventify es una plataforma diseñada para la gestión de eventos. Esta aplicación web permite visualizar eventos registrados, calificar eventos y gestionar los asistentes a través de una interfaz interactiva, con soporte multilenguaje y accesibilidad mejorada.

Esta implementación del frontend se ha desarrollado utilizando Angular 18 con soporte para componentes standalone y está vinculada a un servidor de simulación (Fake API) utilizando `json-server` para manejar los datos de eventos, asistentes y calificaciones. Además, utiliza Angular Material para el diseño de la interfaz y `ngx-translate` para manejar las traducciones de la aplicación.

## Características Principales

1. **Toolbar**
  - Muestra el logo de Eventify (usando Clearbit Logo API) con el texto "ISO 27001:2022 certified".
  - Opciones de navegación: "Home" y "Rating".
  - Switch de idioma con los botones "EN" y "ES" para cambiar entre inglés y español.

2. **Vista Home**
  - Título de la página: "Home".
  - Contenido de bienvenida: "Welcome to Eventify".
  - Sección "Registered Events" que muestra un grid de eventos con dos columnas.
  - Cada evento registrado presenta:
    - Nombre del evento en el encabezado del card.
    - Descripción del evento en el cuerpo del card.
    - Indicador de "Checked-In Attendees" en el pie del card.
    - Indicador de "Average Rating", que muestra el promedio de calificaciones de los asistentes.

3. **Vista Rating**
  - Título: "Event Rating".
  - Formulario para calificar un evento:
    - Campo "Ticket Identifier" (identificador del ticket del asistente).
    - Campo "Rating" (calificación del evento de 1 a 5).
    - Botón "Rate Event" para enviar la calificación.
  - Validaciones:
    - Si el ticket no existe, se muestra el mensaje "Invalid Ticket Identifier".
    - Si el asistente no ha realizado el check-in, se muestra el mensaje "You can only rate events you have attended to".
    - Si la calificación es exitosa, se muestra el mensaje "Event successfully rated".

4. **Rutas Configuradas**
  - `/home`: Muestra la vista Home.
  - `/engagement/ratings/new`: Muestra la vista Rating.
  - Página de error 404 configurada para rutas no existentes.

5. **Multilenguaje (i18n)**
  - Soporte para inglés (EN) y español (ES).
  - Textos traducidos:
    - Títulos de las páginas.
    - Botones y labels del formulario de calificación.
    - Indicadores de eventos.

6. **Accesibilidad**
  - Implementación de atributos ARIA en los formularios y componentes clave para mejorar la accesibilidad de la aplicación.

## Configuración del Proyecto

### Requisitos Previos

- Node.js (versión 18 o superior)
- Angular CLI (versión 18 o superior)
- `json-server` para simular la API


# Instrucciones para ejecutar el proyecto

## Instalar las dependencias del proyecto:
```bash
npm install
```

## Iniciar el servidor  json-server:
```bash
json-server --watch server/db.json
```

## Iniciar la aplicación Angular:

```bash
ng serve
```

## Organización del Proyecto
- **public**: Elementos generales de la interfaz (Home).
- **shared**: Componentes compartidos entre diferentes dominios (Toolbar).
- **registration**: Componentes relacionados con la gestión de eventos (Event Summary, Attendees).
- **engagement**: Componentes relacionados con las calificaciones (Event Rating).
- **assets**: Archivos de traducción i18n (`es.json`, `en.json`).

## Autor
- **Nombre**: George Aldo Galvan Cerron
- **Correo**: U202116055@upc.edu.pe
