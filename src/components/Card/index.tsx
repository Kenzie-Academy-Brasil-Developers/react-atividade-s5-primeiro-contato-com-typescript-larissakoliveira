
interface User {
    name: string;
    hobby: string;
    age: number;
}

const Card = ({ name, age, hobby }: User) => {
    return(
        <div>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <h5>{hobby}</h5>
        </div>
    )
}

export default Card