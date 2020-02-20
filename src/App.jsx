import React from 'react';
import NavBar from './NavBar';
import CoolHOne from './CoolHOne';
import FooterImg from './FooterImg';
import MyButton from './MyButton';


export const App = () => {
    return (
        <div>
            
        </div>
        <footer>
            <FooterImg img="icon1.png" title="Declarative" text="React makes it painless to create interactive UIs"/>
            <FooterImg img="icon2.png" title="Components" text="Build encapsulated components that manage their state"/>
            <FooterImg img="icon3.png" title="Single-Way" text="A set of immutable values are passed to the components"/>
            <FooterImg img="icon3.png" title="JSX" text="Statically-typed, designed to run on modern browsers"/>
        </footer>
    )
}
