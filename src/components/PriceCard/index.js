import React from 'react';
import Button from '../Button';
import { BoxDetail, BoxHeader, Wrapper } from './PriceCard.styles';



export default function PriceCard({children, ...restProps}) {

  return (
      <Wrapper {...restProps}>{children}</Wrapper>
  );

}

// Using Compound Components here: 

PriceCard.BoxHeader = function PriceCardBoxHeader({children, ...restProps}){
  return <BoxHeader {...restProps}>{children}</BoxHeader>
};

PriceCard.BoxDetail = function PriceCardBoxDetail({children, ...restProps}){
  return <BoxDetail {...restProps}>{children}</BoxDetail>
};


export const PriceCardContainer = (props) => (
  <PriceCard>
    <PriceCard.BoxHeader>
      <h3>{props.name}</h3>
      <h4 className="amount"><span>$</span>{props.amount}<span>/mon</span></h4>
      <Button href="#">choose this plan</Button>
    </PriceCard.BoxHeader>
    <PriceCard.BoxDetail>
      {
        props.approvedTraining &&(
          props.approvedTraining.map(item => (
              item.approved ? 
              // Gave a random id to each item in `Prices.json`
              <li key={item.id}><i className="fa fa-check"></i>{item.name}</li> 
              :
              <li key={item.id}><i className="fa fa-times"></i>{item.name}</li>
          ))
        )
      }
    </PriceCard.BoxDetail>
  </PriceCard>
)







