# 📊 Estado de Seguimiento del Proyecto — GymTracker SPA

> **Proyecto:** GymTracker — App de Control de Rutinas y Sesiones  
> **Metodología:** Scrum  
> **Última actualización:** 12 de agosto de 2026  

---

## Progreso General

```
████░░░░░░░░░░░░░░░░  20% Completado
```

| Métrica | Valor |
|---------|-------|
| **Progreso total** | 20% |
| **Sprint actual** | Sprint 1 — Gestión de Rutinas |
| **Fase actual** | Fase 2: Core (20% → 55%) |
| **Story Points completados** | 23 / 121 |
| **Sprints completados** | 1 / 6 |
| **Fecha inicio** | 12 de agosto de 2026 |
| **Fecha entrega estimada** | 16 de septiembre de 2026 |

---

## Estado por Fases

| Fase | Rango | SP | Completados | Progreso | Estado |
|------|:-----:|:--:|:-----------:|:--------:|--------|
| **Fase 1:** Fundación | 0%–20% | 23 | 23 | ██████████ 100% | 🟢 Completada |
| **Fase 2:** Core | 20%–55% | 48 | 0 | ░░░░░░░░░░ 0% | 🔵 En curso |
| **Fase 3:** Análisis | 55%–80% | 34 | 0 | ░░░░░░░░░░ 0% | ⚪ Pendiente |
| **Fase 4:** Pulido | 80%–100% | 16 | 0 | ░░░░░░░░░░ 0% | ⚪ Pendiente |

---

## Sprint Actual: Sprint 1 — Gestión de Rutinas

> **Período:** Semana 2 (19–25 ago 2026)  
> **Objetivo:** CRUD completo de rutinas con categorías  
> **Velocidad objetivo:** 22 SP

### Tareas del Sprint

| ID | Tarea | SP | Estado | Notas |
|----|-------|:--:|:------:|-------|
| T-008 | Lista de rutinas (cards + categorías) | 5 | ⬜ Pendiente | |
| T-009 | Formulario crear/editar rutina (modal) | 5 | ⬜ Pendiente | |
| T-010 | CRUD ejercicios dentro de rutina | 5 | ⬜ Pendiente | |
| T-011 | Sistema de categorías con badges | 3 | ⬜ Pendiente | |
| T-012 | Botón "Iniciar rutina" | 2 | ⬜ Pendiente | |
| T-013 | Eliminar rutina con confirmación | 2 | ⬜ Pendiente | |

**Sprint Progress:**
```
░░░░░░░░░░░░░░░░░░░░  0/22 SP (0%)
```

### Criterios de Aceptación Sprint 1
- [ ] Se pueden crear rutinas con nombre, categoría y ejercicios
- [ ] Ejercicios tienen nombre, series, repeticiones y peso
- [ ] Rutinas se persisten en localStorage
- [ ] Botón "Iniciar" funcional

---

## Historial de Sprints

### Sprint Backlog Completo

#### Sprint 0 — Setup y Arquitectura (Fase 1)
| Estado | Resumen |
|--------|---------|
| 🟢 Completado | 23/23 SP completados (12 ago 2026) |

#### Sprint 1 — Gestión de Rutinas (Fase 2)
| Estado | Resumen |
|--------|---------|
| ⚪ Pendiente | 0/22 SP — Inicia: 19 ago 2026 |

#### Sprint 2 — Sesión en Vivo (Fase 2)
| Estado | Resumen |
|--------|---------|
| ⚪ Pendiente | 0/26 SP — Inicia: 26 ago 2026 |

#### Sprint 3 — Historial (Fase 3)
| Estado | Resumen |
|--------|---------|
| ⚪ Pendiente | 0/16 SP — Inicia: 02 sep 2026 |

#### Sprint 4 — Estadísticas (Fase 3)
| Estado | Resumen |
|--------|---------|
| ⚪ Pendiente | 0/18 SP — Inicia: 08 sep 2026 |

#### Sprint 5 — QA y Entrega (Fase 4)
| Estado | Resumen |
|--------|---------|
| ⚪ Pendiente | 0/16 SP — Inicia: 12 sep 2026 |

---

## Burndown Chart (Manual)

| Sprint | SP Planeados | SP Completados | SP Restantes | % Sprint |
|--------|:------------:|:--------------:|:------------:|:--------:|
| Sprint 0 | 23 | 0 | 23 | 0% |
| Sprint 1 | 22 | — | — | — |
| Sprint 2 | 26 | — | — | — |
| Sprint 3 | 16 | — | — | — |
| Sprint 4 | 18 | — | — | — |
| Sprint 5 | 16 | — | — | — |
| **Total** | **121** | **0** | **121** | **0%** |

---

## Velocity Tracker

| Sprint | SP Comprometidos | SP Completados | Velocidad |
|--------|:----------------:|:--------------:|:---------:|
| Sprint 0 | 23 | — | — |
| Sprint 1 | 22 | — | — |
| Sprint 2 | 26 | — | — |
| Sprint 3 | 16 | — | — |
| Sprint 4 | 18 | — | — |
| Sprint 5 | 16 | — | — |
| **Promedio** | — | — | **—** |

---

## Impedimentos y Riesgos Activos

| # | Impedimento/Riesgo | Severidad | Estado | Acción |
|---|-------------------|:---------:|--------|--------|
| — | *Ninguno registrado* | — | — | — |

---

## Registro de Decisiones

| Fecha | Decisión | Justificación |
|-------|----------|---------------|
| 12 ago 2026 | Sin ejercicios precargados | El usuario prefiere agregar los suyos propios |
| 12 ago 2026 | Incluir temporizador de descanso | Solicitado explícitamente por el usuario |
| 12 ago 2026 | Incluir categorías musculares | 8 categorías: Pecho, Espalda, Pierna, Hombro, Brazo, Core, Cardio, Full Body |
| 12 ago 2026 | Stack vanilla (sin frameworks) | Simplicidad, sin dependencias, carga rápida |
| 12 ago 2026 | localStorage como persistencia | Sin backend requerido, datos privados y offline |

---

## Retrospectiva por Sprint

### Sprint 0 — (Pendiente)
| Categoría | Comentarios |
|-----------|-------------|
| 🟢 Qué salió bien | — |
| 🟡 Qué mejorar | — |
| 🔴 Qué no funcionó | — |
| 📋 Acciones | — |

---

## Próximos Pasos Inmediatos

1. ⬜ Iniciar Sprint 0: crear estructura de carpetas del proyecto
2. ⬜ Implementar `index.html` con shell SPA completo
3. ⬜ Desarrollar `css/styles.css` con sistema de diseño dark premium
4. ⬜ Implementar router hash-based en `app.js`
5. ⬜ Crear capa de persistencia `storage.js`

---

*Última actualización: 12 de agosto de 2026 | Sprint 0 en curso*
