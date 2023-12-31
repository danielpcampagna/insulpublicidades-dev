import Intro from "../components/Intro"
import Bar from "../components/Bar"
import Footer from "../components/Footer"
import Partnerships from "../components/Partnerships"
import Results from "../components/Results"
import Services from "../components/Services"
import { Where } from "../components/Where"
import FAQ from "../components/FAQ"

function App() {
  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Partnerships />
        <Results />
        <Services />
        <Where />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
