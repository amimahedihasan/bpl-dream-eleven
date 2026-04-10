
import { FaFlag, FaUser } from "react-icons/fa";


const Card = ({player}) => {
    return (
       
             <div>
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img src={player.image} alt="player" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">
                    <FaUser /> {player.name}
                  </h2>

                  <div className="flex justify-between gap-2">
                    <div className="items-center flex gap-2">
                      <FaFlag />
                      <p>{player.country}</p>
                    </div>
                    <button className="btn">{player.role}</button>
                  </div>

                  <div className="divider"></div>

                  <h2 className="font-bold">
                    Rating : ({player.rating})
                  </h2>

                  <div className="font-bold flex justify-between gap-4">
                    <p>{player.batting_style}</p>
                    <p className="text-right">{player.bowling_style}</p>
                  </div>

                  <div className="items-center card-actions justify-between">
                    <p className="font-semibold">
                      Price : ${player.price}
                    </p>
                    <button className="btn">Choose Players</button>
                  </div>
                </div>
              </div>
            </div>
     
    );
};

export default Card;