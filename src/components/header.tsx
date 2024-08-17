import { Logo } from "../assets"

function Header(){
  return (
  <header className="flex gap-4 bg-amber-500 p-4 text-center mb-16 justify-center items-center">
    <Logo width={'88px'}/>
    <h1 className="text-4xl font-bold">Chuck Norris <br/> Jokes</h1>
  </header>
  )
}
export default Header