import { useState } from 'react';

//choose proper form to render for the page
export const useForms = (page) => {
    const [inputs, setInputs] = useState({
      month: "1",
      day: "1"
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    } 

    /*

    Random page


    */
    if (page === "random") {
      return {
        input: inputs,
        form: (
          <div>

          </div>
        )
      }
    }

    /*

    Date page


    */
    else if (page === "date") {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const listMonths = months.map(month =>
        <option key={month} value={months.indexOf(month)+1}>{month}</option>
      );
      
      //fill in array with consective array
      function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      }
      //ensure that choices for days are respective to month
      let days;
      if (inputs.month === "1" || inputs.month === "3" || inputs.month === "5" || 
        inputs.month === "7" || inputs.month === "8" || inputs.month === "10" || inputs.month === "12") {
        days = range(1, 31);
      }
      else if (inputs.month === "4" || inputs.month === "6" || inputs.month === "9" || inputs.month === "11") {
        days = range(1,30);
      }
      else {
        days = range(1,28);
      }
      const listDays = days.map((day) => 
        <option key={day} value={day}>{day}</option>
      );
      return {
        input: inputs,
        form: (
          <form>
            <label> Enter Month:
              <select name="month" value={inputs.month || ""} onChange={handleChange} >
                {listMonths}
              </select>
            </label>
            <label> Enter Day:
              <select name="day" value={inputs.day || ""} onChange={handleChange}>
                {listDays}
              </select>
            </label>
          </form>
        )
      }
    }

    /*

    Year page


    */
    else if (page === "year") {
      return {
        input: inputs,
        form:  (
          <form>
            <label> Enter Any Year:
              <input type="number" autoComplete='false' name="year" value={inputs.year || ""} onChange={handleChange} />
            </label>
          </form>
        )
      }
    }

    /*

    Math page


    */
    else if (page === "math") {
      return {
        input: inputs,
        form: (
          <form>
            <label> Enter Any Integer:
              <input type="number" autoComplete='false' name="math_number" value={inputs.math_number || ""} onChange={handleChange} />
            </label>
          </form>
        )
      }
    }

    /*

    Trivia page


    */
    else if (page === "trivia") {
      return {
        input: inputs,
        form: (
          <form>
            <label> Enter Any Integer:
              <input type="number" autoComplete='false' name="trivia_number" value={inputs.trivia_number || ""} onChange={handleChange} />
            </label>
          </form>
        )
      }
    }
    
    return (
      <h1>Page not found</h1>
    )
  }