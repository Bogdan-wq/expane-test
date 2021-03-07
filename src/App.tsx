import React from 'react';
import 'tailwindcss/tailwind.css';
import 'tailwindcss/base.css';
import getClients from "./api/getClients";
import { useQuery } from 'react-query';
import User from "./types/User";
import UserTable from "./components/UserTable";
import Modal from "./components/Modal";

const App = () => {

  const { data,isLoading } = useQuery<User[],{}>('users',getClients)

  return (
      <div className="h-screen flex justify-center pt-20">
          <div className="container mx-auto">
              {isLoading && <div>Loading...</div>}
              {data && (
                  <>
                      <div className="flex justify-end mb-2">
                          <button className="bg-blue-500 text-white py-1 px-5 rounded">
                              Add user
                          </button>
                      </div>
                      <UserTable users={data}/>
                  </>
               )}
          </div>
          <Modal open={true}>
              <h4 className="text-xl font-medium">Add user</h4>
              <div className="mt-3">
                  <div className="flex">
                      <div className="flex-auto">
                          <input className="w-full border h-8 border-black rounded pl-2"/>
                      </div>
                      <div className="flex-auto ml-4">
                          <input className="w-full border h-8 border-black rounded pl-2"/>
                      </div>
                  </div>
              </div>
          </Modal>
      </div>
  );
}

export default App;
