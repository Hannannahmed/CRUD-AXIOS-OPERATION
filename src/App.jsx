import React from 'react'
import GetApi from './API/GetApi'
import PostApi from './API/PostApi'

const App = () => {
  return (
    <>
    <div className="container d-flex">

    <GetApi />
    <PostApi />
    </div>
    
    
    </>
  )
}

export default App