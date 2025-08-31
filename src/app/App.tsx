import { MainPage } from "@pages/mainPage";
import queryClient from "@shared/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
