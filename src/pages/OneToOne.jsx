import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const OneToOne = () => {
 const [value, setValue] = useState('')
  
  return (
    <div className="bg-red-300 h-full w-full pl-4 pt-4 ">
      <section className="bg-teal-300 flex h-10 w-full">
        <h1 className="text-2xl bg-blue-500">One-to-One Check-ins</h1>
      </section>

      <section className="flex pt-8 bg-orange-400">
        <section className="flex bg-orange-950">
          <div className="bg-slate-300 flex flex-col w-1/5 gap-4">
            <p>meeting 1</p> 
            <small>date</small>
            <p>meeting 2</p> 
            <small>date 2</small>
            <button className='border flex items-center justify-center'>
              <AiOutlinePlus />
            </button>
          </div>

        <section className="flex bg-green-400">
          <div className="bg-lime-700 pl-4">
            <ReactQuill theme='snow' value={value} onChange={setValue} />
          </div>
        </section>

        </section>
        
      </section>

    </div>
  )
}

export default OneToOne