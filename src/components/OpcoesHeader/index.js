import styled from "styled-components";

const OpcaoesList = styled.ul`
    display: flex;
`;

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

const textoOpcoes = [
    "CATEGORIAS",
    "MINHA ESTANTE",
    "FAVORITOS"
];

function OpcoesHeader() {
    return (
        <OpcaoesList>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </OpcaoesList>
    )
}

export default OpcoesHeader;