# 🗄️ Database Schema - Actualizado

## Schema PostgreSQL Completo

```sql
-- Usuarios (manejado por Supabase Auth)
-- auth.users tabla automática

-- Configuración del sistema
CREATE TABLE system_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  minimum_stock INTEGER DEFAULT 10,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Clientes
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  notes TEXT,                   -- Notas para describir al cliente
  active BOOLEAN DEFAULT true,  -- Cliente activo/inactivo
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Productos
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  base_price DECIMAL(10,2),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Estados de pedidos
CREATE TYPE order_status AS ENUM ('pending', 'in_process', 'delivered');

-- Pedidos
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  status order_status DEFAULT 'pending',
  order_date DATE NOT NULL,
  delivery_date DATE,
  total_amount DECIMAL(10,2),
  notes TEXT,                   -- Notas del pedido
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Items de pedidos (relación muchos a muchos entre orders y products)
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2),     -- Precio en el momento del pedido
  subtotal DECIMAL(10,2),       -- quantity * unit_price
  created_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Tipos de materia prima
CREATE TABLE material_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  unit VARCHAR(20) NOT NULL,    -- kg, litros, unidades
  minimum_stock INTEGER DEFAULT 0,
  current_stock INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Registro de consumos de materia prima
CREATE TABLE material_consumption (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  material_type_id UUID REFERENCES material_types(id),
  quantity_used INTEGER NOT NULL,
  order_id UUID REFERENCES orders(id), -- opcional, si es para un pedido específico
  consumption_date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Registro de consumo de gas
CREATE TABLE gas_consumption (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quantity_used DECIMAL(8,2) NOT NULL,
  consumption_date DATE DEFAULT CURRENT_DATE,
  cost DECIMAL(10,2),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Tipos de movimientos de caja
CREATE TYPE cash_movement_type AS ENUM ('income', 'expense');
CREATE TYPE expense_category AS ENUM ('materials', 'gas', 'other');

-- Movimientos de caja
CREATE TABLE cash_movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type cash_movement_type NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  category expense_category,    -- solo para gastos
  order_id UUID REFERENCES orders(id), -- si es ingreso por venta
  movement_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id)
);

-- Indexes para performance
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_order_date ON orders(order_date);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_cash_movements_type ON cash_movements(type);
CREATE INDEX idx_cash_movements_date ON cash_movements(movement_date);
CREATE INDEX idx_material_consumption_date ON material_consumption(consumption_date);
CREATE INDEX idx_gas_consumption_date ON gas_consumption(consumption_date);

-- RLS Policies (Row Level Security)
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE material_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE material_consumption ENABLE ROW LEVEL SECURITY;
ALTER TABLE gas_consumption ENABLE ROW LEVEL SECURITY;
ALTER TABLE cash_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_config ENABLE ROW LEVEL SECURITY;

-- Políticas para que cada usuario solo vea sus datos
CREATE POLICY "Users can only see their own data" ON customers 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON products 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON orders 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON order_items 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON material_types 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON material_consumption 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON gas_consumption 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can only see their own data" ON cash_movements 
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can access system config" ON system_config 
  FOR ALL USING (auth.uid() IS NOT NULL);

-- Triggers para actualizar timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_material_types_updated_at BEFORE UPDATE ON material_types 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Función para calcular total del pedido
CREATE OR REPLACE FUNCTION calculate_order_total(order_uuid UUID)
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(subtotal), 0) INTO total
    FROM order_items 
    WHERE order_id = order_uuid;
    
    UPDATE orders 
    SET total_amount = total, updated_at = NOW()
    WHERE id = order_uuid;
    
    RETURN total;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar stock al registrar consumo
CREATE OR REPLACE FUNCTION update_stock_on_consumption()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE material_types 
    SET current_stock = current_stock - NEW.quantity_used,
        updated_at = NOW()
    WHERE id = NEW.material_type_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_stock AFTER INSERT ON material_consumption
FOR EACH ROW EXECUTE FUNCTION update_stock_on_consumption();

-- Función para generar ingreso automático al entregar pedido
CREATE OR REPLACE FUNCTION create_income_on_delivery()
RETURNS TRIGGER AS $$
BEGIN
    -- Solo si cambia de no-entregado a entregado
    IF OLD.status != 'delivered' AND NEW.status = 'delivered' THEN
        INSERT INTO cash_movements (
            type, 
            amount, 
            description, 
            order_id, 
            movement_date,
            user_id
        ) VALUES (
            'income',
            NEW.total_amount,
            'Ingreso por pedido #' || NEW.id,
            NEW.id,
            CURRENT_DATE,
            NEW.user_id
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_create_income AFTER UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION create_income_on_delivery();
```

## Principales cambios:

### ✅ **Tabla `customers` actualizada:**
- `email` - Email del cliente
- `phone` - Teléfono específico  
- `address` - Dirección del cliente
- `notes` - **Notas para describir al cliente**
- `active` - Cliente activo/inactivo

### ✅ **Nueva tabla `products`:**
- Gestión de diferentes productos (empanadas, arepas, etc.)
- `base_price` - Precio base del producto
- `active` - Producto disponible o no

### ✅ **Tabla `orders` mejorada:**
- `notes` - Notas específicas del pedido
- Eliminado `quantity` (ahora en `order_items`)

### ✅ **Nueva tabla `order_items`:**
- Relación muchos a muchos orders ↔ products
- `quantity` - Cantidad de cada producto
- `unit_price` - Precio en el momento del pedido
- `subtotal` - Cálculo automático

### ✅ **Funciones automáticas:**
- **Cálculo total pedido** - Se actualiza automáticamente
- **Reducción stock** - Al registrar consumo
- **Ingreso automático** - Al marcar pedido como entregado
- **Timestamps** - Se actualizan automáticamente

### ✅ **Indexes de performance:**
- Optimización para consultas frecuentes
- Búsquedas por fecha, cliente, estado

**El schema ahora soporta múltiples productos por pedido y tiene toda la información necesaria para el historial completo.**