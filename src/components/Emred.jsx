import { useEffect, useState } from "react";
import ActiveContest from "./ActiveContest";
import Bet from "./Bet";
import Table from "./Table";
import Table2 from "./Table2";
import { httpAuth } from "..";

function Emred() {
  const [game, setGame] = useState({}); // Initialize state with null or an initial value
  const [bets, setBets] = useState([]); // Initialize state with null or an initial value
  const [contasts, setContasts] = useState([]); // Initialize state with null or an initial value
  const [newKey, setKey] = useState(0); // Initialize state with null or an initial value
  const [newKey2, setKey2] = useState(11111111); // Initialize state with null or an initial value
  const [pagination, setPagination] = useState([]); // Initialize state with null or an initial value
  const [pagination2, setPagination2] = useState([]); // Initialize state with null or an initial value
  const [currentPage, setCurrentPage] = useState(1); // Initialize state with null or an initial value
  const [currentPage2, setCurrentPage2] = useState(1); // Initialize state with null or an initial value

  const getActiveGame = async () => {
    try {
      const response = await httpAuth.get("/api/v1/game", {
        params: { gameType: "Emred" },
      });
      setGame(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getBets = async (pageNumber = 1) => {
    try {
      const payload = {
        limit: 10,
        pageNumber: pageNumber,
        gameType:"Emred"
      }
      const response = await httpAuth.get("/api/v1/game/bet", {
        params: payload
      });
      setBets(await response.data.data.bets);
      setPagination(await response.data.data.pagination)
      setKey(newKey + 1)
      setCurrentPage(pageNumber)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getContasts = async (pageNumber = 1) => {
    try {
      const payload = {
        gameType: "Emred",
        limit: 10,
        pageNumber: pageNumber
      }
      const response = await httpAuth.get("/api/v1/game/contast", {
        params: payload
      });
      setContasts(await response.data.data.contasts);
      setPagination2(await response.data.data.pagination)
      setKey2(newKey2 + 1)
      setCurrentPage2(pageNumber)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getActiveGame();
      await getBets();
      await getContasts();
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="px-10 py-5 flex flex-col">
      {game?._id ? <ActiveContest key={game._id} game={game} callback={() => { getActiveGame(); getBets(); getContasts(); }} /> : ''}
      <Bet game={game} callback={() => { getBets(); getContasts(); }} />

      <div className=" py-2 mt-5">Contast</div>
      <Table2 key={newKey2} contasts={contasts} pagination={pagination2} callback={getContasts} currentPage={currentPage2} />

      <div className=" py-2 mt-5">User Bets</div>
      <Table key={newKey} bets={bets} pagination={pagination} callback={getBets} currentPage={currentPage} />
    </div>
  );
}

export default Emred;
