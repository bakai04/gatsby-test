import React from 'react';
import "./layout.scss";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className={"container"}>
      {children}
    </div>
  )
}
