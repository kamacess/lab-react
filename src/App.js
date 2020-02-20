import React from 'react';
// STYLES
import './styles/App.css';
import './styles/footer.css';
import './styles/CoolHOne.css';
import './styles/MyButton.css';
import './styles/Nav.css';
// COMPONENTS
import NavBar from './NavBar';
import CoolHOne from './CoolHOne';
import FooterImg from './FooterImg';
import MyButton from './MyButton';


export const App = () => {
    return (
        <div>
            
            
            <div className="main-container">
              <NavBar  img1 = './images/ironhack-logo.svg' img2 ='./images/menu-top.svg'/>
              <CoolHOne
              title = 'Say hello to ReactJS' text = 'You will learn a frontend framework from scratch, to become a ninja developer'
              />
              <MyButton bg="white" color="black">
                Awesome!
              </MyButton></div>

              <footer>
                <FooterImg img="./images/icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
                <FooterImg img="./images/icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
                <FooterImg img="./images/icon3.png" title="Single-Way" text="A set of immutable values are passed to the components"/>
                <FooterImg img="./images/icon3.png" title="JSX" text="Statically-typed, designed to run on modern browsers"/>
              </footer>
        </div>
        
    )
}


export default App;
