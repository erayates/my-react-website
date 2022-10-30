import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllGit } from '../../store/gitSlice'

function Index() {
    const selector = useSelector(selectAllGit)
    console.log(selector)

  return (

    <div>index</div>
  )
}

export default Index