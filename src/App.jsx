import Layout from "@/components/Layout";
import config from "@/config/config";
import MainContent from "@/pages/MainContent";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{config.meta.title}</title>
        <meta name="title" content={config.meta.title} />
        <meta name="description" content={config.meta.description} />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href={config.meta.favicon} />
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FDA4AF" /> {/* Rose-300 color */}
      </Helmet>

      <AnimatePresence mode="wait">
        <Layout>
          <MainContent />
        </Layout>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
