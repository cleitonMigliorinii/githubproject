import { useContext } from "react"
import { GithubContext } from "../providers/github-providers"

const useGithub = () => {

    const {perfilGithub, getUser} = useContext(GithubContext)

    return {perfilGithub, getUser};

}

export default useGithub;