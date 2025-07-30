import React, { useState } from "react";

const NewLaunchProductGrid = () => {
  const animatedProducts = [
    {
      id: 1,
      imageSrc:
        "https://cdn.wccftech.com/wp-content/uploads/2023/06/Samsung-Galaxy-Z-Flip-Fold-5-Press-Render-720x489-transformed.jpeg",
      productName: "Galaxy Z fold 7",
      description:
        "The Galaxy Z Fold 7 is Samsung's latest foldable smartphone featuring a stunning foldable display, powerful performance, and versatile multitasking capabilities.",
      version: "2024",
      model: "SM-F936B",
      features: [
        "7.6-inch foldable Dynamic AMOLED display",
        "Snapdragon 8 Gen 3 processor",
        "12GB RAM, 512GB storage",
        "50MP main camera, 10MP under-display camera",
        "4400mAh battery with fast charging",
      ],
    },
    {
      id: 2,
      imageSrc:
        "https://th-i.thgim.com/public/incoming/2kr4y9/article69837548.ece/alternates/FREE_1200/Controversial%20by%20Dear%20Diary.jpg",
      productName: "Dear Diary Perfume",
      description:
        "Dear Diary Perfume offers a unique blend of floral and woody notes, perfect for everyday wear and special occasions.",
      version: "1.0",
      model: "DDP-100",
      features: [
        "Long-lasting fragrance",
        "Suitable for all occasions",
      ],
    },
    {
      id: 3,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOTMcmyiqYGPOl1AjpNH9OB0DSVnBcWFFTw&s",
      productName: "Dell inspiron 15",
      description:
        "Dell Inspiron 15 is a reliable laptop with powerful performance, ideal for work and entertainment.",
      version: "15-5520",
      model: "Inspiron",
      features: [
        "Intel Core i7 12th Gen",
        "16GB RAM, 512GB SSD",
        "15.6-inch FHD display",
        "Windows 11 Home",
      ],
    },
    {
      id: 4,
      imageSrc:
        "https://image-us.samsung.com/SamsungUS/WD90F53AVS_01_Dark_Steel_SCOM.jpg?$default-400-jpg$",
      productName: "Samsung Bespoke AI Wash & Dry",
      description:
        "Samsung Bespoke AI Wash & Dry offers smart washing and drying with AI technology for efficient laundry care.",
      version: "2023",
      model: "WD90T754DBX",
      features: [
        "AI-powered washing and drying",
        "9kg wash, 5kg dry capacity",
        "Energy efficient",
        "SmartThings app control",
      ],
    },
    {
      id: 5,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQisFw7nuNlFZ3ggK6W-hgzvOZowr_S88yevrOjm5HUvKvx5Z19R8mkB9d5ySghXjtYUuzEHVZBV00AO0eo2NQ4kxN5HiF_wB3XPgiui0QVv4o4c2EkH-21cA",
      productName: "Apple Watch Ultra 2",
      description:
        "Apple Watch Ultra 2 features advanced health monitoring and rugged design for outdoor enthusiasts.",
      version: "2nd Gen",
      model: "A2684",
      features: [
        "Advanced health sensors",
        "Rugged titanium case",
        "Up to 36 hours battery life",
        "Water resistant up to 100m",
      ],
    },
    {
      id: 6,
      imageSrc:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/22525.png",
      productName: "Wireless Earbuds",
      description:
        "Wireless Earbuds provide high-quality sound and comfortable fit for music lovers on the go.",
      version: "X100",
      model: "WE-X100",
      features: [
        "Bluetooth 5.2",
        "Noise cancellation",
        "24-hour battery life",
        "Sweat resistant",
      ],
    },
    {
      id: 7,
      imageSrc:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcSLqC02CzaU226upNHNpwncgBMgdHDDPt45dq4yOY42ZQXYX2XBlHleIeOjjjuzmsgu-zabGMYH",
      productName: "Meta Smart Glasses",
      description:
        "Meta Smart Glasses combine style and technology to offer augmented reality experiences.",
      version: "1.0",
      model: "MSG-AR1",
      features: [
        "Voice control",
        "Lightweight design",
        "Built-in camera",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedProduct(null), 300); // match fade-out duration
  };

  return (
    <>
      <h2>New Launch Products</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        {animatedProducts.map((product) => (
          <div
            key={product.id}
            style={{ cursor: "pointer", textAlign: "center", width: 150 }}
            onClick={() => openModal(product)}
          >
            <img
              src={product.imageSrc}
              alt={product.productName}
              style={{ width: "150px", height: "150px", borderRadius: "8px", objectFit: "cover" }}
            />
            <p>{product.productName}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: isVisible ? "rgba(0,0,0,0.6)" : "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
            transition: "opacity 300ms ease",
            backdropFilter: isVisible ? "blur(5px)" : "none",
            zIndex: 10000,
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "20px",
              maxWidth: "400px",
              width: "90%",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              transition: "transform 300ms ease",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{selectedProduct.productName}</h3>
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.productName}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
            <p>{selectedProduct.description}</p>
            <p><strong>Version:</strong> {selectedProduct.version}</p>
            <p><strong>Model:</strong> {selectedProduct.model}</p>
            <div>
              <strong>Features:</strong>
              <ul>
                {selectedProduct.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={closeModal}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewLaunchProductGrid;
