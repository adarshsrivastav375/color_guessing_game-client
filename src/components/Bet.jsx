

const Bet = () => {
  return (
      <div>
          <div>
              <div className=" flex flex-row items-center justify-around m-6">
                  <div className=" bg-green-100 px-4 py-2 text-green-700 rounded-lg  border-4 border-green-700 cursor-pointer hover:border-green-400 hover:bg-green-600 hover:text-white">join green</div>
                  <div className=" bg-blue-100 px-4 py-2 text-blue-700 rounded-lg  border-4 border-blue-700 cursor-pointer hover:border-blue-400 hover:bg-blue-600 hover:text-white"> join voiet</div>
                  <div className=" bg-red-100 px-4 py-2 text-red-700 rounded-lg  border-4 border-red-700 cursor-pointer hover:border-red-400 hover:bg-red-600 hover:text-white"> join red</div>
              </div>
          </div>
          <div className="flex justify-between p-10">
              <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">0</div>
              <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">1</div>
              <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">2</div>
              <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">3</div>
              <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">4</div>
              <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">5</div>
              <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">6</div>
              <div className="bg-red-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">7</div>
              <div className="bg-blue-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">8</div>
              <div className="bg-green-600 px-3 py-1 rounded-xl text-white  sm:flex sm:flex-wrap">9</div>

          </div>
    </div>
  )
}

export default Bet