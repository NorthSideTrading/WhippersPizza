import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Whippers Pizza - Augusta, ME | Best Local Pizza</title>
      <meta name="description" content="Whippers Pizza serves Augusta's best hometown pizza with fresh ingredients and authentic recipes. Order online or visit us today!" />
    </Helmet>
    <App />
  </HelmetProvider>
);
