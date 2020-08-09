import React from 'react'

export default function card(props) {
    let item=[]
    for (let i=0; i<props.iteration; i++){
        item.push(props.children(i))
        
    }
            return(
                <div>{item}</div>
            )

}
