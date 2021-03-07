import React, {useState} from 'react';
import User from "../types/User";
import {useForm} from "react-hook-form";
import {useMutation, useQueryClient} from "react-query";
import addNotification from "../helpers/addNotification";
import ClientModal from "./ClientModal";
import updateClient,{editClientMutation} from "../api/editClient";

interface EditClientModalProps {
    clientToEdit:User | null,
    toggle:() => void;
}

const EditClientModal = ({ clientToEdit ,toggle } : EditClientModalProps) => {
    const { register, handleSubmit,errors,setValue } = useForm<User>();
    const queryClient = useQueryClient();
    const [avatar,setAvatar] = useState<File | null>(null);

    const { mutate : submitNewClient,isLoading } = useMutation(
        (user : User) => updateClient(user,editClientMutation(Boolean(avatar))),{
        onSuccess:(data) => {
            //@ts-ignore
            queryClient.setQueryData('users',(old : User[]) => {
                const clientIndex = old.findIndex(user => user.id === clientToEdit?.id)
                return [
                    ...old.slice(0,clientIndex),
                    data,
                    ...old.slice(clientIndex + 1)
                ]
            })
            toggle();
            addNotification('Client was succesfully edited','success')
        },
        onError: () => {
            addNotification('Something goes wrong with editing client','danger')
        },
    })

    const onSubmit = (data : User) => {
        const editedClient = {
            ...data,id:clientToEdit!.id
        }
        if(avatar) {
            const reader = new FileReader();
            reader.onloadend = function() {
                const client = Object.assign(editedClient,{avatarUrl:String(reader.result)})
                submitNewClient(client)
            }
            reader.readAsDataURL(avatar as File)
        } else {
            submitNewClient(editedClient)
        }
    }

    const handleAvatar = (e : React.ChangeEvent) => {
        //@ts-ignore
        setAvatar(e.target.files[0])
    }

    const onMount = () => {
        setValue('firstName',clientToEdit?.firstName)
        setValue('lastName',clientToEdit?.lastName)
        setValue('phone',clientToEdit?.phone)
    }

    const onUnmount = () => {
        setAvatar(null)
    }


    return (
        <ClientModal
            onUnmount={onUnmount}
            onMount={onMount}
            open={Boolean(clientToEdit)}
            toggle={toggle}
            register={register}
            handleAvatar={handleAvatar}
            avatar={avatar}
            loading={isLoading}
            request={handleSubmit(onSubmit)}
            errors={errors}
            title="Edit client"
            submitButtonLabel="Update"
        />
    )
}

export default EditClientModal;