import {createContext,useContext} from 'react';

const LevelContext = createContext(1);

function Section({level,children}){
    return <section className='section'>
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
    </section>
}

function Heading(){
    const level = useContext(LevelContext);
    return <h1>{level}</h1>
}