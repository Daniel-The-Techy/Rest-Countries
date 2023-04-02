import React, {useState, useEffect, useContext} from 'react'
import Countrys from './Countrys';




function Country({bg}) {

     const [Country, setCountry] = useState([])
         
     const Countrystat= Country.status||Country.message;

     useEffect(() => {
       const data=async() => {
            const Countrys=await Fetchcountrys();
              setCountry(Countrys);
       }
     
       return () => {
           data();
       }
     }, [])

   const Fetchcountrys= async() => {
    const res=await fetch('https://restcountries.com/v3.1/all')
    const getData=await res.json();
    return getData;
   }


    const HandeSelection = (e) => {
       const data=e.target.value;

       if(data!==''){
        const fetchRegion = async() =>{
            const response=await fetch(`https://restcountries.com/v3.1/region/${data}`)
            const result=await response.json();
            setCountry(result);
           }
        
           try {
               fetchRegion();
           } catch (error) {
             console.log(error)
           }
         
        }

        
       
    }

    const HandleSearch = (e) =>{
        const datas=e.target.value;

        if(datas!==''){
        const fetchCountry = async() =>{
            const res=await fetch(`https://restcountries.com/v3.1/name/${datas}`)
            const data=await res.json();
            setCountry(data);
        }

        try {
            fetchCountry();
        } catch (error) {
            console.log(error);
        }
    }else{
       Fetchcountrys();
    }
}

     


  return (

    

  <div className={bg ? 'darkmode' : 'bg-white'}>
    <div className='container'>
        <div className='row justify-content-between'>
            <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className='row'>
                    <div className='col-xs-12 mb-3'>
                        <div className='position-relative'>
                        <ion-icon size="small" name="search-sharp" class="position-absolute"></ion-icon>
                        <input type='text' className={bg ? 'form-control form-control-lg darkmode border-dark text-white':'form-control form-control-lg'} 
                         onChange={HandleSearch} placeholder="search for a country"/>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className='col-xs-6 col-sm-4 col-md-3'>
                <div className='row'>
                    <div className='col-xs-12'>
                    <select class={bg ? 'form-select form-select-lg darkmode border-dark':'form-select form-select-lg'}  onChange={HandeSelection} aria-label="Default select example">
                       <option value="select-region" selected>Filter by Region</option>
                               <option value="Africa">Africa</option>
                                 <option value="America">America</option>
                                  <option value="Asia">Asia</option>
                                  <option value="Europe">Europe</option>
                                  <option value="Oceania">Oceania</option>
                            </select>
                    </div>
                </div>
            </div>
        </div>


     
         <div className='row mt-5 justify-content-around'>
         {!Countrystat ? (Country.map((item) => (
                   <Countrys flag={item.flags.png} 
                   code={item.cca2} 
                   name={item.name.common} 
                   population={item.population}
                    Region={item.region} 
                    Capital={item.capital}
                    Theme={bg}/>
             ))
             ) : (<p className='text-center'>No country found with your Search Criteria</p>)}
         </div>
         
        
         
    </div>
    </div>
    


  )
}

export default Country