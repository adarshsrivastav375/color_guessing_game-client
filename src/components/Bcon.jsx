import { useEffect, useState } from "react";
import ActiveContest from "./ActiveContest";
import Bet from "./Bet";
import Table from "./Table";
import Table2 from "./Table2";
import { httpAuth } from "..";

function Bcone() {
  const [game, setGame] = useState({});
  const [bets, setBets] = useState([]);
  const [contasts, setContasts] = useState([]);
  const [newKey, setKey] = useState(0);
  const [newKey2, setKey2] = useState();
  const [pagination, setPagination] = useState([]);
  const [pagination2, setPagination2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);

  const getActiveGame = async () => {
    try {
      const response = await httpAuth.get("/api/v1/game", {
        params: { gameType: "Bcone" },
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
        gameType: "Bcone"
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
        gameType: "Bcone",
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

export default Bcone;
