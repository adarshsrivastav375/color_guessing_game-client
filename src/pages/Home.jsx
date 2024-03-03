import { Link } from "react-router-dom"
const bg = "https://images.pexels.com/photos/187333/pexels-photo-187333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

/* eslint-disable react/prop-types */
Link

const Home = () => {

    
    return (
        <div className="relative h-screen bg-transparent" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                <div className=" flex flex-col gap-5 text-center ">
                    <h1 className="text-slate-800 text-4xl lg:text-6xl font-bold lg:tracking-tight ">
                        <span className="text-orange-700 font-serif text-7xl">BS</span> is a betting cum game plateform
                    </h1>
                    <p className="text-xl w-30 mx-[15vb]">
                        Developing a captivating color guessing platform where players predict colors, offering engaging gameplay, vibrant visuals, user-friendly interface, and rewarding experiences for an immersive and enjoyable gaming adventure.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home