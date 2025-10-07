# 🚀 Roadmap - App de Gestión de Negocio

## Stack Tecnológico

```
Angular 20 Zoneless + Signals + Standalone Components
    ↕️
Supabase Client (@supabase/supabase-js)
    ↕️
Supabase (PostgreSQL + Auth + Real-time + Storage)
```

---

## Fase 0: Setup y Configuración

### 0.1 Configuración Supabase
- [ ] Crear proyecto en Supabase
- [ ] Configurar autenticación (email/password)
- [ ] Instalar `@supabase/supabase-js` en Angular
- [ ] Configurar environment variables
- [ ] Setup interceptors para auth tokens

### 0.2 Database Schema
> **Ver schema completo en:** [Database-Schema-Updated.md](Database-Schema-Updated.md)

**Resumen de tablas principales:**
- `customers` - Clientes con email, phone, address, notes, active
- `products` - Catálogo de productos con precios
- `orders` - Pedidos con estados y notas
- `order_items` - Items de pedidos (relación many-to-many)
- `material_types` - Tipos de materia prima con stock
- `material_consumption` - Registro de consumos
- `gas_consumption` - Consumo de gas
- `cash_movements` - Ingresos y gastos
- `system_config` - Configuración global

**Funcionalidades automáticas:**
- Cálculo total de pedidos
- Reducción automática de stock
- Generación de ingresos al entregar
- Triggers para timestamps
- RLS policies completas

### 0.3 Angular Setup
- [ ] Configurar guards de autenticación
- [ ] Crear servicios base para Supabase
- [ ] Configurar routing con lazy loading
- [ ] Setup de interceptors para manejo de errores
- [ ] Configurar signals para estado global

---

## Fase 1: Core Foundation (Sprint 1-2)

### 1.1 Autenticación y Layout
- [ ] Página de login/registro
- [ ] Guard de autenticación
- [ ] Layout principal con sidebar/header
- [ ] Navegación principal
- [ ] Logout functionality

### 1.2 Servicios Base
- [ ] AuthService con Supabase
- [ ] BaseService genérico para CRUD
- [ ] ErrorHandlerService
- [ ] NotificationService
- [ ] CacheService para datos locales

### 1.3 Componentes Shared
- [ ] Loading spinner
- [ ] Confirmación dialogs
- [ ] Form components base
- [ ] Data table genérica
- [ ] Alert/notification component

---

## Fase 2: Gestión de Clientes (Sprint 3-4)

### 2.1 CRUD Clientes
- [ ] Lista de clientes con búsqueda/filtros
- [ ] Formulario crear/editar cliente
- [ ] Eliminar cliente (con confirmación)
- [ ] Validaciones de formulario

### 2.2 Detalle Cliente
- [ ] Vista detalle del cliente
- [ ] Historial de pedidos del cliente
- [ ] Estadísticas del cliente
- [ ] Botón "Crear pedido" desde cliente

### 2.3 Tests
- [ ] Unit tests para ClientService
- [ ] Component tests para formularios
- [ ] E2E tests para flujo completo

---

## Fase 3: Gestión de Pedidos (Sprint 5-6)

### 3.1 CRUD Pedidos
- [ ] Lista de pedidos con filtros (estado, fecha, cliente)
- [ ] Formulario crear pedido (selector cliente)
- [ ] Actualizar estado de pedido
- [ ] Eliminar pedido

### 3.2 Flujo de Estados
- [ ] Estado: Pendiente → En Proceso → Entregado
- [ ] Botones de acción según estado
- [ ] Historial de cambios de estado
- [ ] Notificaciones de cambio de estado

### 3.3 Integraciones
- [ ] Auto-generar ingreso en caja al marcar "Entregado"
- [ ] Reducir stock al confirmar pedido
- [ ] Validar stock disponible antes de crear pedido

---

## Fase 4: Inventario y Fabricación (Sprint 7-8)

### 4.1 Gestión de Materia Prima
- [ ] Lista de tipos de materia prima
- [ ] CRUD tipos de materia prima
- [ ] Control de stock actual
- [ ] Configuración de stock mínimo

### 4.2 Registro de Consumos
- [ ] Formulario consumo materia prima
- [ ] Formulario consumo gas
- [ ] Reducción automática de stock
- [ ] Historial de consumos

### 4.3 Alertas y Reportes
- [ ] Alerta stock bajo (configurable)
- [ ] Reporte de consumos por período
- [ ] Proyección de stock

---

## Fase 5: Caja y Gastos (Sprint 9-10)

### 5.1 Registro de Movimientos
- [ ] Formulario registrar ingreso
- [ ] Formulario registrar gasto
- [ ] Categorización de gastos
- [ ] Vinculación automática con pedidos/consumos

### 5.2 Balance y Control
- [ ] Vista de saldo actual
- [ ] Historial de movimientos con filtros
- [ ] Validación saldo no negativo
- [ ] Reconciliación de caja

### 5.3 Reportes Financieros
- [ ] Reporte ingresos vs gastos
- [ ] Flujo de caja por período
- [ ] Export a Excel/PDF

---

## Fase 6: Dashboard y KPIs (Sprint 11-12)

### 6.1 Métricas Principales
- [ ] Coste de producción (materiales + gas)
- [ ] Beneficio neto (ingresos - gastos)
- [ ] Ventas totales del período
- [ ] Stock actual vs mínimo

### 6.2 Visualizaciones
- [ ] Gráficas de tendencias (Chart.js/ngx-charts)
- [ ] KPI cards con métricas clave
- [ ] Alertas visuales (stock bajo, saldo bajo)
- [ ] Comparativas período anterior

### 6.3 Funcionalidades Avanzadas
- [ ] Filtros por rango de fechas
- [ ] Export de reportes
- [ ] Dashboard configurable
- [ ] Real-time updates con Supabase subscriptions

---

## Fase 7: Optimizaciones y Deployment (Sprint 13)

### 7.1 Performance
- [ ] Lazy loading de módulos
- [ ] OnPush change detection strategy
- [ ] Caching de datos frecuentes
- [ ] Optimización de queries Supabase

### 7.2 Testing Completo
- [ ] Unit tests coverage > 80%
- [ ] Integration tests principales flujos
- [ ] E2E tests críticos
- [ ] Performance testing

### 7.3 Deployment
- [ ] Build optimization
- [ ] Environment configurations
- [ ] CI/CD pipeline
- [ ] Hosting (Vercel/Netlify)

---

## Dependencias del Proyecto

```json
{
  "dependencies": {
    "@angular/animations": "^20.3.0",
    "@supabase/supabase-js": "^2.x",
    "chart.js": "^4.x",
    "ng2-charts": "^6.x",
    "date-fns": "^3.x"
  },
  "devDependencies": {
    "@types/chart.js": "^2.x"
  }
}
```

## Estructura de Directorios

```
src/
├── app/
│   ├── core/              # Servicios singleton, guards, interceptors
│   ├── shared/            # Componentes, pipes, directives compartidos
│   ├── features/          # Módulos de funcionalidad
│   │   ├── auth/
│   │   ├── customers/
│   │   ├── orders/
│   │   ├── inventory/
│   │   ├── cashbox/
│   │   └── dashboard/
│   ├── layouts/           # Layout components
│   └── models/            # Interfaces y tipos TypeScript
```

## Criterios de Definición de Hecho (DoD)

Para cada feature:
- [ ] Código implementado y testeado
- [ ] Unit tests con coverage mínimo
- [ ] Documentación actualizada
- [ ] Code review aprobado
- [ ] Funcionalidad probada en entorno de desarrollo
- [ ] Sin regresiones en tests existentes