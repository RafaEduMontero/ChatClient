import React from 'react'

const Room = ({room,i}) => {
    return (
            <div key={i} className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        {room.name}
                    </div>
                </div>
            </div>
    )
}

export default Room
