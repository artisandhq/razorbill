import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout.tsx";
import Todo from "./Todo.tsx";
import Message from "./Message.tsx";
import Me from "./Me.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<App />} />
        <Route path="todo" element={<Todo />} />
        <Route path="message" element={<Message />} />
        <Route path="me" element={<Me />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
