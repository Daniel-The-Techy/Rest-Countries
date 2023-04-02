import React, {useContext} from 'react'
import { ThemeContext } from '../../App';


function Countryheader({Switchmode,Themechange}) {
  return (
  <div className={Themechange ? 'darkmode' : 'bg-white'}>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xs-12'>
                <div className={Themechange ? 'd-flex justify-content-between shadow p-3 mb-5 darkmode rounded'
                 : 'd-flex justify-content-between shadow p-3 mb-5 bg-body rounded'}>
                <h3>Where in the World?</h3>
                <span><ion-icon name="moon-outline" className='bg-white'  size="large" onClick={Switchmode}></ion-icon> darkmode</span>
                </div>
            </div>
        </div>

    </div>
    </div>
    
    
  )
}

export default Countryheader