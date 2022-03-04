import { faAmazon, faApple, faElementor, faItunes, faPinterest, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import ImagemDois from '../static/images/dois.webp';
import Logo from '../static/images/logo.webp';
import ImagemTres from '../static/images/tres.webp';
import ImagemUm from '../static/images/um.webp';
import Styles from '../styles/index.module.css';

export default function Index() {
  return (
    <div className={Styles.container}>
      <div className={Styles.divLogo}>
        <Image src={Logo} alt='' width={63} height={63} />
      </div>

      <div className={Styles.divCard} style={{ marginTop: '1.5vw' }}>
        <Image className={Styles.card} src={ImagemUm} alt='' width={504} height={504} />
      </div>

      <div style={{ marginTop: '2vw' }}>
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

      <div className={Styles.divCard} style={{ marginTop: '5vw' }}>
        <Image className={Styles.card} src={ImagemDois} alt='' width={857} height={857} />
      </div>

      <div style={{ marginTop: '2vw' }}>
        <span className={`${Styles.titulo} ${Styles.tituloDourado}`}>NAACP WINNER</span>
      </div>

      <div className={Styles.divBio} style={{ marginTop: '10vw' }}>
        <div className={Styles.divBioImagem}>
          <Image src={ImagemTres} alt='' width={632} height={860} />
        </div>

        <div className={Styles.divBioTexto}>
          <h1>BIO</h1>
          <h2>
            Bartholomew Orr II aka B2 breaks away from the trivialities of music, and instead chooses to focus on what matters most – advocating for the expression of emotion in its purest form.

            For Bart, music represents an all-encompassing surrender, a pledge to self-honesty or what he calls Barthology, the truth that’s too good to be true.

            Often soft-spoken and invariably sullen in his producing style, this Grammy nominated Stellar award-winning producer delves into deeper things of spirituality. Every beat is deeply rooted in conveying the most intimate moments of the human experience. Above all, it’s deep, it’s sensual – and it grooves.
          </h2>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

