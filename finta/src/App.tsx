import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="layout">
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
}
