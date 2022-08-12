import { useEffect, useState } from 'react';
import { useForms } from './customHooks/useForms';
import { saveFact } from './functions/saveFact';

import './styles/Home.css';
import './styles/general.css';

export const Home = (props) => {
    const {input, form} = useForms(props.page)
    const [fact, setFact] = useState({text: ""});
    const [render, setRender] = useState(false);
    const [rerender, setreRender] = useState(false);    //used for simple change to cause useeffect to be used on click

    useEffect(() => {
        const fetchData = () => {
            if (render === true) {
                console.log("home");
                const choices = ["trivia", "math", "date", "year"];
                function getRandom(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) ) + min;
                }
    
                const options = {
                    method: 'GET',
                    headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
                    }
                };
            
                fetch(`https://numbersapi.p.rapidapi.com/random/${choices[getRandom(0,3)]}?min=0&max=10000&json=true`, options)
                    .then(response => response.json())
                    .then(data => setFact(data))
                    .catch(err => console.error(err));
                
            }
        }
        
        fetchData();
    },[rerender])
    


    function generateFact() {
        setreRender(!rerender);
        setRender(true);
    }

    return (
        <div className="format">
            <div className="center-box">
                <h1>Home</h1>
                {form}
                <div className='button-container'>
                    <button type="button" onClick={() => generateFact()}>Get Random Fact</button>
                    <button type="button" onClick={() => saveFact(fact.text, render)}>Save this Fact</button>
                </div>
                <div>
                    {render && fact.text}
                </div>
            </div>
        </div>
    )
};
