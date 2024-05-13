import { useState } from 'react'
import { IonIcon } from '@ionic/react';
import { caretDownCircleOutline, caretDownOutline, personOutline } from 'ionicons/icons';
import Grid from './Components/Grid.jsx';
import Chart from './Components/Chart.jsx';

function App() {
  const [open, setOpen] = useState(true);

  //Menu Items
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User" },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder" },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <>
      <div className="flex bg-[whitesmoke]">
      <div className={`z-10 ${open ? "w-64" : "w-20 "}   bg-dark-purple h-screen  p-5  pt-8 relative duration-300`} >
        <img src="./assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/thunder.jpg"
            className={`cursor-pointer duration-500 rounded-md ${open && "rotate-[360deg] h-12"}`} />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            Kav͜͡inM
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}
              className={`flex  rounded-md p-2 cursor-pointer font-semibold hover:bg-light-white text-pink-300 hover:text-pink-400 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`} >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`} >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='grow'>
        <nav  className=" py-4 bg-gradient-to-r to-[#102159] from-[#193a8b] flex items-center justify-end gap-6 font-semibold text-[white]">
            <div className=' hidden sm:block hover:bg-light-white hover:p-2 hover:rounded-lg'>Home</div>
            <div className=' hidden sm:block  hover:bg-light-white hover:p-2 hover:rounded-lg'>About Us</div>
            <div className='hidden sm:block  hover:bg-light-white hover:p-2 hover:rounded-lg'>Contact Us</div>
            <img src="./src/assets/1.jpg" className='h-12 rounded-full relative' />
            <IonIcon icon={caretDownOutline} className='block sm:hidden text-xl mr-4' />
        </nav>
        <div className=''>
          <Grid />
        </div>
        <div className=''>
          <Chart />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
