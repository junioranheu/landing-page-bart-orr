import { faAmazon, faApple, faElementor, faItunes, faPinterest, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '../static/images/logo.webp';
import ImagemUm from '../static/images/um.webp';
import Styles from '../styles/index.module.css';

export default function Index() {
  return (
    <div className={Styles.container}>
      <div className={Styles.divLogo}>
        <Image src={Logo} alt='' width={63} height={63} />
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

      <div className={Styles.divBotoes}>
        <a className={Styles.botao} href='/'>
          <span>
            LISTEN HERE
          </span>
        </a>

        <a className={Styles.botao} href='/'>
          <span>
            SHOP HERE
          </span>
        </a>
      </div>
    </div>
  )
}

