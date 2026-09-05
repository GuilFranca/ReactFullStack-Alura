import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js'
import IconsHeader from '../IconsHeader/index.js'
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconsHeader />
        </HeaderContainer>
    )
}

export default Header;