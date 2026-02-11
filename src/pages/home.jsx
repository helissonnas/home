import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Board from '../components/Board';
import Contact from '../components/Contact';
import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HighlightCard from '../components/HighlightCard';
import Section from '../components/Section';
import store from '../data/store';

function Home(props) {
  return (
    <div className="container mx-4 md:mx-8 my-8 h-full">
      <Header language={props.language} changeLanguage={props.changeLanguage} />
      <Banner />
      <section className="flex flex-col items-end justify-end">
        <Section
          title={props.language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
          card={ExperienceCard}
          language={props.language}
          items={store.experience}
        />
        <Section title={props.language === 'en' ? 'Education' : 'Formação'} card={EducationCard} language={props.language} items={store.education} />

        <Section title={props.language === 'en' ? 'Highlights' : 'Destaques'} card={HighlightCard} items={store.highlights} language={props.language} />
        
        <Board 
          title={props.language === 'en' ? 'Portfolio' : 'Portfólio'} 
          items={store.portfolio}
          language={props.language}
        />
        
        <Contact language={props.language}/>
      </section>
      <Footer />
    </div>
  );
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default Home;
