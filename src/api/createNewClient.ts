import { gql,request } from "graphql-request";
import User from '../types/User';
import api from "../constants/api";

const mutation = gql`
 mutation($firstName: String!, $lastName: String!, $phone: String,$avatarUrl: String) {
  addClient(firstName: $firstName, lastName: $lastName, phone: $phone,avatarUrl:$avatarUrl) {
    lastName
    firstName
    phone,
    avatarUrl,
    id
  }
}
`

const createNewClient = (client : User) : Promise<User> => {
   return request(api,mutation,client).then(data => data.addClient)
}

export default createNewClient;