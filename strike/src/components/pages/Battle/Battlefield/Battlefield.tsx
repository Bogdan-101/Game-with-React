import React, { useEffect } from 'react'
import { Skeleton } from '../../../../types/Heroes/Skeleton'
import './Battlefield.css'

export const Battlefield: React.FC = () => {
  useEffect(() => {
    const skeleton1 = new Skeleton()
    const skeleton2 = new Skeleton()
    console.log(skeleton1, skeleton2)
    skeleton1.performAction(skeleton2)
  })

  return <div className="field" />
}
