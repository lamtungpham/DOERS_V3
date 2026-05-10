import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Journal = lazy(() => import("./pages/Journal"));
const SignUp = lazy(() => import("./pages/SignUp"));

const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-surface">
    <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Layout components
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        {children}
      </Suspense>
    </>
  );
}

function JournalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        {children}
      </Suspense>
    </>
  );
}

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        {children}
      </Suspense>
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
