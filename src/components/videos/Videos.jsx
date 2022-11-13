import "./videos.css"
import Sidebar from '../sidebar/Sidebar'
import Video from '../video/Video'

export default function Videos() {
  const postInfo = [
    {title:"What Are Smart Contracts?", image: `/images/whatRSmartCtcs.png`, video:"https://youtu.be/KjbUS_co2AM", category:"Blockchain Tech"},
    {title:"Why Most Farm Tokens Eventually Trend Toward Zero.", image: `/images/whyFarmsZero.png`, video:"https://youtu.be/unik6S8IZvY", category:"Decentralized Finance"},
    {title:"What Is The EVM (Ethereum Virtual Machine)?", image: `/images/whatsEVM.png`, video:"https://youtu.be/XTlT3I-Iy5o", category:"Blockchain Tech"},
    {title:"What Is Ethereum Gas + Gwei?", image: `/images/WhatisGas.png`, video:"https://youtu.be/ug0UE-NyYhQ", category:"Blockchain Tech"},
    {title:"Common Yield Farming Mistakes", image: `/images/farmingMistakes.png`, video:"https://www.youtube.com/watch?v=aGdPi4Itz_Q&t=7s", category:"Decentralized Finance"}, 
    {title:"Hot Wallets vs Cold Wallets? Crypto Wallets Explained.", image: `/images/blogHotvsColdthumbnail.png`, video:"https://www.youtube.com/watch?v=E5aIUEc5ZeQ", category:"Blockchain Tech"} ]
  return (
    
    <div className="videos"> 
    {postInfo.map(post => {
      return <Video postCategory={post.category} postTitle={post.title} vidUrl={post.video} imgUrl={post.image}/>
    })}
    </div>
    
    
     
  )
}
