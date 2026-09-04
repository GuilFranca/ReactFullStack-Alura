import "./IconsHeader.css";

import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icones = [
  perfil,
  sacola
];

function IconsHeader() {
    return (
        <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src={icone} /></li>
            ))}
        </ul>
    )
}

export default IconsHeader;