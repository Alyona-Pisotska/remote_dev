import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookmarksContextProvider from './contexts/BookmarksContextProvider.tsx';
import ActiveIdContextProvider from './contexts/ActivIdContextProvider.tsx';
import SearchTextContextProvider from './contexts/SearchTextContextProvider.tsx';
import JobItemsContextProvider from './contexts/JobItemsContextProvider.tsx';
import App from "./components/App.tsx";
import "./index.css";

const queryClient =  new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <ActiveIdContextProvider>
          <SearchTextContextProvider>
            <JobItemsContextProvider>
              <App />
            </JobItemsContextProvider>
          </SearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
