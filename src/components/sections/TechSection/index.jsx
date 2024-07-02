import TechCard from "./TechCard";
import { technologies } from "../../../data/technologies";
import style from "./style.module.css"

const TechSection = () => {
    return (
        <section className={style.section}>
            <h2 className="title2">Tecnologias</h2>
            <ul className={style.ul}> 
                {
                    technologies.map(el => <TechCard img={el.img} name={el.name} />)
                }
            </ul>
        </section>

    )
};

export default TechSection;