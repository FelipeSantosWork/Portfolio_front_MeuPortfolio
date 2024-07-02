import gitIcon from "../../../../assets/git-icon.png"
import style from "../style.module.css"

const ProjectsCard = ({ name, description }) => {
    return (
        <><div className={style.div2}>
            <div className={style.txt}>
            <h3 className="title3">{name}</h3>
            <p className="paragraph">{description}</p>
            <p className="link">Saiba mais</p>
            </div>
            <div className={style.img}>
            <img src={gitIcon} alt="GitIcon" />
            </div>
        </div>

        </>
    );
};

export default ProjectsCard;