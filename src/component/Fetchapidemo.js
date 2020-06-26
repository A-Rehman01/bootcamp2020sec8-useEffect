import React, { useEffect, useState } from 'react';

function Fetchapidemo() {

    const [reposdata, setreposdata] = useState([{}])

    useEffect(() => {
        async function getrepos() {
            let response = await fetch("https://api.github.com/users/A-Rehman01/repos")
            // respnse  ne promix return kiya phr hm ne us mese data liya json
            // form  metake read hosake
            let data = await response.json();
            console.log(data)
            setreposdata(data);
        }
        getrepos();
    }, []);

    return (
        <div className="App">
            <h2> A-Rehman Repository list</h2>
            <ul>
                {
                    reposdata.map((reposObj, index) => {
                        return (<li key={index} >{reposObj.name}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default Fetchapidemo;