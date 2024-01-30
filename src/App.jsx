import { Nav, Hero, AboutPage, Services, Footer } from './pages'

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>        
      </section>
      <section className="padding">
        <AboutPage/>        
      </section>
      <section  className="padding-x py-10">
        <Services/>        
      </section>
      <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
      
    </main>
  )
}

export default App