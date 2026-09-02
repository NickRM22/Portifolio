import { About } from './components/About'
import { CareerGoals } from './components/CareerGoals'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { portfolioData } from './data/portfolio'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div aria-hidden="true" id="top" />
      <a className="skip-link" href="#main-content">
        {portfolioData.ui.skipToContent}
      </a>
      <Header
        data={portfolioData}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
      <main id="main-content">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <CareerGoals data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Experience data={portfolioData} />
        <Education data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </>
  )
}

export default App
