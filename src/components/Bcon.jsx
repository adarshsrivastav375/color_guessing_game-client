import Table from "./Table"
import ActiveContest from "./ActiveContest";
import Bet from "./Bet";

function Bcon() {
    return (
        <div className="px-10 py-5 flex flex-col">
            <ActiveContest />
            <Bet />
            <Table />
        </div>
    )
}

export default Bcon