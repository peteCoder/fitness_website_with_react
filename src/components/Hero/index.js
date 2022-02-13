import React from 'react';
import { Section } from './Hero.styles';
import Button from '../Button';



export default function HeroAbout({
  name, 
  direction, 
  background, 
  alt, 
  image, 
  subtitle, 
  title, 
  text, 
  hasBtn, 
  btnText,
  content
}) {

  return (
    <>
      <Section background={background} className={name} id={name}>
        <div className="container">
            <div className={direction}>
              <div className="col-md-6">
                  <img src={image} className="w-100" alt={alt} />
              </div>
              <div className="col-md-6 text-center text-md-left">
                  <span>{subtitle}</span>
                  <h3>{title}</h3>
                  {hasBtn && <Button href="#home">{btnText}</Button>}

                  {text &&
                    <p>{text}</p>
                  }

                  { content &&
                    <ul className="items">
                      {content.map((item, index) => <li key={index}><i className="fas fa-check-square"></i>{item}</li>)}
                    </ul>
                  }
                    
              </div>
            </div>
        </div>
      </Section>
    </>
  );

}















