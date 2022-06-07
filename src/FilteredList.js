import { useMemo, useState } from "react";
import { people } from "./data";
import { animals } from "./data";

export function FilteredList() {
const [list, setList] = useState(animals)    

const majorAge = useMemo(() => {return list.filter(person => person.age > 18)}, [list])

return majorAge.map(item => {
    const {id, name, age} = item
    return (
        <section key={id}>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </section>
    )
})
}
   
