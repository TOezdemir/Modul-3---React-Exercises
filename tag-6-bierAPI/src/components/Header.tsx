function Header(){
    return(
        <header>
<nav className="mx-auto flex flex-row max-w-7xl items-center justify-between p-6 lg:px-8">
  <div>
    <li>
      <h1 className="text-amber-600 text-5xl text-center">The Beer Blog</h1>
    </li>
  </div>
  <ul className="flex justify-end space-x-4 list-none">
    <li className="bg-amber-500 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
      <a href="#" className="block">Home</a>
    </li>
    <li className="bg-amber-500 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
      <a href="#" className="block">All the Beers</a>
    </li>
    <li className="bg-amber-500 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
      <a href="#" className="block">Random Beer</a>
    </li>
  </ul>
</nav>
            
        </header>
    )
}

export default Header