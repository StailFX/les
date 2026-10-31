import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// Экспорт по умолчанию нужен для SystemJS загрузчика в fire.app
export default () => <App />;

let rootElement: ReactDOM.Root | null = null;

// Функция монтирования, вызываемая платформой BroJS (fire.app)
export const mount = (
  Component: React.ComponentType = App,
  element: HTMLElement | null = document.getElementById("app")
) => {
  if (!element) {
    console.error("Mount target element #app not found");
    return;
  }
  rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Component />);

  // Поддержка Hot Module Replacement (HMR) в dev-режиме
  if ((module as any).hot) {
    (module as any).hot.accept("./app", () => {
      rootElement?.render(<Component />);
    });
  }
};

// Функция размонтирования, вызываемая платформой при уходе со страницы
export const unmount = () => {
  if (rootElement) {
    rootElement.unmount();
    rootElement = null;
  }
};
