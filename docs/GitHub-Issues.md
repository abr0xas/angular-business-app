# 📋 GitHub Issues - App de Gestión de Negocio

## Labels Sugeridos
```
Priority: 🔴 high, 🟡 medium, 🟢 low
Type: 🐛 bug, ✨ feature, 📚 docs, 🧪 testing, 🔧 setup
Phase: phase-0, phase-1, phase-2, phase-3, phase-4, phase-5, phase-6, phase-7
Module: auth, customers, orders, inventory, cashbox, dashboard, core, shared
```

---

## 🎯 Milestones

### Milestone 1: Foundation Setup (Fase 0-1)
**Due date:** Sprint 2
**Description:** Configuración inicial del proyecto con Supabase y autenticación básica

### Milestone 2: Customer Management (Fase 2)
**Due date:** Sprint 4
**Description:** Gestión completa de clientes con CRUD y historial

### Milestone 3: Order Management (Fase 3)
**Due date:** Sprint 6
**Description:** Sistema de pedidos con estados y vinculación a clientes

### Milestone 4: Inventory & Production (Fase 4)
**Due date:** Sprint 8
**Description:** Control de inventario y registro de consumos

### Milestone 5: Financial Management (Fase 5)
**Due date:** Sprint 10
**Description:** Caja, ingresos, gastos y balance

### Milestone 6: Analytics & KPIs (Fase 6)
**Due date:** Sprint 12
**Description:** Dashboard con métricas y reportes

### Milestone 7: Production Ready (Fase 7)
**Due date:** Sprint 13
**Description:** Optimizaciones, testing completo y deployment

---

## 📝 Issues por Fase

### 🔧 FASE 0: Setup y Configuración

#### #1 - Setup Supabase Project
**Labels:** `🔧 setup`, `🔴 high`, `phase-0`
```markdown
## Description
Configurar proyecto Supabase con autenticación y base de datos inicial

## Tasks
- [ ] Crear proyecto en Supabase
- [ ] Configurar autenticación email/password
- [ ] Instalar @supabase/supabase-js
- [ ] Configurar environment variables
- [ ] Setup cliente Supabase en Angular

## Acceptance Criteria
- Proyecto Supabase funcional
- Autenticación configurada
- Variables de entorno configuradas
- Cliente conectado desde Angular
```

#### #2 - Database Schema Implementation
**Labels:** `🔧 setup`, `🔴 high`, `phase-0`
```markdown
## Description
Implementar el schema completo de la base de datos PostgreSQL

## Tasks
- [ ] Crear tablas: customers, orders, material_types, etc.
- [ ] Configurar relaciones entre tablas
- [ ] Implementar RLS (Row Level Security) policies
- [ ] Insertar datos de configuración inicial
- [ ] Crear indexes para performance

## Acceptance Criteria
- Todas las tablas creadas según schema
- RLS configurado para multi-tenant
- Datos iniciales insertados
- Performance queries optimizada
```

#### #3 - Angular Project Structure
**Labels:** `🔧 setup`, `🟡 medium`, `phase-0`
```markdown
## Description
Configurar estructura de directorios y servicios base de Angular

## Tasks
- [ ] Crear estructura de carpetas (core, shared, features)
- [ ] Configurar routing con lazy loading
- [ ] Setup guards de autenticación
- [ ] Crear servicios base para Supabase
- [ ] Configurar interceptors de error

## Acceptance Criteria
- Estructura de carpetas organizada
- Routing configurado
- Guards funcionando
- Servicios base implementados
```

---

### 🔐 FASE 1: Core Foundation

#### #4 - Authentication System
**Labels:** `✨ feature`, `🔴 high`, `phase-1`, `auth`
```markdown
## Description
Sistema completo de autenticación con Supabase

## Tasks
- [ ] Página de login/registro
- [ ] AuthService con Supabase Auth
- [ ] AuthGuard para rutas protegidas
- [ ] Manejo de sesiones
- [ ] Logout functionality

## Acceptance Criteria
- Login/registro funcional
- Rutas protegidas con guard
- Sesión persistente
- Logout limpia sesión
```

#### #5 - Main Layout & Navigation
**Labels:** `✨ feature`, `🟡 medium`, `phase-1`, `core`
```markdown
## Description
Layout principal con sidebar y navegación

## Tasks
- [ ] Header con usuario logueado
- [ ] Sidebar con navegación principal
- [ ] Responsive design
- [ ] Breadcrumbs
- [ ] Menu collapse/expand

## Acceptance Criteria
- Layout responsive
- Navegación funcional
- Usuario visible en header
- Sidebar colapsable
```

#### #6 - Shared Components Library
**Labels:** `✨ feature`, `🟡 medium`, `phase-1`, `shared`
```markdown
## Description
Biblioteca de componentes compartidos

## Tasks
- [ ] Loading spinner component
- [ ] Confirmation dialog component
- [ ] Data table genérica
- [ ] Form components base
- [ ] Alert/notification component

## Acceptance Criteria
- Componentes reutilizables
- Props y events bien definidos
- Styling consistente
- Documentación componentes
```

---

### 👥 FASE 2: Gestión de Clientes

#### #7 - Customer CRUD Operations
**Labels:** `✨ feature`, `🔴 high`, `phase-2`, `customers`
```markdown
## Description
Sistema completo CRUD para gestión de clientes

## Tasks
- [ ] Lista de clientes con paginación
- [ ] Formulario crear cliente
- [ ] Formulario editar cliente
- [ ] Eliminar cliente con confirmación
- [ ] Búsqueda y filtros

## Acceptance Criteria
- CRUD completo funcional
- Validaciones de formulario
- Confirmación para eliminar
- Búsqueda por nombre/contacto
```

#### #8 - Customer Detail & History
**Labels:** `✨ feature`, `🟡 medium`, `phase-2`, `customers`
```markdown
## Description
Vista detalle del cliente con historial de pedidos

## Tasks
- [ ] Página detalle cliente
- [ ] Historial de pedidos del cliente
- [ ] Estadísticas del cliente (total pedidos, monto)
- [ ] Botón "Crear pedido" desde cliente
- [ ] Export historial

## Acceptance Criteria
- Vista detalle completa
- Historial ordenado por fecha
- Estadísticas correctas
- Navegación a crear pedido
```

---

### 📦 FASE 3: Gestión de Pedidos

#### #9 - Order Management System
**Labels:** `✨ feature`, `🔴 high`, `phase-3`, `orders`
```markdown
## Description
Sistema completo de gestión de pedidos

## Tasks
- [ ] Lista de pedidos con filtros
- [ ] Formulario crear pedido
- [ ] Selector de cliente en formulario
- [ ] Cálculo automático de totales
- [ ] Validación de stock disponible

## Acceptance Criteria
- CRUD pedidos funcional
- Vinculación con clientes
- Validaciones de negocio
- Filtros por estado/fecha/cliente
```

#### #10 - Order Status Workflow
**Labels:** `✨ feature`, `🟡 medium`, `phase-3`, `orders`
```markdown
## Description
Flujo de estados de pedidos y transiciones

## Tasks
- [ ] Estados: Pendiente → En Proceso → Entregado
- [ ] Botones de acción según estado
- [ ] Historial de cambios de estado
- [ ] Auto-generar ingreso al entregar
- [ ] Notificaciones de cambio

## Acceptance Criteria
- Transiciones de estado correctas
- Historial de cambios
- Ingreso automático en caja
- UI intuitiva para cambios
```

---

### 📊 FASE 4: Inventario y Fabricación

#### #11 - Material Types Management
**Labels:** `✨ feature`, `🟡 medium`, `phase-4`, `inventory`
```markdown
## Description
Gestión de tipos de materia prima

## Tasks
- [ ] CRUD tipos de materia prima
- [ ] Control de stock actual
- [ ] Configuración stock mínimo
- [ ] Unidades de medida
- [ ] Alertas stock bajo

## Acceptance Criteria
- Gestión completa materiales
- Stock actualizado en tiempo real
- Alertas configurables
- Validaciones de entrada
```

#### #12 - Consumption Tracking
**Labels:** `✨ feature`, `🔴 high`, `phase-4`, `inventory`
```markdown
## Description
Registro de consumos de materia prima y gas

## Tasks
- [ ] Formulario consumo materia prima
- [ ] Formulario consumo gas
- [ ] Reducción automática stock
- [ ] Vinculación con pedidos
- [ ] Historial de consumos

## Acceptance Criteria
- Registro de consumos funcional
- Stock se reduce automáticamente
- Historial consultable
- Reportes de consumo
```

---

### 💰 FASE 5: Caja y Gastos

#### #13 - Cash Flow Management
**Labels:** `✨ feature`, `🔴 high`, `phase-5`, `cashbox`
```markdown
## Description
Sistema de gestión de ingresos y gastos

## Tasks
- [ ] Formulario registrar ingreso
- [ ] Formulario registrar gasto
- [ ] Categorización de movimientos
- [ ] Cálculo saldo actual
- [ ] Validación saldo no negativo

## Acceptance Criteria
- Registro de movimientos funcional
- Categorías bien definidas
- Saldo calculado correctamente
- Validaciones de negocio
```

#### #14 - Financial Reports
**Labels:** `✨ feature`, `🟡 medium`, `phase-5`, `cashbox`
```markdown
## Description
Reportes financieros y análisis de caja

## Tasks
- [ ] Reporte ingresos vs gastos
- [ ] Flujo de caja por período
- [ ] Export a Excel/PDF
- [ ] Filtros por fecha/categoría
- [ ] Gráficas de tendencias

## Acceptance Criteria
- Reportes precisos
- Export funcional
- Filtros eficientes
- Visualizaciones claras
```

---

### 📈 FASE 6: Dashboard y KPIs

#### #15 - Business Intelligence Dashboard
**Labels:** `✨ feature`, `🔴 high`, `phase-6`, `dashboard`
```markdown
## Description
Dashboard ejecutivo con KPIs principales

## Tasks
- [ ] KPI cards (beneficio, ventas, stock)
- [ ] Gráficas de tendencias
- [ ] Alertas visuales
- [ ] Filtros por período
- [ ] Real-time updates

## Acceptance Criteria
- KPIs calculados correctamente
- Gráficas informativas
- Updates en tiempo real
- UI intuitiva y atractiva
```

#### #16 - Advanced Analytics
**Labels:** `✨ feature`, `🟡 medium`, `phase-6`, `dashboard`
```markdown
## Description
Análisis avanzado y proyecciones

## Tasks
- [ ] Comparativas período anterior
- [ ] Proyecciones de ventas
- [ ] Análisis de rentabilidad
- [ ] Dashboard configurable
- [ ] Export de reportes

## Acceptance Criteria
- Análisis precisos
- Proyecciones útiles
- Configuración personalizable
- Reports exportables
```

---

### 🚀 FASE 7: Production Ready

#### #17 - Performance Optimization
**Labels:** `🔧 setup`, `🟡 medium`, `phase-7`
```markdown
## Description
Optimizaciones de performance y UX

## Tasks
- [ ] Lazy loading implementado
- [ ] OnPush change detection
- [ ] Caching de datos
- [ ] Optimización queries Supabase
- [ ] Bundle size optimization

## Acceptance Criteria
- Carga inicial < 3 segundos
- Navegación fluida
- Queries optimizadas
- Bundle size reducido
```

#### #18 - Testing Suite
**Labels:** `🧪 testing`, `🔴 high`, `phase-7`
```markdown
## Description
Suite completa de testing

## Tasks
- [ ] Unit tests coverage > 80%
- [ ] Integration tests flujos principales
- [ ] E2E tests críticos
- [ ] Performance testing
- [ ] CI/CD pipeline

## Acceptance Criteria
- Coverage objetivo alcanzado
- Tests automatizados
- Pipeline funcionando
- No regresiones detectadas
```

#### #19 - Production Deployment
**Labels:** `🔧 setup`, `🔴 high`, `phase-7`
```markdown
## Description
Deployment a producción

## Tasks
- [ ] Environment configurations
- [ ] Build optimization
- [ ] Hosting setup (Vercel/Netlify)
- [ ] Domain configuration
- [ ] Monitoring setup

## Acceptance Criteria
- App deployed y accesible
- Environments separados
- Monitoring activo
- Performance óptimo
```

---

## 🏃‍♂️ Quick Start Commands

```bash
# Crear todos los issues
gh issue create --title "Setup Supabase Project" --body-file .github/issue-templates/setup-supabase.md --label "🔧 setup,🔴 high,phase-0" --milestone "Foundation Setup"

# Crear milestone
gh api repos/:owner/:repo/milestones --method POST --field title="Foundation Setup" --field description="Configuración inicial del proyecto" --field due_on="2025-11-07T00:00:00Z"

# Listar issues
gh issue list --state open --label "phase-0"
```