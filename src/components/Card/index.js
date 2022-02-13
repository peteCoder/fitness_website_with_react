import React from 'react';
import Button from '../Button';
import { Image, Icons, Content, Title, Wrapper } from './Card.styles';

import {calcTime } from '../../helpers';





function Card({children, ...restProps}) {

  return (
      <>
        <Wrapper {...restProps}>
          {children}
        </Wrapper>
      
      </>
  );

}

const CardContainer = ({image, title, days, hours, author, date}) => {
  return (
    
      <Card>
          <a href={author ? "#home" : null}>
            <Card.Image>
              <img src={image} alt='img'/>
            </Card.Image>
          </a>
        
        <Card.Content>
          { !author ?
            (<Card.Icons>
              <span><i className="fa fa-calendar"></i>{days}</span>
              <span><i className="fa fa-clock"></i>{calcTime(hours)}</span>
            </Card.Icons>) : null
          }
          
          {
            author ?
            <a href="#home">
              <Card.Title className="special" >{title}</Card.Title>
            </a>
            : <Card.Title>{title}</Card.Title>
          }
          
          
          { !author ? <Button href="#home">read more</Button> : null}
          {
            author && (
              <>
                <Card.Icons className="special">
                  {
                    date && <span><i className="fa fa-calendar"></i>{date}</span>
                  }
                  <span><i className="fas fa-user"></i>by {author}</span>
                
                </Card.Icons>
              </>
            )
          }
        </Card.Content>
      </Card>
  )
}


Card.Image = function CardImage({children, ...restProps}){
  return <Image {...restProps}>{children}</Image>
}
Card.Icons = function CardIcons({children, ...restProps}){
  return <Icons {...restProps}>{children}</Icons>
}
Card.Content = function CardContent({children, ...restProps}){
  return <Content {...restProps}>{children}</Content>
}
Card.Title = function CardTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}


export default CardContainer;

