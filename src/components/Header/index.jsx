import portfolio from "../../assets/portfolio.svg"
import style from "./style.module.css"
const Header = () => {

    return (
        <section className={style.header}>
            <img className={style.portfolio} src={portfolio} alt="portfolio"/>
            <p className={style.itens}>Sobre</p>
            <p className={style.itens}>Slack</p>
            <p className={style.itens}>Projetos</p>
            <button className={style.btn}>Contato</button>
        </section>

    )
}

export default Header;