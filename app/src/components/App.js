import React from 'react';
import { useSpring, animated } from 'react-spring';


const MyFunctionComponent = ()=>{
  const divAnimation = useSpring({ opacity:1 ,from:{opacity: 0}})
  return(
    <animated.div style={divAnimation}>
      <h1>Will I be animated?</h1>
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