import {useState, useEffect} from "react";
import Filters from "../components/Filters";
import Card from "../components/Card";


const FetchedProfiles = () => {
    const [titles, setTitles] = useState([])
    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [profiles, setProfiles] = useState([])

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    const handleSearch = (event) => {
        setName(event.target.value)
    };

    const handleClear = () => {
        setTitle("")
        setName("")
    };

    useEffect(()=>{
        fetch('https://web.ics.purdue.edu/%7Ezong6/profile-app/get-titles.php')
        .then(res => res.json())
        .then(res => setTitles(res.titles))
    },[])

    useEffect(()=>{
        fetch('https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}')
        .then(res => res.json())
        .then(res => setProfiles(res))
    },[title, search])


    return (
        <>
            <Filters 
            titles={titles}
            title={title}
            name={name}
            handleChange={handleChangeTitle}
            handleSearch={handleSearch} 
            handleClick={handleClear}/>

            <div className="grid">
                {filteredProfiles.length > 0? (
                    filteredProfiles.map((profile)=>(
                
                    <Card 
                        key={profile.id}
                        name={profile.name}
                        title={profile.title} 
                        image={profile.image}
                    />
                    ))
                ) : (
                    <p>No profiles matched your search.</p>
                )}
                </div>
        </>
    )

}

export default FetchedProfiles;