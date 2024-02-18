import './Contattaci.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export function Contattaci() {
    return (
        <div className="contattaci">
            <h1>Contattateci</h1>
            <div className="contatti">
                <ul>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faPhone} /></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                </ul>
                <img src="" alt="maps-image"></img>
            </div>
        </div>
    )
}