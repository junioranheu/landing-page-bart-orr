import { faAmazon, faApple, faElementor, faItunes, faPinterest, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '../static/images/logo.webp';
import ImagemUm from '../static/images/um.webp';
import Styles from '../styles/index.module.css';

export default function Index() {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <Image src={Logo} alt='' width={65} height={65} />
      </div>

      <div className={Styles.divCard}>
        <Image className={Styles.card} src={ImagemUm} alt='' width={504} height={504} />
      </div>

      <div className={Styles.margemTexto}>
        <span className={Styles.titulo}>OUT NOW</span>
      </div>

      <div className={Styles.margemPequena}>
        <FontAwesomeIcon icon={faAmazon} className={Styles.icone} />
        <FontAwesomeIcon icon={faApple} className={Styles.icone} />
        <FontAwesomeIcon icon={faElementor} className={Styles.icone} />
        <FontAwesomeIcon icon={faItunes} className={Styles.icone} />
        <FontAwesomeIcon icon={faPinterest} className={Styles.icone} />
        <FontAwesomeIcon icon={faSpotify} className={Styles.icone} />
      </div>
    </div>
  )
}

