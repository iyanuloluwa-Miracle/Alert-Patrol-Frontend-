import { Nav, Hero, AboutPage, Services } from './pages'

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
      <section className="padding">
        <Services/>        
      </section>
      
    </main>
  )
}

export default App