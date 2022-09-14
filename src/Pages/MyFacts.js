import { useEffect, useState, useRef } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { IoIosSave } from 'react-icons/io';

import './styles/MyFact.css';

export const MyFacts = () => {
  const [savedFacts, setSavedFacts] = useState([]);
  let tobeDeleted = useRef([]); //do not reset in code must contain all the deletions
  let trackList = useRef();  //will always carry most recent changes to rendered list (with the html in it)
  let trackStorage =useRef(); //will always carry most recent changes to localstorage
  let originalSaveFacts = useRef(); //carries the original list on first entering My Facts
  let originalLocalStorage = useRef(JSON.parse(localStorage.getItem("SavedFactList")));
  
  useEffect(() => {
    setSavedFacts(trackList.current);
  },[]);

  const selectFact = (e) => {
    e.currentTarget.classList.toggle("selected");
    tobeDeleted.current[e.currentTarget.id] = (tobeDeleted.current[e.currentTarget.id] == null) ? e.currentTarget.id : null;
  };
  
  const saveList = () => {
    let filteredDelete = tobeDeleted.current.filter((element) => element != null);
    trackStorage.current = [...originalLocalStorage.current];
    
    for (let i = filteredDelete.length - 1; i >= 0; i--) {
      trackStorage.current.splice(filteredDelete[i], 1);  //for resaving to localstorage
    }
    localStorage.setItem("SavedFactList", JSON.stringify(trackStorage.current));
    alert("List Saved Successfully");
  };

  const deleteFacts = () => {
    let filteredDelete = tobeDeleted.current.filter((element) => element != null);
    trackList.current = [...originalSaveFacts.current];
    for (let i = filteredDelete.length - 1; i >= 0; i--) {
      trackList.current.splice(filteredDelete[i], 1);
    }

    setSavedFacts(trackList.current);
  };

  const check = JSON.parse(localStorage.getItem("SavedFactList"));
    if (check) {
      trackList.current = check;
      trackList.current = trackList.current.map((fact, index) => {
        return (
          <div key={index} id={index} className="list-fact" onClick={(e) => selectFact(e)}>
            {fact}
          </div>
        )
      }
      );
      originalSaveFacts.current = [...trackList.current];
    }
  return (
    <div className='format-MyFacts-container'>
      <div className="format-MyFacts">
        <div className="list-box">
          <div className="box-title">You have {savedFacts.length} saved fact{savedFacts.length === 1 ? "" : "s"}!</div>
          <div className='utilities-container'>
            <div id="fact-list-instructions">
              {savedFacts.length === 0 ? "Click on Tabs to find facts" : ""} <br />
              Click on Facts to Select Them
            </div>
            <div className='trashcan-icon-container'>
              <span className="trashcan-icon" title='Remove Selected Facts' onClick={(e) => deleteFacts(e)}>
                <GoTrashcan size={70}/>
              </span>
            </div>
            <div className='button-container'>
              <IoIosSave id='IoIosSave-icon' title='Save List' onClick={() => saveList()} size={70}/>
            </div>
          </div>
          <div>
            <br />
            {savedFacts}
          </div>
        </div>
      </div>
    </div>
  )
    
}