import { gql,request } from "graphql-request";
import User from '../types/User';
import api from "../constants/api";

export const editClientMutation = (avatar : boolean) => gql`
    mutation($firstName: String!, $lastName: String!, $phone: String,$id : ID! ${avatar ? ',$avatarUrl: String' : ''}) {
        updateClient(firstName: $firstName, lastName: $lastName, phone: $phone,id:$id ${avatar ? ',avatarUrl: $avatarUrl' : ''}) {
            lastName
            firstName
            phone,
            id,
            avatarUrl
        }
    }
`

const updateClient = (client : User,mutation : any) : Promise<User> => {
    return request(api,mutation,client).then(data => data.updateClient)
}

export default updateClient;