import { Nav, Hero, AboutPage } from './pages'

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
      
    </main>
  )
}

export default App