import style from "../style.module.css"

const TechCard = ({ img, name }) => {
    return (
        <li className={style.li}>
            <img src={img} alt={name} />
            <p className="title3">{name}</p>
        </li>
    );
};

export default TechCard;