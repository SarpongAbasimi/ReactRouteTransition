import React from 'react';
import { useSpring, animated } from 'react-spring';


const MyFunctionComponent = ()=>{
  const divAnimation = useSpring({ opacity:1 ,from:{opacity: 0}})
  const BAnimation = useSpring({ background:'green' ,from:{background: 'gold'}})
  const numbers = useSpring({ number:2 , from:{number: 10}})
  return(
    <animated.div style={divAnimation}>
      <h1>Will I be animated?</h1>
      <animated.h1>{numbers.number}</animated.h1>
      <animated.span style={ BAnimation}>hahah</animated.span>
    </animated.div>
  );
}

export class App extends React.Component{
  render(){
    return(
      <div>
        <MyFunctionComponent/>
      </div>
    );
  }
}