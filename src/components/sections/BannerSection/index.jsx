import { username } from "../../../data/user";
import BannerImg from "../../../assets/banner-img.png"
import style from "./style.module.css"

const BannerSection = () => {

    return (
        <section className={style.section}>
            <div className={style.div1}>
                <p className={style.username}>{username}</p>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className={style.btn}>Saiba mais</button>
            </div>
            <div className={style.div2}>
                <img className={style.img} src= {BannerImg} alt="#" />
            </div>
        </section>

    )
};
export default BannerSection;