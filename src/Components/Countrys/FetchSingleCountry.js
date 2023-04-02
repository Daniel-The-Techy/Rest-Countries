import React from 'react'

function FetchSingleCountry({item}) {
   
 let currencies= Object.values(item.currencies)[0].name;
 let Nativename=Object.values(item.name.nativeName)[0].official;
 let languages=Object.values(item.languages);

 
  return (
    <>
     <div className='col-sm-5'>
           
           <div className='row text-center'>
              <div className='col-xs-12 mb-2'></div>
                 <img src={item.flags.png}/>
           </div>

         </div>

         <div className='col-sm-4'>
            <div className='row d-flex'>
                <div className='col-xs-6'>
                  <h1>{item.name.common}</h1>
                    <div class="mt-4">
                        <p><strong>Native name</strong>  {Nativename}</p>
                        <p><strong>population</strong>  {item.population} </p>
                        <p><strong>Region</strong>  {item.region}</p>
                        <p><strong>Sub region</strong> {item.subregion}</p>
                        <p><strong>Capital</strong>  {item.capital} </p>
                    </div>
                </div>

            </div>
         </div>

         <div className='col-sm-3 mt-3'>
                    <div className='row mt-5'>
                        <div className='col-xs-12'>
                               <p><strong>Top Level Domain</strong>  {item.tld}</p>

                               <p><strong>Currencies</strong>  {currencies}</p>
                               <strong>languages</strong>

                               {languages.map((lan) => (
                                 <span>{lan},</span>
                                 ))}

                        </div>
                    </div>
                </div>
    </>
  )
}

export default FetchSingleCountry