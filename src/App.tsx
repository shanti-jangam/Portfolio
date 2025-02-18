import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Home } from "./components/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { theme } from "./theme/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
