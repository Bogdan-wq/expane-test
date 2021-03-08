import React from 'react';
import { FieldErrors } from "react-hook-form";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import Loading from "./UI/Loading";

interface ClientModalProps {
    open:boolean,
    toggle:() => void,
    register:any,
    handleAvatar:(e : React.ChangeEvent) => void,
    avatar:File | null,
    loading:boolean,
    request:() => void;
    errors:FieldErrors,
    title:string,
    submitButtonLabel:string,
    onMount:() => void,
    onUnmount:() => void,
}

const ClientModal = (props : ClientModalProps) => {

    const {
        open,
        toggle,
        request,
        register,
        errors,
        handleAvatar,
        avatar,
        loading,
        title,
        submitButtonLabel,
        onMount,
        onUnmount
    } = props;

    return (
        <Modal open={open} toggle={toggle} onMount={onMount} onUnmount={onUnmount}>
            <h4 className="text-xl font-medium">{title}</h4>
            <form className="mt-3" onSubmit={request}>
                <div className="flex">
                    <Input
                        ref={register({
                            required:{
                                value:true,
                                message:'First name is required'
                            }
                        })}
                        error={!!errors?.firstName}
                        helperText={errors?.firstName?.message}
                        className="flex-auto"
                        placeholder="Your firstname"
                        name="firstName"/>
                    <Input
                        error={!!errors?.lastName}
                        helperText={errors?.lastName?.message}
                        ref={register({
                            required:{
                                value:true,
                                message:'Last name is required'
                            }
                        })}
                        className="flex-auto ml-4"
                        placeholder="Your lastname"
                        name="lastName"/>
                </div>
                <Input
                    error={!!errors?.phone}
                    helperText={errors?.phone?.message}
                    ref={register({
                        required:{
                            value:true,
                            message:'Phone is required'
                        }
                    })}
                    className="mt-4"
                    placeholder="Your phone"
                    name="phone"/>
                <div className="mt-4">
                    <input onChange={handleAvatar} type="file" id="avatar" className="w-0" disabled={loading} />
                    <label htmlFor="avatar" className="bg-green-500 text-white py-1 px-5 rounded cursor-pointer">
                        Upload Avatar
                    </label>
                    {avatar ? <span className="text-sm inline-block ml-2 w-28 truncate">{avatar?.name}</span> : null}
                </div>
                {loading && <Loading className="mt-3"/>}
                <div className="flex justify-end mt-2">
                    <button className="bg-blue-500 text-white py-1 px-5 rounded" type="submit" disabled={loading}>
                        {submitButtonLabel}
                    </button>
                </div>
            </form>
        </Modal>
    )
}

ClientModal.defaultProps = {
    onMount:() => {},
    onUnmount:() => {}
}

export default ClientModal;