import { faAmazon, faApple, faFacebookSquare, faInstagramSquare, faSoundcloud, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Aviso } from '../components/aviso';
import Icone from '../components/icone';
import SessaoWatchMe from '../components/sessaoWatchMe';
import ImagemCinco from '../static/images/cinco.webp';
import ImagemDois from '../static/images/dois.webp';
import Logo from '../static/images/logo.webp';
import ImagemQuatro from '../static/images/quatro.webp';
import ImagemTres from '../static/images/tres.webp';
import ImagemUm from '../static/images/um.webp';
import Styles from '../styles/index.module.css';
import EmojiAleatorio from '../utils/emojiAleatorio';

export default function Index() {
  const linkAmazon = 'https://www.amazon.com/dp/B09RG95HP5/ref=sr_1_1?keywords=Bart+Orr&qid=1643628408&refinements=p_n_feature_browse-bin%3A625150011&rnid=625149011&s=dmusic&search-type=ss&sr=1-1&tag=linkfire-smarturl-20';
  const linkApple = 'https://music.apple.com/br/album/no-fear/1607557238';
  const linkYoutube = 'https://www.youtube.com/channel/UC7v-kdJUSvwp_abmvFrUYzg';
  const linkSpotify = 'https://open.spotify.com/album/0c9wsVQ8VQl0Cs0KRHfLLU';
  const linkSoundCloud = 'https://soundcloud.com/b2musiq?ref=clipboard&p=i&c=1&si=C17F375C95BD403985FC4DDBF36F3E96&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
  const linkFacebook = 'https://www.facebook.com/barthologhy';
  const linkInstagram = 'https://www.instagram.com/bart_orr/?utm_medium=copy_link';
  const linkTwitter = 'https://twitter.com/bart_orr?s=21';

  useEffect(() => {
    // Título da página;
    document.title = 'Bart Orr — Em React.js, Next.js';

    // Aviso;
    const msg =
      `Olá! ${EmojiAleatorio()}<br/><br/> 
      Essa landing page foi replicada, sem fins lucrativos, a fim de estudo apenas, utilizando React.js e Next.js, a partir de um projeto real, de outra pessoa.<br/><br/> 
      Todos direitos reservados à @pardaljoao e @bart_orr.`;
    Aviso.custom(msg, 20000);
  }, []);

  const [tamanhoTotalTelaY, setTamanhoTotalTelaY] = useState(0);
  function verificarTamanhoTotalTelaY() {
    const body = document.body;
    const html = document.documentElement;
    const tamanhoTotalTelaY = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    // console.log(tamanhoTotalTelaY);

    setTamanhoTotalTelaY(tamanhoTotalTelaY);
  } 

  useEffect(() => {
    // Scroll: https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js;
    function handleScroll(e) {
      const window = e.currentTarget;
      const yAtual = window.scrollY;
      // console.log(yAtual);

      const valorMinimo = 0.55;
      const valorMaximo = 0.90;
      const diferencaEntreMinMax = valorMaximo - valorMinimo;
      let valorGradient = valorMinimo + ((diferencaEntreMinMax / tamanhoTotalTelaY) * yAtual);
      // console.log(valorGradient);

      document.documentElement.style.setProperty('--porcentagem-gradient', valorGradient);
    }

    // Atribuir valor à variável tamanhoTotalTelaY, usada em handleScroll();
    verificarTamanhoTotalTelaY();

    // Scroll;
    if (tamanhoTotalTelaY) {
      if (process.env.NODE_ENV === 'production') {
        window.addEventListener('scroll', handleScroll);
      }
    }
  }, [tamanhoTotalTelaY]);

  return (
    <div className={Styles.container}>
      {/* Primeira parte */}
      <div className={`${Styles.margemLogo} ${Styles.logo}`}>
        <Image src={Logo} alt='' />
      </div>

      <div className={`${Styles.divCard} ${Styles.margemDivImagemUm} ${Styles.imagemUm}`}>
        <Image className={Styles.card} src={ImagemUm} alt='' />
      </div>

      <div className={Styles.margemTitulo}>
        <span className={Styles.titulo}>OUT NOW</span>
      </div>

      <div className={Styles.margemIcones}>
        <FontAwesomeIcon icon={faAmazon} className={Styles.icone} onClick={() => { window.open(linkAmazon, '_blank') }} />
        <FontAwesomeIcon icon={faApple} className={Styles.icone} onClick={() => { window.open(linkApple, '_blank') }} />
        <FontAwesomeIcon icon={faYoutube} className={Styles.icone} onClick={() => { window.open(linkYoutube, '_blank') }} />
        <FontAwesomeIcon icon={faSpotify} className={Styles.icone} onClick={() => { window.open(linkSpotify, '_blank') }} />
      </div>

      {/* Botões */}
      <div className={Styles.divBotoes}>
        <Link href='https://smarturl.it/B2NoFear'>
          <a className={Styles.botao} target='_blank'>
            <span>
              LISTEN HERE
            </span>
          </a>
        </Link>

        <Link href='https://smarturl.it/B2NoFear'>
          <a className={Styles.botao} target='_blank'>
            <span>
              SHOP HERE
            </span>
          </a>
        </Link>
      </div>

      {/* Foto grande */}
      <div className={`${Styles.divCard} ${Styles.margemFotoGrande} ${Styles.fotoGrande}`}>
        <Image className={Styles.card} src={ImagemDois} alt='' />
      </div>

      <div className={Styles.margemTitulo}>
        <span className={Styles.tituloDourado}>NAACP WINNER</span>
      </div>

      {/* Bio */}
      <div className={`${Styles.divBioWrapper} ${Styles.margemGigante}`}>
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

          <div className={Styles.margemIconesBio}>
            <Icone key={uuidv4()} icone={faYoutube} classes={Styles.iconeBio} url={linkYoutube} />
            <Icone key={uuidv4()} icone={faSoundcloud} classes={Styles.iconeBio} url={linkSoundCloud} />
            <Icone key={uuidv4()} icone={faFacebookSquare} classes={Styles.iconeBio} url={linkFacebook} />
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

      {/* Contato */}
      <div className={Styles.margemGigante}>
        <span className={Styles.titulo}>FOLLOW BART ORR</span>
      </div>

      <div className={Styles.margemIcones}>
        <FontAwesomeIcon icon={faFacebookSquare} className={Styles.icone} onClick={() => { window.open(linkFacebook, '_blank') }} />
        <FontAwesomeIcon icon={faInstagramSquare} className={Styles.icone} onClick={() => { window.open(linkInstagram, '_blank') }} />
        <FontAwesomeIcon icon={faTwitter} className={Styles.icone} onClick={() => { window.open(linkTwitter, '_blank') }} />
        <FontAwesomeIcon icon={faYoutube} className={Styles.icone} onClick={() => { window.open(linkYoutube, '_blank') }} />
      </div>

      <div className={Styles.divBotoes}>
        <Link href='/'>
          <a className={Styles.botao} target='_blank'>
            <span>
              CONTACT
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

