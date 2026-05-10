import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";

// Layout components
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function JournalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/journal" element={<JournalLayout><Journal /></JournalLayout>} />
        <Route path="/signup" element={<SignUpLayout><SignUp /></SignUpLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
