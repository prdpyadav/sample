import React from 'react'

const Card = ({value,image, type, name}) => {
  return (
    <div>

    <div className="p-1 my-2">
        <img src={image} alt={`${value}_image`} />
    </div>
    <h3 className="bg-sky-100 text-sky-500 my-6 hover:bg-sky-300 inline p-1 rounded-md">
        {type.toUpperCase()}
    </h3>
    <h3 className="font-medium text-xl my-2">
        {name}
    </h3>
   
    </div>
  )
}

export default Card