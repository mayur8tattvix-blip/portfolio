
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { ScrollToTopOnRouteChange } from './components/ui/ScrollToTopOnRouteChange';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { MouseFollower } from './components/ui/MouseFollower';
import { ProgressBar } from './components/ui/ProgressBar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { PortfolioDetail } from './pages/PortfolioDetail';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnRouteChange />
        <ProgressBar />
        <MouseFollower />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/services" element={
            <Layout>
              <Services />
            </Layout>
          } />
          <Route path="/portfolio" element={
            <Layout>
              <Portfolio />
            </Layout>
          } />
          <Route path="/portfolio/:id" element={
            <Layout>
              <PortfolioDetail />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/team" element={
            <Layout>
              <Team />
            </Layout>
          } />
          <Route path="/blog" element={
            <Layout>
              <Blog />
            </Layout>
          } />
          <Route path="/blog/:id" element={
            <Layout>
              <BlogPost />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
