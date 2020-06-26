import React, { useEffect, useState } from 'react';

function Fetchapibuttondemo() {
    const [getData, setgetData] = useState({})
    const [id, setid] = useState(1)
    const [buttonid, setbuttonid] = useState(1)
    function getid(e) {
        setid(e.target.value)
    }
    function handlebutton(){
        setbuttonid(id)
    }

    useEffect(() => {

        async function Fetchdata() {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
            let data = await response.json();
            console.log(data);
            setgetData(data);
        }
        Fetchdata();
    }, [buttonid]);   //jexe id change wese useeffect call hoga
    
    return (
        <div>
            <input type="number" value={id} onChange={getid} placeholder='Enter number  ...' />
            <button type="button" onClick={handlebutton} >Fetch Data</button>
            <br />
            {getData.title}
        </div>
    );
}

export default Fetchapibuttondemo;