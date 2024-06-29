'use client'
import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthForm} from "@/types";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";
import {Button, CustomCheckbox, Input} from "@/components/ui";
import {authService} from "@/services";
import {DASHBOARD_PAGES} from "@/config";


export const Auth = () => {
    const {register, handleSubmit} = useForm<AuthForm>({
        mode: 'onChange'
    })
    const [isLoginForm, setIsLoginForm] = useState(false)
    const {push} = useRouter()
    const {mutate} = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: AuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
        onSuccess: () => {
            toast.success('Successfully login!')
            push(DASHBOARD_PAGES.HOME)
        }
    })
    const onSubmit: SubmitHandler<AuthForm> = (data) => {
        mutate(data)
    }
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('email', {required: 'Email is required'})}
                       placeholder={'Enter email'}
                />
                <Input {...register('password', {required: 'Password is required'})}
                       placeholder={'Enter password'}
                />
                <Button onClick={() => setIsLoginForm(true)}>Login</Button>
                <Button onClick={() => setIsLoginForm(false)}>Register</Button>
                <CustomCheckbox id={'test'}/>
            </form>
    );
};
