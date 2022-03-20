import "./videos.css"
import Sidebar from '../sidebar/Sidebar'
import Video from '../video/Video'

export default function Videos() {
  return (
    
    <div className='videos'> 
    <Video postCategory="Blockchain Tech" postTitle="What Are Smart Contracts?"  vidUrl="https://youtu.be/KjbUS_co2AM" imgUrl={"/images/whatRSmartCtcs.png"} />
    <Video postCategory="Decentralized Finance" postTitle="Why Most Farm Tokens Eventually Trend Toward Zero." vidUrl="https://youtu.be/unik6S8IZvY" imgUrl={"/images/whyFarmsZero.png"} />
    <Video postCategory="Blockchain Tech" postTitle="What Is The EVM (Ethereum Virtual Machine)?" vidUrl="https://youtu.be/XTlT3I-Iy5o" imgUrl={"/images/whatsEVM.png"} />
    <Video postCategory="Blockchain Tech" postTitle="What Is Ethereum Gas + Gwei?" vidUrl="https://youtu.be/ug0UE-NyYhQ" imgUrl={"/images/WhatisGas.png"} />
    <Video postCategory="Decentralized Finance" postTitle="Common Yield Farming Mistakes" vidUrl="https://www.youtube.com/watch?v=aGdPi4Itz_Q&t=7s" imgUrl={"/images/farmingMistakes.png"} />
    </div>
    
    
     
  )
}
