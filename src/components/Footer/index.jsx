import './styles.scss'
import Logo from '../../assets/logo.png'

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <img className="img-footer" src={Logo} alt="Logo kasa" />
                <p className='msg-footer'>© 2024 Beach Project. All rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer;