import UFCGLogo from '../assets/icons/ufcg-logo.png';
import SynchroLogo from '../assets/icons/synchro-logo.png';
import InvilliaLogo from '../assets/icons/invillia.png';
import LSILogo from '../assets/icons/lsi.png';
import dlocalLogo from '../assets/icons/dlocal.png';
import PaperIcon from '../assets/icons/paper.png';
import NewsIcon from '../assets/icons/news.png';
import PrizeIcon from '../assets/icons/prize.png';
import FomacaoIcon from '../assets/formacao.png';
import ExperieciaIcon from '../assets/experiencia.png';
import DestaqueIcon from '../assets/destaque.png';

function ImageProvider(imageName) {
  const images = {
    ufcg: UFCGLogo,
    synchro: SynchroLogo,
    invillia: InvilliaLogo,
    lsi: LSILogo,
    paper: PaperIcon,
    news: NewsIcon,
    prize: PrizeIcon,
    formacao: FomacaoIcon,
    experiencia: ExperieciaIcon,
    destaque: DestaqueIcon,
    dlocal: dlocalLogo,
  };

  return images[imageName];
}

export default ImageProvider;
