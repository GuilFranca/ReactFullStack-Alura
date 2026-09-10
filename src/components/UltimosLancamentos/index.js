import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="000"
                tamanhoFonte="36px"
                alinhamento="center"
            >
                Últimos lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;