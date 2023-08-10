import logo from './logo.svg';
import './App.css';
import User from './User'
import Md from './Md'
import Fdm from './Fdm';
import Test from './Test' ;
import Best from './Best';
import {useState} from 'react' ; 
import React from 'react';
import Ram from './Ram' ;
import Profile from './Profile';
import Users from  '/Users' ;
// import Student from './Student';
// alert("hello")
function App() {

// // const[data,setData]=useState("Mudit Dargar")
// const[data,setData]=useState(0)









  // let data="Mudit Dargar";
//   function Apple(){
//     return (<div>
//       <i>Apple iphone 14 pro max</i>
//     </div>)
//   }
//   function Rolex(){
// alert("function called") ;
// // data="sachin";
// // alert(data) ;
//   }

// function updateData(){
//   setData(data+1)
// }
// console.warn("____________")

// const[data,setdata]=useState(null)
// const[print,setprint]=useState(false)
// function getData(val){
//   console.log(val.target.value)
//   setdata(val.target.value)
//   setprint(false)
// }


// const[Status,setStatus]=React.useState(false)


// const[name,setName]=useState("")
// const[tnc,setTnc]=useState(false)
// const[interest,setInterest]=useState("")



// function GetFormData(e){
//   console.log(name,tnc,interest)
//   e.preventDefault()
// }

  return (
    <div className="App">
      {/* {
        print?
      <h1>{data}</h1>
      :null  */}
{/* } */}
      {/* <h1>{data}</h1> */}
     {/* <h1>Hello World</h1> */}
     {/* <User />
     <Md />
     <Fdm/> */}
   {/* <Apple/>
<Test/>
<Best/> */}

{/* click on events  */}
{/* <button onClick={Rolex}>Click me</button> */}
{/* <button onClick={()=>alert("hello duniya")}>Click me</button> */}
{/* <button onClick={()=>Rolex()}>Click me</button> */}
{/* <h1>State in React</h1> */}
{/* <h1>{data}</h1>
<button onClick={updateData}>Update Data</button> */}
{/* <h1>Props in React ... </h1> */}
{/* <Student   name={"sachin"} email="sachinTen@gmail.com" other={{address:'Mumbai', mobile:"000"}}/>
<Student   name={"Suresh"} email="rainasuresh@gmail.com"  other={{address:'Gaziabad',mobile:"111"}}/>
<Student   name={"Dhoni"} email="MSDjeeva@gmail.com"  other={{address:'Ranchi',mobile:"222"}}/> */}

{/* <h2>Get Input box value</h2> */}
{/* <input type="text" onChange={getData} />
<br></br>
<button onClick={()=>setprint(true)}> Print Data</button> */}


{/* 
{
  Status ? <h1>Hello World</h1> : null
} */}


{/* <h1>Hello world</h1> */}
 {/* this is using two buttons */}
{/* <button onClick={()=>setStatus(false)}>Hide</button>
<button onClick={()=>setStatus(true)} >Show</button> */}

{/* now do with single button toggle  mean */}
{/* 
<button onClick={()=>setStatus(!Status)} >Toggle</button>  */}


{/* <h1> Handle Form in React</h1>
<form onSubmit={GetFormData}>
<input type="text" placeholder="enter name"  onChange={(e)=>setName(e.target.value)}/>
<br></br>
<select onChange={(e)=>setInterest(e.target.value)}>
<option>Select Options</option>
<option>Marvel</option>
<option>DC comic</option>

</select>
<br></br>
<input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} />
<span>Accept Terms and conditions</span>
<br></br>
<button type='submit'>Submit</button>

</form> */}



<Users />

    </div>
  );
}

//  class App extends React.Component{
//  constructor(){
//      super();
//      this.state={
//        data:"Rohit Sharma"
// //       // if 
// //       data:1
//     }
//    }
// //   Fssi(){
// //     this.setState({data:this.state.data+1})
// //     // this.setState({data:"Suresh Raina"})
// //   }
//   render(){
//     return(
//  <div className='App'>
 
//   {/* <h1>{this.state.data}</h1>
//    <button onClick={()=>this.Fssi()}>Update Data</button> */}
// <Ram name={this.state.data} email="sachinsara@gmail.com"/>
// {/* <Ram name={this.state.data} email="sureshraina@gmail.com"/>
// <Ram name={this.state.data} email="yuvisingh@gmail.com"/> */}
// <button onClick={()=>this.setState({data:"mudit"})}>UPName</button>
//  </div>
//     );
//   }

  
//  }

export default App;
