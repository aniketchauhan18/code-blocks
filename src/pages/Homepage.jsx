import { Link } from "react-router-dom";

function Homepage() {
  const linkBgClasses = "p-5 w-full flex justify-center items-center"
  const linkClasses = "p-2 rounded-md text-xl w-1/3 flex justify-center"
   return (
    <div className="flex flex-col justify-center items-center h-dvh text-white w-full">
      <div className={linkBgClasses}>
        <Link className={linkClasses} to="/puzzle1">PUZZLE 1</Link>
      </div>
      <div className={linkBgClasses}>
        <Link className={linkClasses} to="/puzzle2">PUZZLE 2</Link>
      </div>
      <div className={linkBgClasses}>
        <Link className={linkClasses} to="/puzzle3">PUZZLE 3</Link>
      </div>
      <div className={linkBgClasses}>
        <Link className={linkClasses} to="/puzzle4">PUZZLE 4</Link>
      </div>
      <div className={linkBgClasses}>
        <Link className={linkClasses} to="/puzzle5">PUZZLE 5</Link>
      </div>
    </div> 
  )  
}

export default Homepage;