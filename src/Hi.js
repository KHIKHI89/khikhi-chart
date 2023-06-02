import React from 'react'
import {data} from "./donee"
 const Hi = () => {
    const hi = data.reduce((total , data) => total + data.Wilaya , 0)
    const by = data.filter(oui => oui.Vendeur === "Azouz").reduce((a,b) => a+b.Bénéfice , 0)
    const total = data.reduce((total , data) => total + data)
    console.log(by)
  return (
    <div></div>
  )
}

export default Hi