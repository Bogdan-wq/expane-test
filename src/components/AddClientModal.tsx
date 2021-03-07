import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import User from "../types/User";
import {useMutation, useQueryClient} from "react-query";
import createNewClient from "../api/createNewClient";
import addNotification from "../helpers/addNotification";
import ClientModal from "./ClientModal";

interface AddClientModalProps {
    open:boolean,
    toggle:() => void
}

const AddClientModal = ({ open,toggle} : AddClientModalProps) => {
    const { register, handleSubmit,errors } = useForm<User>();
    const queryClient = useQueryClient();
    const [avatar,setAvatar] = useState<File | null>(null);
    const { mutate : submitNewClient,isLoading } = useMutation(createNewClient,{
        onSuccess:(data) => {
            //@ts-ignore
            queryClient.setQueryData('users',(old) => [data,...old])
            toggle();
            addNotification('Client was succesfully created','success')
        },
        onError: () => {
            addNotification('Something goes wrong with creating client','danger')
        },
    })

    const onSubmit = (data : User) => {
        if(avatar) {
            const reader = new FileReader();
            reader.onloadend = function() {
                const client = Object.assign(data,{avatarUrl:String(reader.result)})
                submitNewClient(client)
            }
            reader.readAsDataURL(avatar as File)
        } else {
            submitNewClient(data)
        }
    }

    const handleAvatar = (e : React.ChangeEvent) => {
        //@ts-ignore
        setAvatar(e.target.files[0])
    }

    const onUnmount = () => {
        setAvatar(null)
    }


    return (
        <ClientModal
            onUnmount={onUnmount}
            open={open}
            toggle={toggle}
            register={register}
            handleAvatar={handleAvatar}
            avatar={avatar}
            loading={isLoading}
            request={handleSubmit(onSubmit)}
            errors={errors}
            title="Add User"
            submitButtonLabel="Create"/>
    )
}

export default AddClientModal;