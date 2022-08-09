import React from 'react'
import { SubTitle } from '../components/Subtitle'
import { useNavigate } from 'react-router-dom';
import data from '../components/data';


export const Roastery = () => {

const navigate = useNavigate()

  return (
    <section className='roastery_outer sub_outer'>
      <div className="roastery_inner inner">
        <SubTitle title='로스터리' numtitle='16개'></SubTitle>
        <div className="roastery_container_outer">
            <div className='container'>
                {
               data.map((value) => {
                 if(value.id==='Roa01_logo')
                 return (
                    <div className='col-md-3' key={value.id} onClick={()=>{navigate('/brand')}}>
                        <div className="roastery_box">
                            <div className="roastery_logo_box">
                            <img src={value.img} width='110px'alt='원두로고이미지' />
                            </div>
                            <h3>{value.title}</h3>
                        </div>
                    </div>
                )
                else {
                    if(value.id.includes('logo'))
                    return(
                        <div className='col-md-3' key={value.id}>
                            <div className="roastery_box">
                                <div className="roastery_logo_box">
                                <img src={value.img} width='110px'alt='원두로고이미지' />
                                </div>
                                <h3>{value.title}</h3>
                            </div>
                        </div>
                    )
                 }
                })
             }        
            </div>
        </div>
      </div>
    </section>
   
  )
}
