import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
   user: {},
   repository : [],
   starred : [],
   getUser: (username) => {},
})


const GithubProvider = ({children}) => {

    const [perfilGithub, setPerfilGithub] = useState(
        {
            user: {
                login : "",
                name : undefined,
                publicUrl : undefined,
                avatar_url : undefined
            },
            repository : [],
            starred : []
        }
    );

    const getUser = (username) =>{
        
        api.get(`users/${username}`)
            .then((userReturn) => {
                
                setPerfilGithub( (prevState) => ({
                    ...prevState,
                    user : {
                        login : userReturn.data.login,
                        name : userReturn.data.name,
                        publicUrl : userReturn.data.publicUrl,
                        avatar_url : userReturn.data.avatar_url
                    }

                }));

                getRepository(username);

            })

    }

    const getRepository = (username) => {

        api.get(`users/${username}/repos`)
        .then((reposReturn) => {
            setPerfilGithub( (prevState) => ({
                ...prevState,
                repository : reposReturn.data
            }))

            console.log(perfilGithub)
        })

    }

    const getStarred = () => {}


    const contexValue = {
        perfilGithub,
        getUser: useCallback((username) => getUser(username))
    }

    return (

        <GithubContext.Provider value={contexValue}>
            {children}
        </GithubContext.Provider>

    )
}

export default GithubProvider;