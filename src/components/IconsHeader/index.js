import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from "styled-components";

const IconList = styled.ul`
    display: flex;
    align-items: center;
`;

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`;

const icones = [
    perfil,
    sacola
];

function IconsHeader() {
    return (
        <IconList>
            {icones.map((icone) => (
                <Icon><img src={icone} /></Icon>
            ))}
        </IconList>
    )
}

export default IconsHeader;