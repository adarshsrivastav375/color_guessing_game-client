import ActiveContest from "./ActiveContest"
import Bet from "./Bet"
import Table from "./Table"

function Emred() {
  return (
    <div className="px-10 py-5 flex flex-col">
      <ActiveContest />
      <Bet />
      <Table />
    </div>
  )
}

export default Emred