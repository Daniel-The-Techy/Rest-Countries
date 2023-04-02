import React, {useState, useEffect, useContext} from 'react'
import { useParams} from 'react-router-dom'
import Country from './Country';
import Countryheader from './Countryheader';
import FetchSingleCountry from './FetchSingleCountry';
import { useNavigate} from 'react-router-dom';
import '../../App.css'


function Fetchcountry({theme}) {

    const [SingleCountry, setSingleCountry] = useState([])

    const Navigate=useNavigate();


       
    const Redirect=() => {
      Navigate('/')
    }

    const params =useParams();

    useEffect(() => {
      const data = async() => {
        const response=await fetchSingleCountry();
        setSingleCountry(response)
      }
    
      return () => {
        data();
      }
    }, [])
    


    const fetchSingleCountry = async () => {
        const res=await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
        const data=await res.json()
        return data;
    }

  return (
    
    <>
   <div style={{height:'100vh'}}>
<div className='container'>
<button className={theme ? 'btn btn-white p-2 shadow-lg bg-body ':'btn btn-white text-white p-2 shadow-lg bg-dark'} onClick={Redirect}>Go back</button>

    <div className='row justify-content-between'>
    {SingleCountry.map((Country) => (
           <FetchSingleCountry item={Country}/>
    ))}
    </div>
    </div>
    </div>
</>
  )
}

export default Fetchcountry