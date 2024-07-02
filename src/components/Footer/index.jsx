import { user } from "../../data/user";
import WhatsappIcon from "../../assets/whatsapp-icon.png"
import LinkedinIcon from "../../assets/linkedin-icon.png"
import GithubIcon from "../../assets/github-icon.png"
import style from "./style.module.css"



const Footer = () => {
    return (
        <section className={style.section}>
            <div className={style.div1}>
                <div>
                <h2 className="title2">Contato</h2>
                </div>
                <div className={style.socialBtn}>
                <img src={WhatsappIcon} alt="Wpp" />
                <img src={LinkedinIcon} alt="Linkedin" />
                <img src={GithubIcon} alt="Github" />
                </div>
            </div>
            <div className={style.div2}>
                <p className="paragraph">Todos os direitos reservados - {user}</p>
            </div>
        </section>

    )
};

export default Footer;