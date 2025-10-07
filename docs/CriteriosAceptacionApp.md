✅ Criterios de Aceptación – App de Gestión de Negocio
1. Gestión de Clientes
 Feature: Gestión de clientes  Scenario: Registrar un cliente   Given estoy en la pantalla de clientes   When ingreso nombre y contacto de un nuevo cliente y guardo   Then el cliente aparece en la lista de clientes  Scenario: Consultar historial de pedidos   Given existe un cliente con pedidos registrados   When selecciono al cliente en la lista   Then puedo ver su historial de pedidos 
2. Gestión de Pedidos
 Feature: Gestión de pedidos  Scenario: Crear un pedido   Given estoy en la pantalla de pedidos   When selecciono un cliente, ingreso cantidad y fecha   And guardo el pedido   Then el pedido aparece en la lista de pedidos  Scenario: Actualizar estado de pedido   Given existe un pedido pendiente   When cambio su estado a "Entregado"   Then el pedido muestra el estado actualizado 
3. Inventario y Fabricación
 Feature: Inventario y fabricación  Scenario: Registrar consumo de materia prima   Given estoy en la pantalla de inventario   When registro la cantidad de plátano usado   Then el stock de plátano se reduce correctamente  Scenario: Registrar consumo de gas   Given estoy en la pantalla de fabricación   When ingreso el consumo de gas   Then el sistema guarda el dato de consumo 
4. Caja y Gastos
 Feature: Caja y gastos  Scenario: Registrar un ingreso   Given estoy en la pantalla de caja   When registro un ingreso por ventas   Then el sistema muestra el ingreso en la lista de caja  Scenario: Registrar un gasto   Given estoy en la pantalla de caja   When registro un gasto de materia prima   Then el sistema descuenta el gasto en la caja 
5. Dashboard / KPIs
 Feature: Dashboard  Scenario: Ver métricas básicas   Given existen pedidos, ingresos y gastos registrados   When entro al dashboard   Then veo el coste de producción, beneficio, stock y ventas totales  Scenario: Alerta de stock bajo   Given el stock de plátano es inferior al mínimo configurado   When consulto el dashboard   Then aparece una alerta de stock bajo 
