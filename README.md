#  Realtime Collaboration Board

Una pizarra colaborativa en tiempo real basada en Google Keep. 

##  Guía de Inicio Rápido

Se deben seguir las instrucciones a continuación para levantar tanto el front, como el backend.

### Prerrequisitos
* Node.js (v18 o superior)
* NPM

### 1. Iniciar el Servidor (Backend)
El backend gestiona la sincronización en tiempo real. Para iniciarlo, una terminal se debe escribir:

```bash
cd backend
npm install
npm run dev
```

### 2. Iniciar la Aplicación (Frontend)
La interfaz de usuario. En una segunda terminal se debe escribir:

```bash
cd frontend
npm install
npm run dev
```

### 3.Ejecutar Tests Automatizados
Para verificar que la lógica del negocio y los componentes funcionan correctamente se debe escribir en una terminal:

```bash
cd frontend
npm run test
```

## Como usar la aplicación
Una vez dentro, la experiencia está centrada en la interacción natural:

* **Ingreso:** Se debe escribir el nombre para iniciar sesión, una vez dentro, se podrá visualizar el tablero y los usuarios conectados.

* **Crear Notas:** Las notas se crean pulsando doble click

* **Organizar:** Las notas pueden ser arrastradas y posicionadas en cualquier parte usando drag an drop. El movimiento lo ven todos en tiempo real.

* **Editar:** Para editar una nota se debe hacer click sobre ella

* **Detalle visual:** Si otro usuario empieza a escribir en la misma nota, se mostrará un indicador: "Carlos...".

* **Comentar:** Para acceder a la sección de comentarios, se debe pulsar el botón con ícono de comentario.

---

# Documentación Técnica

A continuación se detallan las decisiones de ingeniería para cumplir con los requerimientos solicitados.

### Stack Tecnológico
* **Frontend:** Vue 3 (Composition API) + TypeScript + Pinia + Tailwind CSS.

* **Backend:** Node.js + Express + Socket.IO.

* **Testing:** Vitest (Unit & Component Testing).

### Arquitectura de software 

El proyecto utiliza una arquitectura desacoplada con un patrón de Socket Gateway en el frontend.

* **Separación de Responsabilidades:** Los componentes UI no conocen la librería socket.io-client. Se comunican a través de socketGateway.ts y los Stores de Pinia.

* **Manejo de Estado:**
    * **userStore:** Maneja sesión y presencia.
    * **noteStore:** Maneja lógica CRUD y sincronización optimista.


