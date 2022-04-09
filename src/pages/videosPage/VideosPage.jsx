import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Videos from '../../components/videos/Videos'
import "./videosPage.css"

export default function VideosPage() {
  return (
    <div className='videos'>
        <Videos/>
        <Sidebar className="sidebar"/>

    </div>
  )
}
