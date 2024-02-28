function Camelid({name, fact, img}) {
    return (
    <div className="camelid">
        <h1>{name}</h1>
        <p>{fact}</p>
        <div>{img}</div>
    </div>
    );
}
export default Camelid;