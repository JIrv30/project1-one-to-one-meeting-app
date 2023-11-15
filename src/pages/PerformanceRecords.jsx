import {BsFileEarmarkBarGraph, BsPersonSquare} from 'react-icons/bs'

const PerformanceRecords = () => {
  return (
    <div className='flex flex-col bg-slate-200 w-full h-full'>
      <title className='flex gap-4 justify-start pl-10 pb-10 pt-10 items-center w-full text-4xl'>
        <BsFileEarmarkBarGraph />
       <h1>Performance Records</h1>
      </title>

      <section className='flex gap-8 pl-20 bg-cyan-300'>
        <div className='bg-red-300'>
          My performance Recordes

          <div className=' bg-orange-300 flex flex-col '>
            
              <h3 className='text-xl'>Active Records</h3>
              <BsPersonSquare size='6rem' />
              
              <div className='flex flex-col bg-amber-300 text-sm'>
                <p><b>Mid Year 2023-24</b></p>
                <p>Joe Bloggs</p>
                <p>3 Nov 2023</p>
                <p>Not started</p>
              </div>
            
          </div>

        </div>
        
        <div className='bg-green-300'>
          My Teams Records
        </div>

      </section>

    </div>
  )
}

export default PerformanceRecords