import './SearchBoxForm.css'
import { useState, useRef } from 'react';


function SearchBoxForm(props) {
    const formRef = useRef(); 
    const [theInput, setTheInput] = useState('');
    function handlesubmit_task1(event) {
      event.preventDefault();
      const { value } = formRef.current.value; 
      console.log("theInput",theInput)
      props.setType(theInput)

    }

    return (
      <>
        <form >
          {/* <input
            type='text'
            name="myInput"
            value={theInput}
            onChange={(e) => setTheInput(e.target.value)}
          /> */}
          <select defaultValue="NO2" ref={formRef} onChange={(e) => setTheInput(e.target.value)} >
            <option key="1" value="NO2">NO2</option>
            <option key="2" value="O3">O3</option>
            <option key="3" value="SO2">SO2</option>
            <option key="4" value="CO">CO</option>
          </select>
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handlesubmit_task1} // (3) <-- Attach submit handler 1
          >
            Check Daily records
          </button>
        </form>
      </>
    );
  }

export default SearchBoxForm;