import { Header } from "./components/header";
import { HomePage } from "./pages/Home/Home";
import { CharacterDetailsPage } from "./pages/characterDetails/CharacterDetailsPage";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
