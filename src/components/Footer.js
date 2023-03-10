import { Link } from 'react-router-dom';
import '../css/Footer.scss';

const Footer = ({ FOOTER }) => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="footer_inner">
                    <div className='f_logo'>
                        <img src={process.env.PUBLIC_URL + `/assets/f-logo.svg`} />
                    </div>
                    <div className='f_right'>
                        <ul>
                            {
                                FOOTER.service.map((it, idx) => {
                                    return (
                                        <li>{it.title}</li>
                                    )
                                })
                            }
                        </ul>
                        <address>&copy; 2022. UTAMALL. ALL RIGHTS RESERVED.</address>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;