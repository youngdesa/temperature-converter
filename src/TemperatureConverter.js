import React, { useState, useEffect } from "react";

const ThermoController = () => {
  const [temperature, setTemperature] = useState(16); // Начальная температура
  const [isProtected, setIsProtected] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // Сообщение предупреждения

  // Изменение температуры
  const changeTemperature = (amount) => {
    if (isProtected) return; // Блокировка изменений, если "Защита" включена
    setTemperature((prevTemp) => prevTemp + amount);
  };
  
  // цвет прямоугольника в зависимости от температуры
  const getCircleColor = () => {
    if (temperature < 0) return "#2400BA"; // для температуры ниже -20°C
    if (temperature < 10) return "#55A1FF"; // для отрицательных температур
    if (temperature <= 16) return "#FFE11A"; // Желтый
    if (temperature <= 29) return "#FFA91A"; // Оранжевый
    return "#FC0221"; // Красный
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "110vh",
        backgroundColor: "#f2f3f4", // фон
        color: "#293133",
        fontFamily: "Arial, sans-serif",

      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "100px" }}>
        temperature converter
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          height: "100px",
          borderRadius: "5%",
          backgroundColor: getCircleColor(), // Цвет прямоугольника
        }}
      >
        {temperature}°C
      </div>
      {alertMessage && (
        <div
          style={{
            marginBottom: "80px",
            padding: "40px 20px",
            backgroundColor: "#ff4500",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {alertMessage}
        </div>
      )}
      <label style={{ marginBottom: "10px", fontSize: "16px" }}>
        <input
          type="checkbox"
          checked={isProtected}
          onChange={(e) => setIsProtected(e.target.checked)}
          style={{ marginRight: "10px" }}
        />
        blocking
      </label>
      <div style={{ }}>
        <button
          onClick={() => changeTemperature(-1)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <button
          onClick={() => changeTemperature(1)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ThermoController;
