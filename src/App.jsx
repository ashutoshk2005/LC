import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinModal from "./components/JoinModal";
import VideoModal from "./components/VideoModal";

// ─── Pages (easily add/remove pages here) ───────────────────────────────────
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
// ─────────────────────────────────────────────────────────────────────────────

const PAGES = {
  home: HomePage,
  courses: CoursesPage,
  mentors: MentorsPage,
  blog: BlogPage,
  contact: ContactPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[currentPage] || HomePage;

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", minHeight: "100vh" }}>
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        onJoin={() => setShowJoinModal(true)}
      />

      <PageComponent
        navigate={navigate}
        onJoin={() => setShowJoinModal(true)}
        onVideo={() => setShowVideoModal(true)}
      />

      <Footer navigate={navigate} />

      {showJoinModal && <JoinModal onClose={() => setShowJoinModal(false)} />}
      {showVideoModal && <VideoModal onClose={() => setShowVideoModal(false)} />}
    </div>
  );
}
