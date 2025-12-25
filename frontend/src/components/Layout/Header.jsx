import Nav from './Nav.jsx';
import Logo from '../../public/img/logo-verde.png';
const Header = () => {
  return (
    <div id='layout__header'>
        <div id='logo_container'>
          <img src={Logo} alt='Logo de la pagina' title='Logo de la pagina' className='layout__header--logo'/>
        </div>
        <Nav/>
    </div>
  )
}

export default Header