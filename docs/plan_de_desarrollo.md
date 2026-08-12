# 📋 Plan de Desarrollo — GymTracker SPA

> **Proyecto:** GymTracker — App de Control de Rutinas y Sesiones  
> **Metodología:** Scrum (Sprints de 1 semana)  
> **Fecha de Inicio:** 12 de agosto de 2026  
> **Fecha Estimada de Entrega:** 16 de septiembre de 2026  

---

## 1. Visión del Producto

App web SPA personal para control de rutinas de gym y sesiones de entrenamiento. Mobile-first, dark theme premium, sin backend — datos en `localStorage`.

### 1.1 Objetivos

| # | Objetivo | Prioridad |
|---|----------|-----------|
| O1 | Crear y gestionar rutinas con categorías musculares | 🔴 Alta |
| O2 | Registrar sesiones en tiempo real | 🔴 Alta |
| O3 | Historial de sesiones con filtros | 🟡 Media |
| O4 | Gráficas de progreso (Chart.js) | 🟡 Media |
| O5 | Temporizador de descanso entre series | 🟢 Media |
| O6 | Exportar/importar datos JSON | 🟢 Baja |

### 1.2 Stack Tecnológico

| Componente | Tecnología |
|------------|-----------|
| Estructura | HTML5 Semántico |
| Estilos | CSS3 Vanilla (Dark theme, glassmorphism) |
| Lógica | JavaScript ES6+ (Hash routing SPA) |
| Gráficas | Chart.js (CDN) |
| Tipografía | Inter (Google Fonts) |
| Persistencia | localStorage |

---

## 2. Product Backlog — User Stories

### E1 — Fundación y Arquitectura
- **US-01:** Interfaz oscura y moderna para usar en el gym
- **US-02:** Navegación SPA sin recargas de página
- **US-03:** Datos guardados automáticamente en el navegador

### E2 — Gestión de Rutinas
- **US-04:** Crear rutinas con nombre y categoría muscular
- **US-05:** Agregar ejercicios (nombre, series, reps, peso)
- **US-06:** Editar y eliminar rutinas
- **US-07:** Badges de categoría (Pecho, Espalda, Pierna, Hombro, Brazo, Core, Cardio, Full Body)

### E3 — Sesión en Vivo
- **US-08:** Iniciar sesión basada en una rutina
- **US-09:** Marcar sets como completados con peso/reps reales
- **US-10:** Temporizador de descanso configurable (60s/90s/120s/180s)
- **US-11:** Cronómetro de duración total
- **US-12:** Notas al finalizar sesión

### E4 — Historial
- **US-13:** Sesiones pasadas ordenadas por fecha
- **US-14:** Detalle expandible de cada sesión
- **US-15:** Filtros por rutina y rango de fechas
- **US-16:** Eliminar sesiones

### E5 — Estadísticas
- **US-17:** Gráfica de frecuencia (sesiones/semana)
- **US-18:** Progreso de peso por ejercicio (line chart)
- **US-19:** Volumen total semanal
- **US-20:** Records personales (1RM estimado)

### E6 — Pulido
- **US-21:** Exportar datos como JSON
- **US-22:** Importar datos desde JSON
- **US-23:** Responsive en móvil y escritorio

---

## 3. Planificación de Sprints

### Fase 1: Fundación (0% → 20%)

#### 🟦 Sprint 0 — Setup y Arquitectura Base
> **Semana 1 (12–18 ago 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-001 | Estructura de carpetas | 1 | ⬜ |
| T-002 | `index.html` — shell SPA | 3 | ⬜ |
| T-003 | `css/styles.css` — sistema de diseño | 5 | ⬜ |
| T-004 | `js/app.js` — router hash-based | 3 | ⬜ |
| T-005 | `js/storage.js` — capa localStorage | 3 | ⬜ |
| T-006 | `js/ui.js` — toasts, modales | 3 | ⬜ |
| T-007 | `js/views/dashboard.js` — pantalla inicio | 5 | ⬜ |
| | **Total** | **23** | |

**DoD Sprint:** App carga sin errores, navegación 5 tabs funcional, dashboard visible, dark theme aplicado.

---

### Fase 2: Funcionalidad Core (20% → 55%)

#### 🟩 Sprint 1 — Gestión de Rutinas
> **Semana 2 (19–25 ago 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-008 | Lista de rutinas (cards + categorías) | 5 | ⬜ |
| T-009 | Formulario crear/editar rutina (modal) | 5 | ⬜ |
| T-010 | CRUD ejercicios dentro de rutina | 5 | ⬜ |
| T-011 | Sistema de categorías con badges | 3 | ⬜ |
| T-012 | Botón "Iniciar rutina" | 2 | ⬜ |
| T-013 | Eliminar rutina con confirmación | 2 | ⬜ |
| | **Total** | **22** | |

#### 🟨 Sprint 2 — Sesión en Vivo
> **Semana 3 (26 ago – 01 sep 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-014 | Vista sesión activa | 5 | ⬜ |
| T-015 | Inputs peso/reps con auto-sugerencia | 5 | ⬜ |
| T-016 | Marcar sets completados | 3 | ⬜ |
| T-017 | Temporizador descanso configurable | 5 | ⬜ |
| T-018 | Cronómetro total sesión | 3 | ⬜ |
| T-019 | Notas al finalizar | 2 | ⬜ |
| T-020 | Guardar sesión en localStorage | 3 | ⬜ |
| | **Total** | **26** | |

---

### Fase 3: Análisis y Consulta (55% → 80%)

#### 🟧 Sprint 3 — Historial
> **Semana 4 (02–08 sep 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-021 | Lista sesiones por fecha | 5 | ⬜ |
| T-022 | Detalle expandible (acordeón) | 3 | ⬜ |
| T-023 | Filtro por rutina | 3 | ⬜ |
| T-024 | Filtro por rango de fechas | 3 | ⬜ |
| T-025 | Eliminar sesión | 2 | ⬜ |
| | **Total** | **16** | |

#### 🟥 Sprint 4 — Estadísticas
> **Semana 4-5 (08–12 sep 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-026 | Gráfica frecuencia (bar chart) | 5 | ⬜ |
| T-027 | Progreso peso/ejercicio (line chart) | 5 | ⬜ |
| T-028 | Volumen semanal | 3 | ⬜ |
| T-029 | Records personales (1RM) | 3 | ⬜ |
| T-030 | Selector ejercicio para gráficas | 2 | ⬜ |
| | **Total** | **18** | |

---

### Fase 4: Pulido y Entrega (80% → 100%)

#### 🟪 Sprint 5 — QA y Entrega
> **Semana 5 (12–16 sep 2026)**

| ID | Tarea | SP | Estado |
|----|-------|:--:|--------|
| T-031 | Exportar datos a JSON | 3 | ⬜ |
| T-032 | Importar datos desde JSON | 3 | ⬜ |
| T-033 | Testing responsive | 3 | ⬜ |
| T-034 | Revisión UX y animaciones | 2 | ⬜ |
| T-035 | Pruebas flujo completo | 3 | ⬜ |
| T-036 | Documentación final | 2 | ⬜ |
| | **Total** | **16** | |

---

## 4. Resumen de Fases

| Fase | Sprints | Progreso | SP | Estado |
|------|---------|:--------:|:--:|--------|
| Fase 1: Fundación | Sprint 0 | 0% → 20% | 23 | ⬜ No iniciada |
| Fase 2: Core | Sprint 1-2 | 20% → 55% | 48 | ⬜ No iniciada |
| Fase 3: Análisis | Sprint 3-4 | 55% → 80% | 34 | ⬜ No iniciada |
| Fase 4: Pulido | Sprint 5 | 80% → 100% | 16 | ⬜ No iniciada |
| **TOTAL** | **6 sprints** | — | **121** | **0%** |

---

## 5. Riesgos

| Riesgo | Impacto | Mitigación |
|--------|---------|-----------|
| Pérdida de datos (caché) | 🔴 Alto | Export/import JSON (Sprint 5) |
| Límite localStorage (5-10MB) | 🟡 Medio | Monitorear uso |
| Temporizador en background | 🟡 Medio | Web Visibility API |
| Responsividad | 🟡 Medio | Testing mobile-first continuo |

## 6. Definition of Done

1. ✅ Código implementado y funcional
2. ✅ Responsive en móvil (320px+) y desktop
3. ✅ Datos persisten en localStorage
4. ✅ Sin errores en consola
5. ✅ Diseño acorde al sistema (dark theme)
6. ✅ Probado manualmente

---

*Documento generado: 12 de agosto de 2026 | Metodología Scrum | GymTracker SPA*
