# Vitest TDD Setup para Angular 20

## ✅ Configuración Completada

Se ha configurado exitosamente **Vitest** para desarrollo TDD en este proyecto Angular 20.

### 🛠️ Configuración Instalada

- **Vitest** 3.2.4 - Test runner rápido
- **@vitest/ui** - Interfaz gráfica para tests
- **jsdom** - Environment de browser para tests
- **Angular Testing Utilities** integradas

### 📁 Archivos de Configuración

- `vitest.config.ts` - Configuración principal de Vitest
- `src/test-setup.ts` - Setup de Angular testing environment
- `tsconfig.spec.json` - Configuración TypeScript para tests
- Scripts npm actualizados para TDD

### 🚀 Scripts Disponibles

```bash
# Ejecutar tests una vez
npm run test:run

# Modo TDD (watch mode)
npm run tdd
npm run test:watch

# Interfaz gráfica
npm run test:ui

# Tests con cobertura
npm run test:coverage
```

### ✅ Features Soportadas

- **Signals Testing** - Testing completo de Angular signals
- **Service Testing** - Dependency injection y services
- **Utility Functions** - Funciones puras y lógica de negocio
- **Fast Execution** - Tests optimizados para ciclos TDD rápidos
- **Coverage Reports** - Reportes de cobertura integrados
- **TypeScript Support** - Soporte completo de TS y Angular types

### 📊 Tests Actuales

- ✅ **MathUtils** (7 tests) - Funciones de utilidad matemática
- ✅ **CalculatorService** (8 tests) - Servicio con signals y computed

### 🎯 Estructura Recomendada para Tests

```
src/
├── app/
│   ├── shared/
│   │   ├── services/
│   │   │   ├── *.service.ts
│   │   │   └── *.service.spec.ts
│   │   └── utils/
│   │       ├── *.util.ts
│   │       └── *.util.spec.ts
│   ├── features/
│   │   └── [feature]/
│   │       ├── *.component.ts
│   │       └── *.component.spec.ts
│   └── core/
└── test-setup.ts
```

### 🔄 Flujo TDD Recomendado

1. **Red**: Escribir test que falle
2. **Green**: Implementar código mínimo para pasar
3. **Refactor**: Mejorar código manteniendo tests verdes

```bash
# Iniciar modo TDD
npm run tdd

# En otra terminal, desarrollo normal
npm start
```

### 📝 Ejemplo de Test

```typescript
import { describe, it, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { MyService } from './my.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService);
  });

  it('should work correctly', () => {
    expect(service.method()).toBe('expected');
  });
});
```

### ⚠️ Notas Importantes

- Los tests de componentes con `input()` signals requieren configuración adicional
- Vitest es compatible con Angular Dependency Injection
- Los tests corren en entorno jsdom optimizado para velocidad
- Coverage reports se generan en `coverage/` directory

¡Setup completo y listo para TDD! 🎉