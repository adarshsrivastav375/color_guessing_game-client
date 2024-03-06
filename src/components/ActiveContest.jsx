/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dayjs from "dayjs"

const ActiveContest = ({ game, callback }) => {
    const [timer, setTime] = useState({});
    const [newContest, setNew] = useState(false);

    useEffect(() => {

        const targetTime = dayjs(game.expiredAt).valueOf(); 

        const timerFunction = () => {
            const currentTime = dayjs().valueOf();

            if (currentTime >= targetTime) {
                setNew(true)
                setTimeout(() => {
                    callback();
                }, 3000);

                clearInterval(timerInterval);
            } else {
                const remainingTime = targetTime - currentTime;
                const secondsRemaining = Math.floor(remainingTime / 1000);

                const minutes = Math.floor(secondsRemaining / 60);
                const seconds = secondsRemaining % 60;
                setTime({ minutes, seconds });
            }
        };

        // Run the timer every second (adjust as needed)
        const timerInterval = setInterval(timerFunction, 1000);

        // Initial call to log the initial status
        timerFunction();



    }, []);
    return (
        <div>
            {newContest ? (<div>New Contest Comming Soon</div>) : (<div className="flex flex-row justify-between">
                <div>
                    <h1>game id:</h1>
                    <p>{game?._id}</p>

                </div>
                <div>
                    <h1>count Down</h1>
                    <h1>{timer.minutes}:{timer.seconds}</h1>
                </div>
            </div>)
            }
        </div>

    )
}
export default ActiveContest