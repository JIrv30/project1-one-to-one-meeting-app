import Logo from '../assets/brune-park-logo.png'
import { PiTargetBold } from 'react-icons/pi'
import {RiSurveyLine} from 'react-icons/ri'
import {BsListCheck, BsFileEarmarkBarGraph, BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineOneToOne, AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-bp-blue text-slate-200 w-2/6 h-screen gap-4'>
      <div className='flex flex-col'>
        <img src={Logo} alt='BP-Logo'
         />
      </div>

      <div className='flex pl-4 items-center gap-2 hover:underline hover:cursor-pointer'>
        <BsFillPersonFill />
        <h2><Link to='/'>Name</Link></h2>
      </div>

      <hr />

      <div className='flex pl-4 items-center gap-2'>
        <PiTargetBold size='1.25rem' />
        <h3>
          <Link to='/Performance-Objectives'>Perfomance Objectives</Link>
          </h3>
      </div>

      <div className='flex pl-4 items-center gap-2'>
        <RiSurveyLine />
        <h3><Link to='/Surveys'>Surveys</Link></h3>
      </div>

      <div className='flex pl-4 items-center gap-2'>
        <BsListCheck />
        <h3><Link to='Develpopment-Needs'>Develpopment Needs</Link></h3>
      </div>

      <div className='flex pl-4 items-center gap-2'>
        <BsFileEarmarkBarGraph />
        <h3><Link to='Perfomrance-Records'>Performance Records</Link></h3>
      </div>

      <div className='flex pl-4 items-center gap-2'>
        <AiOutlineOneToOne />
        <h3><Link to='One-to-one-Check-ins'>One-to-one Check-ins</Link></h3>
      </div>

      <hr />

      <div className='flex pl-4 items-center gap-2'>
        <AiOutlineSearch />
        <h3>Search</h3>
      </div>

    </div>
  )
}

export default Sidebar