import { faAmazon, faApple, faElementor, faFacebookSquare, faItunes, faPinterest, faSoundcloud, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icone from '../components/icone';
import SessaoWatchMe from '../components/sessaoWatchMe';
import ImagemCinco from '../static/images/cinco.webp';
import ImagemDois from '../static/images/dois.webp';
import Logo from '../static/images/logo.webp';
import ImagemQuatro from '../static/images/quatro.webp';
import ImagemTres from '../static/images/tres.webp';
import ImagemUm from '../static/images/um.webp';
import Styles from '../styles/index.module.css';

export default function Index() {
  useEffect(() => {
    document.title = 'Bart Orr';
  }, []);

  return (
    <div className={Styles.container}>
      {/* Primeira parte */}
      <div className={Styles.divLogo}>
        <Image src={Logo} alt='' width={63} height={63} />
      </div>

      <div className={Styles.divCard} style={{ marginTop: '1.5vw' }}>
        <Image className={Styles.card} src={ImagemUm} alt='' width={504} height={504} />
      </div>

      <div style={{ marginTop: '2vw' }}>
        <span className={Styles.titulo}>OUT NOW</span>
      </div>

      <div style={{ marginTop: '0.9vw' }}>
        <FontAwesomeIcon icon={faAmazon} className={Styles.icone} />
        <FontAwesomeIcon icon={faApple} className={Styles.icone} />
        <FontAwesomeIcon icon={faElementor} className={Styles.icone} />
        <FontAwesomeIcon icon={faItunes} className={Styles.icone} />
        <FontAwesomeIcon icon={faPinterest} className={Styles.icone} />
        <FontAwesomeIcon icon={faSpotify} className={Styles.icone} />
      </div>

      {/* Botões */}
      <div className={Styles.divBotoes}>
        <Link href='/'>
          <a className={Styles.botao}>
            <span>
              LISTEN HERE
            </span>
          </a>
        </Link>

        <Link href='/'>
          <a className={Styles.botao}>
            <span>
              SHOP HERE
            </span>
          </a>
        </Link>
      </div>

      {/* Foto grande */}
      <div className={Styles.divCard} style={{ marginTop: '5vw' }}>
        <Image className={Styles.card} src={ImagemDois} alt='' width={857} height={857} />
      </div>

      <div style={{ marginTop: '2vw' }}>
        <span className={Styles.tituloDourado}>NAACP WINNER</span>
      </div>

      {/* Bio */}
      <div className={Styles.divBioWrapper} style={{ marginTop: '9vw' }}>
        <div className={Styles.divBioEsquerda}>
          <Image className={`${Styles.card} ${Styles.imagemBio}`} src={ImagemTres} alt='' width={632} height={860} />
        </div>

        <div className={Styles.divBioDireita}>
          <span className={`${Styles.tituloDourado} ${Styles.tituloGigante}`}>BIO</span>

          <div className={Styles.spanBio}>
            <span>
              Bartholomew Orr II aka B2 breaks away from the trivialities of music, and instead chooses to focus on what matters most – advocating for the expression of emotion in its purest form.
            </span>

            <span>
              For Bart, music represents an all-encompassing surrender, a pledge to self-honesty or what he calls Barthology, the truth that’s too good to be true.
            </span>

            <span>
              Often soft-spoken and invariably sullen in his producing style, this Grammy nominated Stellar award-winning producer delves into deeper things of spirituality. Every beat is deeply rooted in conveying the most intimate moments of the human experience. Above all, it’s deep, it’s sensual – and it grooves.
            </span>
          </div>

          <div style={{ marginTop: '1.8vw' }}>
            <Icone key={uuidv4()} icone={faYoutube} classes={Styles.iconeBio} />
            <Icone key={uuidv4()} icone={faSoundcloud} classes={Styles.iconeBio} />
            <Icone key={uuidv4()} icone={faFacebookSquare} classes={Styles.iconeBio} />
          </div>
        </div>
      </div>

      {/* Sessão watch now #01 */}
      <SessaoWatchMe key={uuidv4()} styles={Styles} titulo={'BARTHOLOGY'}
        url={'https://music.apple.com/us/artist/barthology/1270923912'}
        botao={'WATCH ME'} isVideo={false} src={ImagemQuatro} srcWidth={545} srcHeight={545} />

      {/* Sessão watch now #02 */}
      <SessaoWatchMe key={uuidv4()} styles={Styles} titulo={'BART ORR AND FRIENDS'}
        url={'https://music.apple.com/us/artist/bart-orr-and-friends/1530045707'}
        botao={'WATCH ME'} isVideo={false} src={ImagemCinco} srcWidth={545} srcHeight={545} />

      {/* Sessão watch now #03 */}
      <SessaoWatchMe key={uuidv4()} styles={Styles} titulo={'TELL ME'}
        url={'https://www.youtube.com/embed/gksFlvowlnc'}
        botao={'WATCH ME'} isVideo={true} src={''} srcWidth={0} srcHeight={0} />

      {/* Sessão watch now #04 */}
      <SessaoWatchMe key={uuidv4()} styles={Styles} titulo={'BORDERLINE COVER'}
        url={'https://www.youtube.com/embed/hQaZlzoPOa8'}
        botao={'WATCH ME'} isVideo={true} src={''} srcWidth={0} srcHeight={0} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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

