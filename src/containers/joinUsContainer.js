import React from 'react';
import item from '../JsonData/Join.json';
import HeroAbout from '../components/Hero';


class JoinUsContainer extends React.Component{
    render(){
        return (
            <>
                
                <HeroAbout
        
                    key={item.id}
                    name={item.name} 
                    direction={item.direction} 
                    background={item.background} 
                    alt={item.alt}
                    image={item.image}
                    subtitle={item.subtitle} 
                    title={item.title}
                    text={item.text}
                    hasBtn={item.hasBtn}
                    content={item.content}
                    btnText={item.btnText}
                />
            </>
        )
    };
};



export default JoinUsContainer;


