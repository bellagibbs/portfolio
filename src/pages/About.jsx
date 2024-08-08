import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/aboutpic.png';

// Replace these variables with your information
const firstName = 'Patricia Gibbs';
const jobTitle = 'Real Estate Agent';
const company = 'Coldwell Banker Realty';
const mainDuty = 'Real Estate Agent';
const jobLocation = 'Atlanta, GA';
const briefJobDescription = 'A designated real estate agent currently helping clients buy and sell homes, ensuring every transaction runs smoothly from start to finish';
const careerObjective = 'Excited to transition into a tech career, where I can combine my love for creativity and technology to create impactful digital experiences.';
const personalLife = 'Originally from Brooklyn, New York, I now call Georgia home. I hold a Bachelor degree in Business with a concentration in Marketing from Central State University. When I am not helping clients find their dream homes, you will find me enjoying the outdoors, exploring parks, hiking trails, or simply relaxing by the water.I am also a proud dog mom to a mini poodle named Ginger. In my spare time, I love getting creative in the kitchen and experimenting with mixology.My passion for creativity extends to web design and development. I have designed numerous websites for my entrepreneurial projects and for friends and family.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company}  located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;