import React from 'react'
import Posts from '../posts/Posts'
import Share from '../share/Share'
import Stories from '../stories/Stories'
import './home.scss'
export default function Home() {
  return (
    <div className='home'>
        <Stories/>
        <Share/>
        <Posts/>
    </div>
  )
}
