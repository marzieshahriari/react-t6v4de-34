import React,{useState,useContext} from "react";
import  "./style.css";
import {data} from "./data";


const PersonContext = React.createContext();


export default function App() {

  const [people,setPeople] = useState(data);

  const RemovePerson = (id)=>{
    setPeople((people)=>{
      return people.filter((person)=> person.id !== id);
    });
  }
  return (
    <>
      <PersonContext.Provider value = {{RemovePerson}}>
          <h1>prop drilling</h1>
          <List people = {people} RemovePerson={RemovePerson}/>
      </PersonContext.Provider>  
    </>
  );
}


const List = ({people})=>{
      return(
        <>
          {
            people.map((person)=>{
                return <SinglePerson key={person.id}{...person} />
            })
          }
        </>
      )  
}

const SinglePerson = ({id,name})=>{

  const {RemovePerson} = useContext(PersonContext)
  return (
    <div>
      <li>{name}
         <button onClick={()=> RemovePerson(id)}>remove</button>
      </li>
    </div>  
  )
}