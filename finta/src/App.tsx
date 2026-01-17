import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-blue-50">
      <div className="h-50 w-120 rounded-full bg-white absolute left-[43%] transform -translate-x-1/2 -translate-y-1/2 blur-[70px]" />
      <Container>
        <div className="absolute h-full -left-3 w-px bg-neutral-200" />
        <div className="absolute h-full -right-3 w-px bg-neutral-200" />
        <Header />
        <Hero />
      </Container>

      {/* image div */}
      <div className="relative w-full mt-20 pb-20">
        <div className="absolute w-full -top-3 h-px bg-neutral-200" />
        <img src="/hero-finta.webp" className="max-w-5xl mx-auto [mask-image:linear-gradient(to_top,transparent,white)]" />
      </div>
    </div>
  );
}
