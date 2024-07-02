import style from "./style.module.css"

const AboutmeSection = () => {
    return (
        <section className={style.section}>
            <div className={style.title}>
            <h2 className="title2">Sobre mim</h2>
            </div>
            <div className={style.paragraph}>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
            </div>
        </section>

    )
};

export default AboutmeSection;