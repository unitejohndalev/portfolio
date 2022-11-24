import React from 'react'

export default function Backdrop({sidebar, closesidebar}) {
  return <div className={sidebar ? "backdrop backdrop--open" : "backdrop"} onClick={closesidebar}></div>;
}
