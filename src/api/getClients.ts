import User from "../types/User";

const query = `
    query {
        getClients {
            firstName
            lastName
            phone,
            id,
            avatarUrl,
        }
    }
`

const getClients  = () : Promise<User[]> => {
    return fetch('https://test-task.expane.pro/api/graphql',{
        method:'POST',
        body:JSON.stringify({ query })
    })
        .then(res => res.json())
        .then(res => res.data.getClients)
}

export default getClients;