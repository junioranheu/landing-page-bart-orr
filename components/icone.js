import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Icone({ icone, classes, url }) {
    const [animar, setAnimar] = useState('');

    function handleAnimar() {
        if (animar) {
            setTimeout(function () {
                setAnimar('');
            }, 1000);
        } else {
            setAnimar('animate__animated animate__bounce');
        }
    }

    return (
        <FontAwesomeIcon
            icon={icone}
            className={`${classes} ${animar}`}
            onMouseEnter={() => handleAnimar()}
            onMouseLeave={() => handleAnimar()}
            onClick={() => { window.open(url, '_blank') }}
        />
    )
}

