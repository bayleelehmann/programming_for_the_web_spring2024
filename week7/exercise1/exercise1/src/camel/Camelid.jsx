import "./camel.css"
function Camelid({name, image, desc}) {
    console.log(name)
    return (
        <div className= "camel">
            <h1>{name}</h1>
            <p>{desc}</p>
            <p>{image}</p>
            <div style={{
                width: "25px",
                height: "25px",
            }}></div>
        </div>
    );
}

export default Camelid;