import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/Buildings.png'

const fullName = 'Patricia';
const personalQuote = 'No one is You and That is Your Power!';
const professionalSummary = 'IT professional with a diverse background in finance and real estate, poised to transition into technology. Demonstrated refinement of financial services, relationship management, and client advisory. Further honed customer-centricity and service excellence, developed negotiation, market analysis, and client satisfaction abilities.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
        <section className="career-path">
          <img src="/src/assets/careerpath.png" alt="photos of different careers" />
        </section>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph">I have worked on multiple projects that demonstrate my skills and experience through real-life examples. Each project is briefly described and includes links to code repositories, showcasing my ability to tackle challenging problems. To explore my work further, click the link below to visit my project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home