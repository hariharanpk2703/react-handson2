import React, {useState} from 'react'

const Inputs = () => {

const [maxSubmit, setMaxSubmit] = useState({Name: "",Department:"",Rating:""})
const [records, setRecords] = useState([])

const handleInput = (i) =>{
const name = i.target.name;
const value = i.target.value;
console.log(name,value);
setMaxSubmit({...maxSubmit, [name] : value })
}

const handleSubmit = (i) =>{
    i.preventDefault();
const Newrecords = { ...maxSubmit, id: new Date().getTime().toString()}
    console.log(records);
    setRecords([...records,Newrecords]);
    console.log(records);
}


return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="c">Name: </label>
                <input type="text" value={maxSubmit.Name} onChange={handleInput} name="Name" id="Name" />
            </div>

            <div>
                <label htmlFor="Department">Department: </label>
                <input type="text" value={maxSubmit.Department} onChange={handleInput} name="Department" id="Department" />
            </div>


            <div>
                <label htmlFor="Rating">Rating: </label>
                <input type="text" value={maxSubmit.Rating} onChange={handleInput}  name="Rating" id="Rating" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Inputs