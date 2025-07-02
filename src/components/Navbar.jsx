import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/kb.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-4 lg:px-10 px-4'>
        {/* [background:radial-gradient(125%_125%_at_70%_30%,#000_40%,#63e_100%)] */}
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='lg:w-10 w-8 lg:h-10 h-8'/>
        </div>
        <div className='m-3 flex items-center justify-center gap-6 lg:gap-18 text-xl text-neutral-200 lg:text-2xl'>
          <a href="https://www.linkedin.com/in/arjun-kb-520a51262/?trk=opento_sprofile_details"><FaLinkedin /></a>
          <a href="https://github.com/arjxn2001"><FaGithub /></a>
          <a href="https://www.instagram.com/arj.x.n_?igsh=NWdvdWMxZHIwaHpv&utm_source=qr"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
