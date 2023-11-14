import logo from '../../assets/logo.png'
import '../NavBarGlobal/NavBarGlobal.css'

function NavBarGlobal(){
    return(<>
        <div className="menu-global">
            <img src={logo} alt="" className='logo'/>
            <div className='botones'>               
            </div>
            <input className='button-direction' type="button" value="Direccion"/>
            <button className='button-home'><img src="https://us.123rf.com/450wm/yuriizasimov/yuriizasimov2006/yuriizasimov200600086/149147484-imagen-gris-de-perfil-de-avatar-de-marcador-de-posici%C3%B3n-predeterminado-masculino-aislada-sobre-fondo.jpg?ver=6" alt="" className='predeterminado'/></button>
        </div>
    </>)
}
export default NavBarGlobal;