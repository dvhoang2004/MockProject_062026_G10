import React from "react";
import Routing from "./routes/Routing/Routing"; // Đường dẫn gọi file Routing bạn vừa sửa lúc nãy
import "./App.css"; // Giữ lại dòng này nếu muốn dùng CSS chung của dự án

function App() {
  return (
    <>
      {/* Gọi component Routing để quản lý việc hiển thị trang Dashboard */}
      <Routing />
    </>
  );
}

export default App;
