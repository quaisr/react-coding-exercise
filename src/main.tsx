import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EuiProvider } from "@elastic/eui";

async function enableMocking() {
  const { worker } = await import("./api/mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </EuiProvider>
    </StrictMode>
  );
});
