import React from 'react'

function CoolButton(props){
let myClass = props.different ? 'isDanger' : 'isSuccess'
//console.log('---button---', props)
    return(
        <div>
            <button className={myClass}>{props.children}</button>
        </div>
    )
}

export default CoolButton