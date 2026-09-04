import "./Header.css"
import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js'
import IconsHeader from '../IconsHeader/index.js'

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconsHeader />
        </header>
    )
}

export default Header;