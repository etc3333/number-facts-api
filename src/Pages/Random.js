import { useEffect, useState } from 'react';
import { useForms } from './customHooks/useForms';
import { saveFact } from './functions/saveFact';

import { BiFileFind } from 'react-icons/bi';
import { IoIosSave } from 'react-icons/io';

import './styles/general.css';

export const Random = (props) => {
    const {input, form} = useForms(props.page)
    const [fact, setFact] = useState({text: ""});
    const [render, setRender] = useState(false);
    const [rerender, setreRender] = useState(false);    //used for simple change to cause useeffect to be used on click

    useEffect(() => {
        const fetchData = () => {
            if (render === true) {
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
                <div className="box-title">Find Random Fact</div>
                {form}
                <div className='button-container'>
                    <BiFileFind className='generateFact' title='Get Random Fact' onClick={() => generateFact()} size={70}/>
                    <IoIosSave className='saveFact' title='Save this Fact' onClick={() => saveFact(fact.text, render)} size={70}/>
                </div>
                <div className='searchResult-container'>
                    <div className='searchResult'>
                        {render && fact.text}
                    </div>
                </div>
            </div>
        </div>
    )
};
