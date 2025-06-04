import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/kb.png"


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6 px-10'>
        {/* [background:radial-gradient(125%_125%_at_70%_30%,#000_40%,#63e_100%)] */}
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='w-10 h-10'/>
        </div>
        <div className='m-3 flex items-center justify-center gap-6 text-2xl text-neutral-200'>
          <a href="https://www.linkedin.com/in/arjun-kb-520a51262/?trk=opento_sprofile_details"><Linkedin /></a>
          <a href="https://github.com/arjxn2001"><Github /></a>
          <a href="https://www.instagram.com/arj.x.n_?igsh=NWdvdWMxZHIwaHpv&utm_source=qr"><Instagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
