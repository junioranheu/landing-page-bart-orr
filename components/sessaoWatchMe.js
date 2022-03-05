import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SessaoWatchMe({ styles, titulo, url, botao, isVideo, src, srcWidth, srcHeight }) {
    function redirecionarLink() {
        window.open(url, '_blank');
    }

    return (
        <React.Fragment>
            <div style={{ marginTop: '5vw' }}>
                <span className={styles.titulo}>{titulo}</span>
            </div>

            <div className={styles.divBotoes}>
                <Link href={url}>
                    <a className={styles.botao} target='_blank'>
                        <span>
                            {botao}
                        </span>
                    </a>
                </Link>
            </div>

            {isVideo ?
                (
                    <div className={styles.videoContainer} style={{ marginTop: '1.2vw' }}>
                        <iframe className={styles.card} src={url} frameBorder='0' allowFullScreen
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                    </div>
                ) : (
                    <div className={styles.divCard} style={{ marginTop: '1vw', cursor: 'pointer' }} title={`Watch now: ${titulo}`} onClick={() => redirecionarLink()}>
                        <Image className={styles.card} src={src} alt='' width={srcWidth} height={srcHeight} />
                    </div>
                )
            }

        </React.Fragment >
    )
}

