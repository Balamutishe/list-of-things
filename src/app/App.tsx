import queryClient from "@shared/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Footer from "@widgets/footer";
import Header from "@widgets/header";
import Main from "@widgets/main";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
