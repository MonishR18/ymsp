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
        "data:image/jpeg;base64,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",
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
