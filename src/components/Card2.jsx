import Dog from "../assets/Dog.jpg";

const Card2 = () => {
    const name = "Dog"
    const title = "Large Stuffed Dog"

    return (
        <div className="Dog">
            <img src={Dog} alt={name}/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card2;