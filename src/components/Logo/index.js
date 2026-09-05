import logo from "../../images/logo.svg"
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  width: 50px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='Logo Alura Books'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;