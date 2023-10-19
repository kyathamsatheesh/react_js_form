import React from 'react'
import App from '../App'


// function Greet(){
//     return <h1>Hello Satheesh Kyahtam</h1>
// }

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} also known as {props.heroName}</h1>
//             {props.children}
//         </div>
//     )

// }

//Using Destructuring 1 Method
// const Greet = ({name,heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} also known as {heroName}</h1>
//         </div>
//     )

// }

//Using Destructuring 2 Method
const Greet = (props) => {
    const {name, heroName}=props;
    return (
        <div>
            <h1>Hello {name} also known as {heroName}</h1>
        </div>
    )

}

export default Greet