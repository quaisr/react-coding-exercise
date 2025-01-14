import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EuiProvider } from "@elastic/eui";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </EuiProvider>
  </StrictMode>
);
