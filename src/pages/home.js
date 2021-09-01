import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

function Home() {
  return (
    <div className="container m-8 h-full">
      <Header />
      <Banner />
      <Section title={'Formação'} items={['UFCG']} />
      <Section title={'Experiência Profissional'} items={['Synchro', 'LSI']} />
      <Section title={'Destaques'} items={['Entrevista']} />
      <Section title={'Portfólio'} items={['1', '2', '3']} />
      <Section title={'Contato'} items={[]} />
      <Footer />
    </div>
  );
}

export default Home;