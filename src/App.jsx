import { Nav, Hero, AboutPage, Services, Footer } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <AboutPage />
      </section>
      <section className="padding-x py-12">
        <Services />
      </section>
      <section className="bg-black padding-x padding-t pb-8 mt-12">
        <Footer />
      </section>
    </main>
  );
};

export default App;
