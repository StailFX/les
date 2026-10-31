import React, { useState, useEffect } from "react";
import { getConfigValue, getNavigationValue } from "@brojs/cli";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [apiMessage, setApiMessage] = useState<string>("Загрузка...");

  const apiPath = getConfigValue("les.api") || "/api";
  const mainNav = getNavigationValue("les.main") || "/les";

  useEffect(() => {
    fetch(`${apiPath}/hello`)
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message || JSON.stringify(data)))
      .catch((err) => setApiMessage(`Ошибка API: ${err.message}`));
  }, [apiPath]);

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "32px",
        maxWidth: "600px",
        margin: "40px auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e5e7eb",
        color: "#1f2937",
      }}
    >
      <h1 style={{ fontSize: "24px", color: "#111827", marginBottom: "8px" }}>
        🚀 BroJS Hello World
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Микрофронтенд успешно смонтирован через <code>mount()</code> в хост-платформу!
      </p>

      <div
        style={{
          background: "#f3f4f6",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: "8px" }}>Параметры из BroJS Virtual Module:</div>
        <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
          <li>
            <strong>Навигация (les.main):</strong> <code>{mainNav}</code>
          </li>
          <li>
            <strong>Конфиг API (les.api):</strong> <code>{apiPath}</code>
          </li>
          <li>
            <strong>Ответ от stubs/api (/api/hello):</strong>{" "}
            <span style={{ color: "#059669", fontWeight: 500 }}>{apiMessage}</span>
          </li>
        </ul>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Кликнули: {count} раз
        </button>
        <span style={{ fontSize: "14px", color: "#6b7280" }}>
          (Проверка работы React State и хуков)
        </span>
      </div>
    </div>
  );
};

export default App;
