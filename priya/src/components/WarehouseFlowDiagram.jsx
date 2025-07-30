import React from 'react';

const WarehouseFlowDiagram = () => {
  return (
    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
{`
+------------------+
|  Customer Places |
|    an Order      |
+------------------+
         |
         ▼
+-------------------------------------+
| Get Customer's Location (Address)   |
+-------------------------------------+
         |
         ▼
+---------------------------------------------+
| Check All Warehouses with Product in Stock  |
+---------------------------------------------+
         |
         ▼
+------------------------------------+
| Calculate Distance from Each       |
| Warehouse to Customer Location     |
+------------------------------------+
         |
         ▼
+-------------------------------------+
| Select Nearest Warehouse with Stock |
+-------------------------------------+
         |
         ▼
+-----------------------------+
| Fulfill Order from Warehouse|
| Update Inventory            |
+-----------------------------+
         |
         ▼
+-----------------------------+
| Show in Admin Dashboard     |
| “Shipped from: XYZ”         |
+-----------------------------+
`}
    </div>
  );
};

export default WarehouseFlowDiagram;
