import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=> void // need to fix any
}

export const pureAddUser = (name: string, setError: (e:string)=>void, setName: ((name:string)=>void), addUserCallback: (name:string)=> void) => {
    if(name.trim() !== ''){
        addUserCallback(name)
        setName('')
        setError('')
        return
    }  setError('Ошибка! Введите имя!')
    console.log(name)
}


export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if(name.trim() ===''){
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement> , addUser: ()=>void) => {
    if(e.key ==="Enter"){
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('invalid string')
    }
    const addUser = () => {
        // это всего лишь функция стрелочник- она всего лишь получает
        //сигнали из компоненты <Greeting/> и вызывает pureAddUser (с кучей аргументов)
        // ЗДЕСЬ НИЧЕГО ПИСАТЬ НЕ НУЖНО-ВСЕ ОК

        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        // все тоже самое, что и в addUser -функция стрелочник
        // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        // и здесь все тоже самое...)
        pureOnEnter(e, addUser)
    }

    // const [lastUserName, setLastUserName] = useState('user')
    const totalUsers = users.length // need to fix
    const lastUserName = totalUsers !==0? users[users.length-1].name: 'user'
    // need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
