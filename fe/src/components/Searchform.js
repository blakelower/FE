import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Dashcard from './Dashcard';

export default function Search() {
    const [search, setSearch] = useState([]);
    const [sear, setSear] = useState("");
    useEffect(() => {
        axios
        .get('https://use-my-tech-stuff-eu.herokuapp.com/api/equipments')
        .then(response => {
            console.log(response.data);
            const cam = response.data;
            const results = cam.filter(cam => {
                return cam.props.toLowerCase().includes(sear.toLowerCase())
            })
            setSearch(results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [sear])
    const onSearchChange = e => {
        setSear(e.target.value);
        console.log(setSear)
    }
    let searchResult = "";
    var submit = e => {
        return(searchResult = e.target.value)
    }
    return(
        <section>
            <form onSubmit={e => submit(e)}>
            <input
            id=""
            type="text"
            placeholder="Search"
            value={sear}
            onChange={e => onSearchChange(e)}
            />
            </form>
            {search.map((s, index) => {
                return <Dashcard key={index} equips={s}/>;
            })}
        </section>
    )
}