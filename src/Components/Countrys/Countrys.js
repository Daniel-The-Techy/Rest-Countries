import React from 'react'
import { Link } from 'react-router-dom'

function Countrys({flag, code, name,population, Region, Capital, Theme}) {
  return (
    <>
   <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
                <div className='row justify-content-between'>
                    <div className='col-md-12 mb-5'>
                    <div className={Theme ? 'card border-dark darkmode shadow-lg rounded': 'border mx-auto'} style={{width: 18 + 'rem',height: 24 +'em' }}>
                     <img src={flag}  class="card-img-top h-50" alt="..."/>
            <div className="card-body">
                  <Link to={`Country/${code}`} style={{textDecoration:'none'}} className={Theme ? 'text-white' : 'text-dark'}>
            <h5 class="card-title text-center ">{name}</h5>
                    </Link>
                 <p class="card-text"><strong>population:</strong>  {population}</p>
                 <p class="card-text"><strong>Region:</strong>    {Region}</p>
                 <p class="card-text"><strong>Capital:</strong>   {Capital}</p>
  </div>
</div>
                    </div>
                   
                </div>
            </div>
    </>
  )
}

export default Countrys