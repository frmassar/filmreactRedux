import React from 'react'
import { Formik, Field } from 'formik'
import * as axios from 'axios'
export default function AddUsers(props) {
    const submit = (values, actions) =>{
        if(!props.user){
            axios.post('https://jsonplaceholder.typicode.com/users', values)
                    .then(response=>console.log(response))
        }else{
            axios.put(`https://jsonplaceholder.typicode.com/users/${values.id}`, values)
                    .then(response=>console.log(response))

        }
    }
    const initialValues = () => {
        return props.users?{...props.users}:{name:'', username:'', email:''}
    }
    return (
        <Formik onSubmit={submit} initialValues={initialValues()} enableReinitialize={true}>
            {({handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <Field name="name" placeholder="name"/>
                    <Field name="username" placeholder="username"/>
                    <Field name="email" placeholder="email"/>
                    <button type="submit">Save</button>
                </form>
            )}
        </Formik>
    )
}
