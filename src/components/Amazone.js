import React from 'react';
import list from '../data';
import '../styling/Amazone.css'
import Cards from './Cards';

const Amazone=({handleClick}) =>{
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))

            
        }
    </section>
  )
}

export default Amazone
