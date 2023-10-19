import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1 id="h1_id" className='dummyClass'>Hello Satheesh Kyatham</h1>
    //     </div>
    // )

    return React.createElement('div', {id:'h1_id',className:'dummyClass'}, React.createElement('h1', null, 'Hello Satheesh Kyahtam'))
}

export default Hello