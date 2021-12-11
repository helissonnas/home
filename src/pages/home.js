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
    <div className="container m-8 h-full">
      <Header language={props.language} changeLanguage={props.changeLanguage} />
      <Banner />
      <section className="flex flex-col items-end justify-end">
        <Section title={'Formação'} card={EducationCard} language={props.language} items={store.education} />
        <Section title={'Experiência Profissional'} card={ExperienceCard} language={props.language} items={store.experience} />
        <Section title={'Destaques'} card={HighlightCard} items={store.highlights} language={props.language} />
        <Board title={'Portfólio'} items={[
          {name: 'FinFast', color: 'yellow-400', textColor: 'yellow-900', logo: '../assets/finfast.png'}, 
          {name: 'Sabia', color: 'blue-300', textColor: 'blue-900', logo: '../assets/sabia.png'}, 
          {name: 'Leite', color: 'gray-200', textColor: 'gray-600', logo: '../assets/leite.png'}]} />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;