import { useEffect, useState } from 'react';
import { useForms } from './customHooks/useForms';
import { saveFact } from './functions/saveFact';

import './styles/Trivia.css';
import './styles/general.css';

export const Trivia = (props) => {
    const {input, form} = useForms(props.page)
    const [fact, setFact] = useState({text: ""});
    const [render, setRender] = useState(false);
    const [rerender, setreRender] = useState(false);    //used for simple change to cause useeffect to be used on click

    
    useEffect(() => {
        
        const fetchData = () => {
            if (render === true) { 
                console.log("trivia");
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
                    }
                };
                
                fetch(`https://numbersapi.p.rapidapi.com/${input.trivia_number}/trivia?notfound=floor&json=true`, options)
                    .then(response => response.json())
                    .then(data => setFact(data))
                    .catch(err => console.error(err));
            }
        }
        
        fetchData();
    },[rerender])
    
   
    function generateFact() {
        if (input.trivia_number == null || input.trivia_number === "") {
            alert("error: Please Enter Valid Year!");
        }
        else {
            setreRender(!rerender);
            setRender(true);
        }
    }

    return (
        <div className="format">
            <div className="center-box">
                <h1>Trivia</h1>
                {form}
                <div className="button-container">
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
