import React from 'react'
import "../shared/styles/global.css";

interface IApplication {
  children: React.ReactNode
}

export const Application = ({ children }:IApplication) => {
  return (
    <div>
      {children}
    </div>
  )
}
