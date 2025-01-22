import React from 'react'
import Cards from './Cards'

const Grid = ({datas}) => {
    return (
        <div className="grid grid-cols-5 gap-4 mx-5 my-5">
            {datas.map((data) => (
                <Cards key={data.id} data={data} />
            ))}

           
        </div>
    )
}

export default Grid