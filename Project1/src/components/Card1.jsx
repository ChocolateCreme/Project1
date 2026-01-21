import Avani from "../assets/Avani.jpg";

const Card1 = () => {
    const name = "Avani"
    const title = "Purdue University Student"

    return (
        <div className="Avani">
            <img src={Avani} alt={name}/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card1;