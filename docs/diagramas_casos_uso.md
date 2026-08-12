# 📐 Diagramas de Casos de Uso (UML) — GymTracker SPA

Este documento contiene los diagramas de casos de uso del sistema. Debido a que la aplicación es de uso personal y local (SPA sin backend), existe un único actor: el **Usuario**.

## 1. Diagrama General de Casos de Uso

```mermaid
graph LR
    %% Actor
    Usuario((Usuario))

    %% Sistema
    subgraph GymTracker SPA
        UC1([Gestionar Rutinas])
        UC2([Entrenar en Vivo])
        UC3([Consultar Historial])
        UC4([Analizar Progreso])
        UC5([Gestionar Datos])
    end

    %% Relaciones
    Usuario --> UC1
    Usuario --> UC2
    Usuario --> UC3
    Usuario --> UC4
    Usuario --> UC5

    classDef actor fill:#transparent,stroke:#e94560,stroke-width:2px,color:#e94560;
    classDef usecase fill:#1a1a2e,stroke:#0f3460,stroke-width:2px,color:#eaeaea;
    class Usuario actor;
    class UC1,UC2,UC3,UC4,UC5 usecase;
```

---

## 2. Gestión de Rutinas (Desglose)

```mermaid
graph TD
    Usuario((Usuario))

    subgraph Módulo: Rutinas
        UC1_1([Crear Rutina])
        UC1_2([Editar Rutina])
        UC1_3([Eliminar Rutina])
        UC1_4([Asignar Categoría])
        UC1_5([Gestionar Ejercicios])
    end

    Usuario --> UC1_1
    Usuario --> UC1_2
    Usuario --> UC1_3
    
    %% Includes/Extends
    UC1_1 -.->|<<include>>| UC1_4
    UC1_1 -.->|<<include>>| UC1_5
    UC1_2 -.->|<<include>>| UC1_5

    classDef actor fill:#transparent,stroke:#e94560,stroke-width:2px,color:#e94560;
    classDef usecase fill:#1a1a2e,stroke:#0f3460,stroke-width:2px,color:#eaeaea;
    class Usuario actor;
    class UC1_1,UC1_2,UC1_3,UC1_4,UC1_5 usecase;
```

---

## 3. Sesión de Entrenamiento en Vivo (Desglose)

```mermaid
graph TD
    Usuario((Usuario))

    subgraph Módulo: Sesión Activa
        UC2_1([Iniciar Sesión desde Rutina])
        UC2_2([Registrar Peso y Reps reales])
        UC2_3([Marcar Set Completado])
        UC2_4([Usar Temporizador de Descanso])
        UC2_5([Finalizar y Guardar Sesión])
    end

    Usuario --> UC2_1
    Usuario --> UC2_2
    Usuario --> UC2_3
    Usuario --> UC2_5
    
    %% Relaciones
    UC2_3 -.->|<<extend>>| UC2_4
    UC2_2 -.->|<<include>>| UC2_3

    classDef actor fill:#transparent,stroke:#e94560,stroke-width:2px,color:#e94560;
    classDef usecase fill:#1a1a2e,stroke:#0f3460,stroke-width:2px,color:#eaeaea;
    class Usuario actor;
    class UC2_1,UC2_2,UC2_3,UC2_4,UC2_5 usecase;
```

---

## 4. Consulta y Análisis (Desglose)

```mermaid
graph TD
    Usuario((Usuario))

    subgraph Módulo: Historial y Estadísticas
        UC3_1([Ver Lista de Sesiones])
        UC3_2([Filtrar Sesiones])
        UC3_3([Ver Detalle de Sesión])
        UC4_1([Ver Gráfica de Frecuencia])
        UC4_2([Ver Progreso por Ejercicio])
        UC4_3([Ver Records Personales 1RM])
    end

    Usuario --> UC3_1
    Usuario --> UC4_1
    Usuario --> UC4_2
    Usuario --> UC4_3
    
    UC3_1 -.->|<<extend>>| UC3_2
    UC3_1 -.->|<<include>>| UC3_3

    classDef actor fill:#transparent,stroke:#e94560,stroke-width:2px,color:#e94560;
    classDef usecase fill:#1a1a2e,stroke:#0f3460,stroke-width:2px,color:#eaeaea;
    class Usuario actor;
    class UC3_1,UC3_2,UC3_3,UC4_1,UC4_2,UC4_3 usecase;
```
