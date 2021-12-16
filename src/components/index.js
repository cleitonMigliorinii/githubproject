import React, { useEffect } from "react";
import useGithub from "../hooks/github-hooks";

const Header = ({children}) => {

    const {perfilGithub, getUser} = useGithub()

    useEffect(() => {

        getUser('diogogil')

  

    }, [])

    return (
        <div>
            <h1>Username : {perfilGithub.user.login}</h1>
            <img src={perfilGithub.user.avatar_url}></img>




        </div>
        
    )

}

export default Header;