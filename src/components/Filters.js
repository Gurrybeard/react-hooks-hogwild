import React from 'react'

export default function Filters({handleFilter}) {
  return (
    <div className='ui eight wide column'>
      <fieldset>
     <span> isGreased:</span> <input  onChange={handleFilter} type="radio" name='filter' id='greased' value='greased'/>
     <br />
     <span>Sort by: Name</span> <input type="radio" name='filter' onChange={handleFilter} id='name' value='name'/> 

     <span>Weight</span> <input type="radio" onChange={handleFilter} id='weight' name='filter' value='weight' />
     <br />     
     </fieldset>
     
    </div>
  )
}
