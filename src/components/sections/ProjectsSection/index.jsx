import { projects } from "../../../data/projects";
import ProjectsCard from "./ProjectsCard";
import style from "./style.module.css"


const ProjectsSection = () => {
    return (
        <section className={style.section}>
            <h2 className="title2">Projetos</h2>
            <div className={style.div1}>
                {projects.map(el => <ProjectsCard name={el.name} description={el.description} />)}

            </div>

        </section>

    )
};

export default ProjectsSection;