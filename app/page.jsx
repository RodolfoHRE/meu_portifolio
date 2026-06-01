import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from './sections/Hero';
import Projetos from './sections/Projetos';
import Skills from './sections/Skills';
import Contato from './sections/Contato';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projetos />
        <Skills />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
