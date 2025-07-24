import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './features/home';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { SyncStatusProvider } from './context/SyncStatusContext';
import { ToastProvider } from './hooks/useToast';
import { ThemeProvider } from './context/ThemeContext';
import { ScreensaverProvider } from './context/ScreensaverContext';
import Screensaver from './components/Screensaver';
import './App.css';

// Lazy load non-critical pages for better performance
const AboutPage = lazy(() =>
  import('./features/about').then(module => ({ default: module.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./features/contact').then(module => ({ default: module.ContactPage }))
);
const TermsPage = lazy(() =>
  import('./features/legal').then(module => ({ default: module.TermsPage }))
);
const PrivacyPage = lazy(() =>
  import('./features/legal').then(module => ({ default: module.PrivacyPage }))
);
const DistroDetailPage = lazy(() =>
  import('./features/distributions').then(module => ({ default: module.DistroDetailPage }))
);
const IRCServerPage = lazy(() =>
  import('./features/irc').then(module => ({ default: module.IRCServerPage }))
);
const VolunteerPage = lazy(() =>
  import('./features/volunteer').then(module => ({ default: module.VolunteerPage }))
);
const MuseumPage = lazy(() =>
  import('./features/museum').then(module => ({ default: module.MuseumPage }))
);
// Lazy load the OnboardingPage
const OnboardingPage = lazy(() =>
  import('./features/onboarding').then(module => ({ default: module.OnboardingPage }))
);
// Lazy load the CodingWeirdStuffPage
const CodingWeirdStuffPage = lazy(() => import("./features/coding-weird-stuff").then(module => ({ default: module.CodingWeirdStuffPage })))
// Lazy load the LinuxGenealogyPage
const LinuxGenealogyPage = lazy(() => import("./features/linux-geneology").then(module => ({ default: module.LinuxGenealogyPage })))
// Lazy load the TerryDavisVideosPage
const TerryDavisVideosPage = lazy(() => import("./features/terry-davis-videos").then(module => ({ default: module.TerryDavisVideosPage })))

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <SyncStatusProvider>
            <ScreensaverProvider>
              <Router>
                <div className="flex flex-col min-h-screen bg-[#121212] text-white">
                  <Header />
                  <main className="flex-grow">
                    <ErrorBoundary>
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/volunteer" element={<VolunteerPage />} />
                          <Route path="/terms" element={<TermsPage />} />
                          <Route path="/privacy" element={<PrivacyPage />} />
                          <Route path="/distro/:id" element={<DistroDetailPage />} />
                          {/* Route hidden as requested */}
                          {/* <Route path="/flash-iso" element={<FlashISOPage />} /> */}
                          <Route path="/irc" element={<IRCServerPage />} />
                          <Route path="/museum" element={<MuseumPage />} />
                          <Route path="/onboarding" element={<OnboardingPage />} />
                          <Route path="/coding-weird-stuff" element={<CodingWeirdStuffPage />} />
                          <Route path="/linux-geneology" element={<LinuxGenealogyPage />} />
                          <Route path="/terry-davis-videos" element={<TerryDavisVideosPage />} />
                        </Routes>
                      </Suspense>
                    </ErrorBoundary>
                  </main>
                  <Footer />
                  <Screensaver />
                </div>
              </Router>
            </ScreensaverProvider>
          </SyncStatusProvider>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
