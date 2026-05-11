import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Journal = lazy(() => import("./pages/Journal"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminPostPage = lazy(() => import("./pages/AdminPostPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));

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

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Suspense fallback={<LoadingScreen />}>
        {children}
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/journal" element={<JournalLayout><Journal /></JournalLayout>} />
        <Route path="/journal/:id" element={<JournalLayout><PostDetailPage /></JournalLayout>} />
        <Route path="/signup" element={<SignUpLayout><SignUp /></SignUpLayout>} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/post/new" element={<AdminLayout><AdminPostPage /></AdminLayout>} />
        <Route path="/admin/post/:id" element={<AdminLayout><AdminPostPage /></AdminLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
