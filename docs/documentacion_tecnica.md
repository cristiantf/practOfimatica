# 📖 Documentación Técnica — GymTracker SPA

> **Versión:** 1.0  
> **Última actualización:** 12 de agosto de 2026  
> **Tipo de aplicación:** Single Page Application (SPA)  

---

## 1. Arquitectura General

### 1.1 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────┐
│                  index.html                      │
│         (Shell SPA: header + main + nav)         │
├─────────────────────────────────────────────────┤
│                    app.js                        │
│         (Router hash-based + Init)               │
├──────────┬──────────┬───────────────────────────┤
│ storage.js│  ui.js   │        views/              │
│ (CRUD     │ (Toasts, │  dashboard.js              │
│ localStorage)│ Modales) │  routines.js               │
│           │          │  session.js                │
│           │          │  history.js                │
│           │          │  stats.js                  │
├──────────┴──────────┴───────────────────────────┤
│              localStorage (JSON)                 │
└─────────────────────────────────────────────────┘
```

### 1.2 Estructura de Archivos

```
practOfimatica/
├── index.html                 # Punto de entrada SPA
├── css/
│   └── styles.css             # Sistema de diseño completo
├── js/
│   ├── app.js                 # Router + inicialización
│   ├── storage.js             # Capa de persistencia
│   ├── ui.js                  # Componentes compartidos
│   └── views/
│       ├── dashboard.js       # Vista: resumen del día
│       ├── routines.js        # Vista: CRUD rutinas
│       ├── session.js         # Vista: entrenamiento en vivo
│       ├── history.js         # Vista: historial sesiones
│       └── stats.js           # Vista: gráficas progreso
├── assets/
│   └── icons/                 # Iconos SVG inline
└── docs/
    ├── plan_de_desarrollo.md
    ├── documentacion_tecnica.md
    └── estado_del_proyecto.md
```

### 1.3 Flujo de Navegación

```
[Dashboard] ──→ [Rutinas] ──→ [Sesión en Vivo] ──→ [Historial]
     │                                                    │
     └──────────────── [Estadísticas] ◄──────────────────┘
```

**Rutas hash:**
| Hash | Vista | Archivo |
|------|-------|---------|
| `#/` | Dashboard | `dashboard.js` |
| `#/routines` | Rutinas | `routines.js` |
| `#/session` | Sesión en Vivo | `session.js` |
| `#/history` | Historial | `history.js` |
| `#/stats` | Estadísticas | `stats.js` |

---

## 2. Modelo de Datos

### 2.1 Rutina (`routines`)

```javascript
{
  id: "r_1691875200000",       // Prefijo + timestamp
  name: "Push Day",
  category: "Pecho",          // Categoría muscular principal
  exercises: [
    {
      id: "ex_1691875200001",
      name: "Press Banca",
      sets: 4,                 // Número de series planeadas
      reps: 10,                // Repeticiones objetivo
      weight: 60               // Peso en kg
    }
  ],
  createdAt: "2026-08-12T10:00:00",
  updatedAt: "2026-08-12T10:00:00"
}
```

### 2.2 Sesión (`sessions`)

```javascript
{
  id: "s_1691875200000",
  routineId: "r_1691875200000",
  routineName: "Push Day",
  date: "2026-08-12",
  startTime: "2026-08-12T10:00:00",
  endTime: "2026-08-12T11:05:00",
  duration: 3900,              // Duración en segundos
  exercises: [
    {
      name: "Press Banca",
      sets: [
        { reps: 10, weight: 60, completed: true },
        { reps: 8, weight: 65, completed: true },
        { reps: 7, weight: 65, completed: true },
        { reps: 6, weight: 60, completed: true }
      ]
    }
  ],
  notes: "Subí peso en la segunda serie",
  totalVolume: 2480            // Volumen total (peso × reps)
}
```

### 2.3 Categorías Musculares

| Categoría | Color Badge | Emoji |
|-----------|-------------|-------|
| Pecho | `#e94560` | 💪 |
| Espalda | `#0f3460` | 🔙 |
| Pierna | `#00d68f` | 🦵 |
| Hombro | `#ffaa00` | 🏋️ |
| Brazo | `#7b68ee` | 💪 |
| Core | `#ff6b6b` | 🎯 |
| Cardio | `#4ecdc4` | 🏃 |
| Full Body | `#a855f7` | ⚡ |

### 2.4 Claves de localStorage

| Clave | Tipo | Descripción |
|-------|------|-------------|
| `gym_routines` | `Array<Routine>` | Lista de rutinas del usuario |
| `gym_sessions` | `Array<Session>` | Historial de sesiones |
| `gym_settings` | `Object` | Configuraciones (descanso default) |
| `gym_active_session` | `Object\|null` | Sesión en progreso (recovery) |

---

## 3. Especificación de Módulos

### 3.1 `app.js` — Router y Controlador Principal

**Responsabilidades:**
- Escuchar el evento `hashchange` para cambiar vistas
- Renderizar la vista correspondiente en `<main id="app">`
- Gestionar el estado activo de la navegación inferior
- Inicializar datos por defecto si es primer uso

**API Pública:**
```javascript
function initApp()              // Punto de entrada
function navigateTo(hash)       // Navegación programática
function getCurrentRoute()      // Retorna ruta activa
```

### 3.2 `storage.js` — Capa de Persistencia

**Responsabilidades:**
- Abstraer lectura/escritura de localStorage
- Serialización/deserialización JSON
- Generación de IDs únicos

**API Pública:**
```javascript
// Rutinas
function getRoutines()                    // → Array<Routine>
function getRoutineById(id)               // → Routine | null
function saveRoutine(routine)             // Crear o actualizar
function deleteRoutine(id)                // Eliminar

// Sesiones
function getSessions(filters?)            // → Array<Session>
function saveSession(session)             // Guardar sesión
function deleteSession(id)                // Eliminar

// Sesión activa (recovery ante cierre accidental)
function getActiveSession()               // → Object | null
function setActiveSession(data)           // Guardar estado
function clearActiveSession()             // Limpiar

// Utilidades
function exportAllData()                  // → JSON string
function importData(jsonString)           // Restaurar datos
function getStorageUsage()                // → { used, limit }
```

### 3.3 `ui.js` — Componentes Compartidos

**API Pública:**
```javascript
function showToast(message, type)         // type: 'success'|'error'|'info'
function showModal(title, content, onConfirm)  // Modal de confirmación
function closeModal()
function formatDate(dateStr)              // → "12 ago 2026"
function formatDuration(seconds)          // → "1h 05m"
function formatTime(dateStr)              // → "10:00 AM"
function generateId(prefix)              // → "r_1691875200000"
```

### 3.4 Vistas (`views/`)

#### `dashboard.js`
- Saludo contextual (Buenos días/tardes/noches)
- Racha de entrenamiento (días consecutivos)
- Card última sesión con resumen
- Stats rápidos: sesiones esta semana, volumen total
- Botón CTA "Iniciar Sesión"

#### `routines.js`
- Grid de cards de rutinas con badge de categoría
- FAB (botón flotante) para crear nueva rutina
- Modal de creación: nombre + categoría + lista de ejercicios
- Edición inline de ejercicios (nombre, series, reps, peso)
- Acciones: editar, eliminar, iniciar sesión

#### `session.js`
- Header con nombre de rutina y cronómetro total
- Lista de ejercicios con sets expandibles
- Input numérico por set: peso (kg) y reps
- Checkbox visual para marcar set completado
- Temporizador de descanso (modal overlay con cuenta regresiva)
- Botón finalizar → campo de notas → guardar

#### `history.js`
- Lista cronológica de sesiones (agrupadas por mes)
- Card por sesión: fecha, rutina, duración, volumen
- Acordeón para ver detalle de ejercicios/sets
- Barra de filtros: dropdown rutina + date pickers
- Swipe o botón para eliminar

#### `stats.js`
- Selector de rango temporal (última semana/mes/3 meses)
- Gráfica bar: sesiones por semana
- Gráfica line: progreso peso por ejercicio (selector dropdown)
- Card de volumen semanal con comparativa
- Tabla de records personales (1RM estimado: peso × (1 + reps/30))

---

## 4. Sistema de Diseño

### 4.1 Paleta de Colores

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #1a1a2e;
  --bg-card-hover: #222240;
  --accent-primary: #e94560;
  --accent-secondary: #0f3460;
  --accent-gradient: linear-gradient(135deg, #e94560, #0f3460);
  --text-primary: #eaeaea;
  --text-secondary: #8a8a9a;
  --text-muted: #4a4a5a;
  --success: #00d68f;
  --warning: #ffaa00;
  --error: #ff4757;
  --border: rgba(255, 255, 255, 0.06);
  --glass: rgba(26, 26, 46, 0.8);
}
```

### 4.2 Tipografía

- **Fuente:** Inter (Google Fonts)
- **Tamaños:** 12px (caption), 14px (body), 16px (subtitle), 20px (title), 28px (hero)
- **Pesos:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### 4.3 Componentes CSS Clave

| Componente | Clase | Descripción |
|-----------|-------|-------------|
| Card | `.card` | Fondo glass, border sutil, hover elevación |
| Botón primario | `.btn-primary` | Gradiente accent, hover scale |
| Botón ghost | `.btn-ghost` | Borde sutil, hover fill |
| Input | `.input-field` | Background oscuro, focus glow |
| Badge | `.badge` | Píldora de color por categoría |
| Toast | `.toast` | Notificación flotante animada |
| Modal | `.modal-overlay` | Overlay oscuro con card centrada |
| Nav bottom | `.nav-bottom` | Barra fija inferior con iconos |

### 4.4 Animaciones

```css
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
@keyframes pulse { 0%, 100% { transform: scale(1) } 50% { transform: scale(1.05) } }
```

---

## 5. Dependencias Externas

| Dependencia | Versión | Tipo | URL |
|-------------|---------|------|-----|
| Chart.js | 4.x | CDN | `https://cdn.jsdelivr.net/npm/chart.js` |
| Inter Font | — | Google Fonts | `https://fonts.googleapis.com/css2?family=Inter` |

> **Total dependencias: 2** — Ambas cargadas por CDN, sin `node_modules`.

---

## 6. Compatibilidad

| Navegador | Versión Mínima |
|-----------|---------------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 14+ |
| Edge | 90+ |
| Chrome Mobile | 90+ |
| Safari iOS | 14+ |

**APIs del navegador utilizadas:**
- `localStorage` — Persistencia de datos
- `hashchange` event — Navegación SPA
- `Intl.DateTimeFormat` — Formateo de fechas
- `crypto.randomUUID()` o fallback timestamp — IDs únicos
- `backdrop-filter` — Efecto glassmorphism (CSS)

---

*Documento técnico v1.0 | GymTracker SPA | 12 de agosto de 2026*
