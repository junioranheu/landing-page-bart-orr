import Link from 'next/link';
import Styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <span>
                <Link href='https://github.com/junioranheu'>
                    <a target='_blank'>
                        <span>
                            @junioranheu
                        </span>
                    </a>
                </Link> |&nbsp;

                {new Date().getFullYear()}

                <span className={Styles.spanBarraVertical}> | </span>

                <span className={Styles.spanDireitosReservados}>
                    All rights reserved to&nbsp;
                    <Link href='https://www.instagram.com/pardaljoao/?hl=en'>
                        <a target='_blank'>
                            <span>
                                @pardaljoao
                            </span>
                        </a>
                    </Link>
                </span>
            </span>
        </div>
    )
}

