import Link from "next/link";

const Nav =()=>{

return(
    <nav className="flex text-4xl justify-between items-center bg-slate-500 px-8 py-3 w-full">
    <Link
    href={'/'}>
    Home
    </Link>
    <ul className="flex space-x-4">
        <li>
    <Link
    href={'/about'}>
about
    </Link>
    </li>

</ul>


    </nav>
)

}

export default Nav