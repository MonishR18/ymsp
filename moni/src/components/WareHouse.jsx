import React, { useState, useMemo, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import './WareHouse.css';

// Dummy warehouse data with extended info
const warehouses = [
  {
    id: 1,
    name: "Warehouse A",
    city: "Bengaluru",
    latitude: 12.9716,
    longitude: 77.5946,
    stock: 120,
    productType: "Electronics",
    lastShipmentDate: "2023-06-01",
    nextRestockDate: "2023-06-15",
    contactPerson: "John Doe",
    contactEmail: "john.doe@example.com",
    region: "South"
  },
  {
    id: 2,
    name: "Warehouse B",
    city: "Coimbatore",
    latitude: 11.0168,
    longitude: 76.9558,
    stock: 45,
    productType: "Apparel",
    lastShipmentDate: "2023-05-25",
    nextRestockDate: "2023-06-10",
    contactPerson: "Jane Smith",
    contactEmail: "jane.smith@example.com",
    region: "South"
  },
  {
    id: 3,
    name: "Warehouse C",
    city: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
    stock: 80,
    productType: "Electronics",
    lastShipmentDate: "2023-05-30",
    nextRestockDate: "2023-06-20",
    contactPerson: "Raj Patel",
    contactEmail: "raj.patel@example.com",
    region: "West"
  },
  {
    id: 4,
    name: "Warehouse Syavasa",
    city: "Bengaluru",
    latitude: 13.0100,
    longitude: 77.5000,
    stock: 70,
    productType: "Electronics",
    lastShipmentDate: "2023-06-05",
    nextRestockDate: "2023-06-18",
    contactPerson: "Suresh Kumar",
    contactEmail: "suresh.kumar@example.com",
    region: "South"
  },
  {
    id: 5,
    name: "Warehouse Konankunte",
    city: "Bengaluru",
    latitude: 12.9000,
    longitude: 77.5000,
    stock: 55,
    productType: "Apparel",
    lastShipmentDate: "2023-06-02",
    nextRestockDate: "2023-06-16",
    contactPerson: "Anita Rao",
    contactEmail: "anita.rao@example.com",
    region: "South"
  },
  {
    id: 6,
    name: "Warehouse RR Nagar",
    city: "Bengaluru",
    latitude: 12.9200,
    longitude: 77.4800,
    stock: 40,
    productType: "Electronics",
    lastShipmentDate: "2023-06-03",
    nextRestockDate: "2023-06-17",
    contactPerson: "Ramesh Bhat",
    contactEmail: "ramesh.bhat@example.com",
    region: "South"
  },
  {
    id: 7,
    name: "Warehouse Kanakpura",
    city: "Bengaluru",
    latitude: 12.8500,
    longitude: 77.4500,
    stock: 65,
    productType: "Apparel",
    lastShipmentDate: "2023-06-04",
    nextRestockDate: "2023-06-19",
    contactPerson: "Lakshmi Nair",
    contactEmail: "lakshmi.nair@example.com",
    region: "South"
  }
];

// Fixed user location (Bengaluru)
const userLocation = {
  latitude: 12.9716,
  longitude: 77.5946
};

// Map container style
const containerStyle = {
  width: '100%',
  height: '500px'
};

// Google Maps API key (hardcoded temporarily)
const GOOGLE_MAPS_API_KEY = 'AIzaSyAwY1pC4OJ7zEl3TkgwhMOhPDvm_ybSO1c';

// Haversine formula to calculate distance between two lat/lng points
function haversineDistance(lat1, lon1, lat2, lon2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const WareHouse = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  const [activeMarker, setActiveMarker] = useState(null);

  // Calculate nearest warehouse
  const nearestWarehouse = useMemo(() => {
    let minDist = Infinity;
    let nearest = null;
    warehouses.forEach(w => {
      const dist = haversineDistance(userLocation.latitude, userLocation.longitude, w.latitude, w.longitude);
      if (dist < minDist) {
        minDist = dist;
        nearest = w;
      }
    });
    return nearest;
  }, []);

  // Filters state
  const [stockFilter, setStockFilter] = useState('all'); // all, low, normal
  const [productTypeFilter, setProductTypeFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  // Filter warehouses based on filters
  const filteredWarehouses = useMemo(() => {
    return warehouses.filter(w => {
      let stockCond = true;
      if (stockFilter === 'low') stockCond = w.stock < 60;
      else if (stockFilter === 'normal') stockCond = w.stock >= 60;

      let productCond = productTypeFilter === 'all' || w.productType === productTypeFilter;
      let regionCond = regionFilter === 'all' || w.region === regionFilter;

      return stockCond && productCond && regionCond;
    });
  }, [stockFilter, productTypeFilter, regionFilter]);

  // Center map on user location
  const center = {
    lat: userLocation.latitude,
    lng: userLocation.longitude
  };

  const handleActiveMarker = useCallback((markerId) => {
    if (markerId === activeMarker) return;
    setActiveMarker(markerId);
  }, [activeMarker]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  // Unique product types and regions for filter dropdowns
  const productTypes = Array.from(new Set(warehouses.map(w => w.productType)));
  const regions = Array.from(new Set(warehouses.map(w => w.region)));

  return (
    <div className="warehouse-page">
      <div className="map-sidebar-container">
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
            onClick={() => setActiveMarker(null)}
          >
            {/* User location marker */}
            <Marker
              position={{ lat: userLocation.latitude, lng: userLocation.longitude }}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new window.google.maps.Size(40, 40)
              }}
              title="User Location"
            />

            {/* Warehouse markers */}
            {filteredWarehouses.map(w => {
              let iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'; // normal
              if (w.id === nearestWarehouse.id) iconUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
              else if (w.stock < 60) iconUrl = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';

              return (
                <Marker
                  key={w.id}
                  position={{ lat: w.latitude, lng: w.longitude }}
                  onClick={() => handleActiveMarker(w.id)}
                  icon={{
                    url: iconUrl,
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                  title={w.name}
                >
                  {activeMarker === w.id && (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div className="info-window">
                        <h3>{w.name}</h3>
                        <p><strong>ID:</strong> {w.id}</p>
                        <p><strong>Stock:</strong> {w.stock}</p>
                        <p><strong>Product Type:</strong> {w.productType}</p>
                        <p><strong>Last Shipment Date:</strong> {w.lastShipmentDate}</p>
                        <p><strong>Next Restock Date:</strong> {w.nextRestockDate}</p>
                        <p><strong>Contact:</strong> {w.contactPerson} ({w.contactEmail})</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              );
            })}
          </GoogleMap>
        </div>

        {/* Sidebar panel */}
        <div className="sidebar">
          <h2>Warehouses</h2>

          {/* Filters */}
          <div className="filters">
                <label>
                  Stock Level:
                  <select value={stockFilter} onChange={e => setStockFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="low">Low {'(< 60)'}</option>
                    <option value="normal">Normal {'(>= 60)'}</option>
                  </select>
                </label>

            <label>
              Product Type:
              <select value={productTypeFilter} onChange={e => setProductTypeFilter(e.target.value)}>
                <option value="all">All</option>
                {productTypes.map(pt => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </label>

            <label>
              Region:
              <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)}>
                <option value="all">All</option>
                {regions.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Warehouse list */}
          <div className="warehouse-list">
            {filteredWarehouses.map(w => (
              <div key={w.id} className="warehouse-card">
                <h3>{w.name} ({w.city})</h3>
                <p><strong>Stock:</strong> {w.stock}</p>
                <p><strong>Product Type:</strong> {w.productType}</p>
                <div className="card-buttons">
                  <button onClick={() => alert(`View More clicked for ${w.name}`)}>View More</button>
                  <button onClick={() => alert(`Edit clicked for ${w.name}`)}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WareHouse);
