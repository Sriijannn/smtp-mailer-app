import { Routes, Route } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import EmailSender from "@/pages/EmailSender";
import HowToUse from "@/pages/HowToUse";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<EmailSender />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
