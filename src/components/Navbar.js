import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="flex items-center px-4 py-3 border-b">
      <img  className="rounded-full w-7 h-7" 
            src="https://pbs.twimg.com/profile_images/1250989900964360192/TxsfrCBi_400x400.jpg"
            />
      <span className="ml-6 text-lg font-extrabold">Home</span>
    </header>
  )
}

export default NavBar