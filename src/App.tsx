import React,{useState} from 'react';
import 'tailwindcss/tailwind.css';
import 'tailwindcss/base.css';
import getClients from "./api/getClients";
import { useQuery } from 'react-query';
import User from "./types/User";
import UserTable from "./components/UserTable";
import AddClientModal from "./components/AddClientModal";
import EditClientModal from "./components/EditClientModal";


const App = () => {

  const { data,isLoading } = useQuery<User[],{}>('users',getClients);
  const [addModal,setAddModal] = useState<boolean>(false);
  const [clientToEdit,setClientToEdit] = useState<User | null>(null)

  const handleToggleAddModal = () => {
      setAddModal(s => !s)
  }

  const handleResetClientToEdit = () => {
      setClientToEdit(null)
  }


  return (
      <div className="h-screen flex justify-center pt-20">
          <div className="container mx-auto">
              {isLoading && <div>Loading...</div>}
              {data && (
                  <>
                      <div className="flex justify-end mb-2">
                          <button onClick={handleToggleAddModal}
                                  className="bg-blue-500 text-white py-1 px-5 rounded">
                              Add user
                          </button>
                      </div>
                      <UserTable
                          users={data}
                          setClientToEdit={setClientToEdit}/>
                      <AddClientModal
                          open={addModal}
                          toggle={handleToggleAddModal}/>
                      <EditClientModal
                          clientToEdit={clientToEdit}
                          toggle={handleResetClientToEdit}/>
                  </>
               )}
          </div>
      </div>
  );
}

export default App;
