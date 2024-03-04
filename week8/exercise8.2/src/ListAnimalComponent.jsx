// eslint-disable-next-line react/prop-types
export default function ListAnimalComponent({animalName, focusFn, deleteFn}) {
    return (
        <div>
            <strong>{animalName}</strong>
        <div>
            <button onClick={() =>
            focusFn(animalName)}>Focus</button> |
            <button onClick={() =>
            deleteFn(animalName)}>Delete</button> 
        </div>
        </div>

    )
}