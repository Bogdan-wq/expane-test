import { gql,request } from "graphql-request";
import User from "../types/User";
import api from "../constants/api";

const query = gql`
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
    return request(api,query)
        .then(data => {
            return data.getClients
        })
}

export default getClients;