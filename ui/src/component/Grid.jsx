import React from 'react'
import Cards from './Cards'

const Grid = () => {
    return (
        <div className="grid grid-cols-5 gap-4 mx-5 my-5">
            {/* {datas.map((data) => (
                <Card key={data.id} data={data} />
            ))} */}

            <Cards />
        </div>
    )
}

export default Grid