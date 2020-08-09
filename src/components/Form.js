import React from 'react'

export default function Form(props) {
    let value={}
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submit(value)
    }

    const handleChange = (e) =>{
        value[e.target.name]= e.target.value
    }
    return (
        <div>
            {props.render({handleSubmit, handleChange})}
        </div>
    )
}
