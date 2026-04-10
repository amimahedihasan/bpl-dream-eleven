import React from 'react';
impor
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log("slelel", selectedPlayers);

    return (
        <div>
            {selectedPlayers.map((player, index) => {
                return (
                    <div key={index} className='flex items-center gap-6 justify-between my-7.5 p-10 rounded-2xl border'>

                        <div>
                            <img src={player.imag} alt={player.name} />
                            <div className='flex'>
                                <h2><FaUser />{player.name}</h2>
                                <p>{player.role}</p>
                            </div>
                        </div>
                        <button>
                            <MdDelete />

                        </button>


                    </div>
                );
            })}
        </div>
    );
};

export default SelectedPlayers;