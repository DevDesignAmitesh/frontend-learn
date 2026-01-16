import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="layout">
        <div className="horizontal-line" />
      <Container>
        <div className="left-line" />
        <div className="right-line" />
        <Navbar />
        <Hero />
      </Container>
    </div>
  );
}
