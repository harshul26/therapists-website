import React from 'react'
import art1 from '../images/Formpic/article1.jpeg'
import art2 from '../images/Formpic/article2.jpeg'
import eye from '../images/Formpic/eye.webp'


export const Reviwes = () => {
  let fontstyle ={
    fontStyle : "italic" ,
    margin : "50px"
  }
  return (
    <div className="text-center container menu">
      <h1>Read top articles from health experts</h1>
      <div className="menuList text-center" style={fontstyle}>
        <div className="menuItem">
          <img src={art1} alt="" height={500} width={10000}/>
          <h6>Coronavirus</h6>
          <p>News on Coronavirus</p>
          <p>As of April 10, 2020, COVID-19 currently affects 210 countries across the globe and 7,600 confirmed cases in India. </p>
        </div>
        <div className='menuItem'>
          <img src={art2} alt="" height={500} width={10000} />
          <h6>Vitamins & Supplements</h6>
          <p>Eating right to build Immunity Against Cold and viral Infections</p>
          
        </div>
        <div className="menuItem">
          <img src={eye} alt="" height={500} width={10000} />
          <h6>what you can do to treat a pink Eye at home</h6>
          <p>Apply a cold compress,Apply tea bags ,Use disinfectant wipes ,Consume a vitamin-rich diet , Take probiotics , Use fresh tissues or towels to wipe your face regularly. </p>
        </div>
      </div>
    </div>
  )
}



