import { Logo } from "../assets"

function Header(){
  return (
  <header className=" p-2 gap-2 sm:p-3 sm:gap-6 md:gap-14 text-center mb-16 justify-center flex items-center bg-amber-500">
    <Logo width={'100px'}/>
    <h1 className="sm:text-4xl md:text-5xl text-3xl font-bold">Chuck Norris <br/> Jokes</h1>
  </header>
  )
}
export default Header