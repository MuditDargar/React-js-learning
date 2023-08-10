//import logo from './logo.svg';
import './App.css';
// import User from './User';
// import Member from './Member';
//  import React ,{useState} from 'react';
//  import {Table} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import Child from './Child';
import {BrowserRouter as Router ,Link, Route ,Routes } from'react-router-dom' ;
import Users from './Users';
import Tds from './Tds' ;



// import {Link ,Routes ,Route } from 'react-router-dom' ;
// import Nav from './Nav';
// import Home from './Home';
// import About from './About';

// import Cd from './Cd' ;
//  import Vyom from './Vyom';
//  import Cols from './Cols';
// import SD from './SD';
//import Student from './Student';
// import Rolls from './Rolls';
// function App(){
//   // const [name,setName]=React.useState("Mudit")
//   // function getData(){
//   //   alert("hello from app")
//   // }
//   return (
//     <div className='App'>
//       {/* <h1>
//         Pass function as props
//       </h1> */}
//       {/* <User  data={getData}/>
//       <div style={{float:'right'}}>
//         <Member  data={getData}/>
//       </div> */}
//       <h1>component did mount in react</h1>
//       {/* props passing in 23 line */}
//       {/* <Rolls name={name} /> 
//       <button onClick={()=>setName("Mohit")}>Update Name</button> */}
//       {/* <Rolls /> */}

//     </div>
//   )
// }
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       data:"Rolex bhoi"
//     }

//   }
//   render(){
//     return(
//       <h1>Hello Mudit :- {this.state.data}</h1>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("constructor")
//     this.state={
//       name:"Mudit"
//     }
//   }
//   componentDidMount(){
//     console.warn("Component  did mount")
//   }
//   render(){
//     console.warn("render")
// return(
//  <div classname="App">
// <h1>Component Did mount {this.state.name}</h1>
// <button onClick={()=>this.setState({name:"Monchu" })}>Update karo</button>
//  </div>
// );
//   }

// }



// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("constructor")
//     this.state={
//       count:0
//     }
//   }
// componentDidUpdate(prevprops,prevstate,snapshot=1){
//   console.warn("component Did Update",prevstate.count,this.state.count,snapshot=snapshot+1)
//   if(this.state.count<10){

//     this.setState({count:this.state.count+1})
//   }
//   // if(prevstate.count==this.state.count){
//   //   alert("data is alrady same")
//   // }
// }
// render(){
//     console.warn("render")
//   return(
//     <div classname="App">
//       <h1>Component Did Update {this.state.count}</h1>
//       <button onClick={()=>this.setState({count:1})}>class change</button>
//     </div>
//   );
// }
// }


// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={
//       counter:0
//     }
//   }
//   shouldComponentUpdate(){
//      console.warn("should component update",this.state.counter) ;
//      // by default false hota hai
//      //return false ; asa likha hota hai ,so state update nhi hota hai
//      if(this.state.counter>5 && this.state.counter<10){
//        return true ; // by this true hai toh state update ho jaayegi
//      }

//   }
//   render(){
//   return(
//     <div className="App">
//     <h1>Should Component Update {this.state.counter}</h1>
//     <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update Counter </button>
//     </div>
//   );
// }

// }


// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         {
//           this.state.show ? <Student /> :<h1>child component remove</h1>
//         }
//         {/* <h1> Component Will Unmount</h1> */}
        
//         <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child component</button>
//       </div>
//     )
//   }
// }

// import React ,{useState ,useEffect} from 'react';
// // jab apan life cycle methods use karege jab apan useEffect hi use karege
// // Saare ke Saare life cycle method ek hook ke ander aate hai woh hai useEffect
// //jaha par bhi use word aajaye samaj lo  woh ek hook hai hook ki yahi nishani hoti hai
// // here the  in curly basics hook  is written in this form 
// function App (){
//   const[data,setData]=useState("Mudit Dargar") // this called distruturing
//   return(
//     <div className='App'>

// <h1>Hello Mudit</h1>
//   <h2>{data}</h2>
//   <button onClick={()=>setData("Randy Ortan")}> name change</button>
//     </div>
//   );  

// }

// import React, { useEffect, useState } from 'react';
// function App(){
// const[counter,setcounter]=useState(0)
// useEffect(()=>{
// console.warn("Use Effect");
// })

//   return (
//     <div className='App'>
//       <h1> Use Effect in React {counter}</h1>
//       <button onClick={()=>setcounter(counter+1)}> Update counter</button>
//     </div>
//   )
// }


// import React ,{useEffect,useState} from 'react';
// import Joint from './Joint';
// function App(props){
//  const [data,setdata]=useState(10);
//  const [count,setcount]=useState(20);
//   return (
//     <div className='App'>
//       {/* <h1>Count:{count}</h1>
//       <h1>data:{data}</h1> */}
//       <Joint  count ={count} data={data}/>
// <button onClick={()=>setcount(count+1)}> Update count</button>
// <button onClick={()=>setdata(data+1)}> Update data</button>

//     </div>
//   ) ;
// }

// import React from 'react';
// import './Style.css';
// import style from'./custom.module.css';
// function App(){
//   return (
//     <div className='App'>
//       <h1 className='primary'>Style type 1 in React JS</h1>
//       <h1 style={{color:'red',backgroundColor:'black'}}>Style type 2 in React JS</h1>
//       <h1 className={style.success}>Style type 3 in React JS</h1>


//     </div>
//   )
// }


// import './App.css';
// import React  from 'react';
// import {Button,Alert} from 'react-bootstrap';
// function App(){
  
//   return(
//     < div className='App'>
//       {/* <h1>Install Bootstrap</h1>
//       <Button onClick={()=>alert("Hello")}>Click me</Button>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button> */}
//       import Alert from 'react-bootstrap/Alert';


//       {/* {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))} */}
//   <Alert  variant='warning'>
//     this is  a warning alert-check it out
//   </Alert>
  
//     </div>
//   );
// }

// import React from 'react';
// import {Table} from 'react-bootstrap';
// function App(){
  // const students=['Anil','Sidhu','Rohit','Sachin']
  // map looping 
//   students.map((item)=>{
// console.warn( "my name is " + item)
//   });

//   for(let i=0 ;i<students.length ;i++){
//    // console.warn("  for loop my name is:",students[i]);
//   }

// const students=[
//   {NAME:'Mudit',EMAIL:'mudit@gmail.com',Contact:888},
//   {NAME:'sachin',EMAIL:'sachin@gmail.com',Contact:111},
//   {NAME:'aakash',EMAIL:'aakash@gmail.com',Contact:111},
//   {NAME:'eeah',EMAIL:'eeah@gmail.com',Contact:111}
// ]
//   return(
//     <div className='App'>
      {/* <h1>
        Handle Array in a list
      </h1>
      {
        students.map((data)=>
        <h1> Name is : {data}</h1>
        )
      } */}
    {/* {
  for(let i=0 ;i<students.length ;i++){
    <h1>{students[i]}</h1>
  }  
} */}
{/* <h1>Handle Array with list</h1>
<table border="2">
{
  students.map((data)=>
  <tr> 
    <td style={{ border: '2px solid black', padding: '5px' }}>{data.NAME}</td>
    <td style={{ border: '2px solid black', padding: '5px' }}>{data.EMAIL}</td>
    <td style={{ border: '2px solid black', padding: '5px' }}>{data.Contact}</td>
  </tr>
  )
}
</table> */}

{/* <h1>List With bootstrap Table</h1>
<Table bordered hover variant="light" responsive>
<tr>
    <td style={{ border: '2px solid black', padding: '5px' }}>Name</td>
    <td style={{ border: '2px solid black', padding: '5px' }}>EMAIL</td>
    <td style={{ border: '2px solid black', padding: '5px' }}>Contact</td>
  </tr>
{
  students.map((item,i)=>
  // <tr key={i}>
  //   <td style={{ border: '2px solid black', padding: '5px' }}>{item.NAME}</td>
  //   <td style={{ border: '2px solid black', padding: '5px' }} >{item.EMAIL}</td>
  //   <td style={{ border: '2px solid black', padding: '5px' }}>{item.Contact}</td>
  // </tr>
  item.Contact===111 ?
  <tr key={i}>
     <td style={{ border: '2px solid black', padding: '5px' }}>{item.NAME}</td>
     <td style={{ border: '2px solid black', padding: '5px' }} >{item.EMAIL}</td>
    <td style={{ border: '2px solid black', padding: '5px' }}>{item.Contact}</td>
   </tr>:null
  )
}
</Table>
    </div>
  )
} */}


// function App(){
//   const users=[
//     {
//       name:'mudit',email:'mudit@test.com',address:[
//         {Hn:"10",city:'delhi',country:'India'},
//         {Hn:"34",city:'mumbai',country:'India'},
//         {Hn:"100",city:'surat',country:'India'},
//         {Hn:"340",city:'jaipur',country:'India'},
//         {Hn:"45",city:'dhanbad',country:'India'},  ]
//     },
//     {
//       name:'sachin',email:'sachin@test.com',address:[
//         {Hn:"10",city:'delhi',country:'India'},
//         {Hn:"34",city:'mumbai',country:'India'},
//         {Hn:"100",city:'surat',country:'India'},
//         {Hn:"340",city:'jaipur',country:'India'},
//         {Hn:"45",city:'dhanbad',country:'India'},  ]
//     },
//     {
//       name:'aakash',email:'chordia@test.com',address:[
//         {Hn:"10",city:'delhi',country:'India'},
//         {Hn:"34",city:'mumbai',country:'India'},
//         {Hn:"100",city:'surat',country:'India'},
//         {Hn:"340",city:'jaipur',country:'India'},
//         {Hn:"45",city:'dhanbad',country:'India'},  ]
//     },
//     {
//       name:'Mohit',email:'dargar@test.com',address:[
//         {Hn:"10",city:'delhi',country:'India'},
//         {Hn:"34",city:'mumbai',country:'India'},
//         {Hn:"100",city:'surat',country:'India'},
//         {Hn:"340",city:'jaipur',country:'India'},
//         {Hn:"45",city:'dhanbad',country:'India'},  ]
//     },
//     {
//       name:'aloo',email:'vicky@test.com',address:[
//         {Hn:"10",city:'delhi',country:'India'},
//         {Hn:"34",city:'mumbai',country:'India'},
//         {Hn:"100",city:'surat',country:'India'},
//         {Hn:"340",city:'jaipur',country:'India'},
//         {Hn:"45",city:'dhanbad',country:'India'},  ]
//     },

//   ]
//   return(
    
//     <div className='App'>
//       <h1> nested list in nesting Array</h1>
//       <Table striped bgcolor='gold'variant='dark' >
//         <tbody>
//           <tr>
//           <td style={{color:'red'}}>SNo.</td>
//           <td style={{color:'red'}}>Name</td>
//           <td style={{color:'red'}}>Email</td>
//           <td style={{color:'red'}}>Address</td>
//           </tr>
//         </tbody>
//       {
//         users.map((item,i)=>
        
//        <tr key={i}>
//             <td style={{color:'blue',backgroundColor:'gold',padding:'5px'}} >{i+1}</td>
//         <td style={{color:'blue',backgroundColor:'gold',padding:'5px'}} >{item.name}</td>
//         <td style={{color:'blue',backgroundColor:'gold',padding:'5px'}}>{item.email}</td>
//         <td style={{color:'blue',backgroundColor:'gold',padding:'5px'}}>{

// <Table striped bgcolor='gold'variant='dark' >
//   <tbody>{
// item.address.map((data)=>
// <tr key={i} >
//   <td style={{padding:'5px'}} >{data.Hn}</td>
//   <td style={{padding:'5px'} } >{data.city}</td>
//   <td style={{padding:'5px'}} >{data.country}</td>
// </tr>
// )}
        
// </tbody>
// </Table>
// }
// </td>
// </tr>
//   )

    

// }

// </Table>
//     </div>3
//   )
// }
// function App(){
//   const users=[
//     {name:'Mudit' , email:'anil@test.com',contact:111},
//     {name:'Sahil' , email:'Sahil@test.com',contact:321},
//     {name:'aakash' , email:'aakash@test.com',contact:141},
//     {name:'rohit' , email:'rohit@test.com',contact:171},
//   ]
// return(
//   <div className='App'>
//     <h1> Reuse Component with list</h1>
  
//     {
//       users.map((item,i)=>
//       <Table>
//       <Vyom data={item} />
//       </Table>
//       )
//     }
//   </div>
// )
// }


// one way

// function App(){
//   return(
//     <Fragment>
    
//       <h1> React Fragment</h1>
//       <h1> React Fragment</h1>
//       </Fragment>
    
//   );
// }


//Second way


// function App(){
//   return(
//     <>
    
//       <h1> React Fragment</h1>
//       <h1> React Fragment</h1>
//       </>
    
//   );
// }


// 3rd way
// function App(){
//   return(
//     <React.Fragment>
    
//       <h1 > React Fragment</h1>
//       <h1 > React Fragment</h1>
//       </React.Fragment>
    
//   );
// }

// function App(){
//   return(
    
//     <div>
      
//     <h1 > React Fragment</h1>
//     <table>
//       <tbody>
//       <tr>
//       <Cols />
//       </tr>
//       </tbody>
//       </table>
//       </div>
    
//   );
// }


// class App extends PureComponent{
//   constructor(){
//     super();
//     this.state={
//       count:1 
//     }
//   }
//   render()
//   {
//     console.warn("check rerending")
//   return(
//     <div className="App">
//     {/* <h1> pure component in React : {this.state.count}</h1> */}
//     {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}
//     {/* <button onClick={()=>this.setState({count:this.state.count})}>Update </button> */}
//     <h1>User Component</h1>
//     <Cd  count={this.state.count}/>
// <button onClick={()=>this.setState({count:this.state.count})}>
// update the number
// </button>
//     </div>
//   );
// }
// }

// function App (){
// const [count,setcount]=useState(10);
// const [item,setitem]=useState(20);

// const multiCountMemo = useMemo (function multicount(){
//   console.warn("multicount")
//   return count*5 
// },[count])
//   return(
//     <div className='App'>
// <b  style={{color:'gold' }}><h2 style={{backgroundColor:'black'}}>Use Memo in hooks</h2></b>
// <h3 style={{color:'blue', backgroundColor:'silver'}}>Count : {count}</h3>

// <button onClick={()=>setcount(count+5)}> Update Count</button>
// <h3 style={{color:'yellowgreen', backgroundColor:'silver'}}> item : {item}</h3>
// <button onClick={()=>setitem(item+10)} > Update item</button>
// <h1 style={{color:'brown', backgroundColor:'green'}}>{multiCountMemo}</h1>
//     </div>
//   );
// }


// class App extends React.Component{
//   constructor(){
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount(){
//    // console.warn(this.inputRef.current.value="1000")
//   }
//   getVal(){
//     console.warn(this.inputRef.current.value)
//      this.inputRef.current.style.color="gold"
//      this.inputRef.current.style.backgroundColor="black" 
//   }
//   render(){
//     return(
//       <div className='App'>
//          <h1>
//     Ref in React
//       </h1>
//       <input type='Text' ref={this.inputRef} />
//       <button onClick={()=>this.getVal()}>Check REF</button>
//       </div>
//     );
//     }
  
// }

// function App(){
//   let iref=useRef(null)

//   function handle(){
//     console.warn("Function calls")
//     iref.current.value="Mudit Dargar"
//     iref.current.focus()
//     iref.current.style.color="blue"
//     iref.current.style.backgroundColor = "gold"
//     // iref.current.style.display="None"
//     // by upper line box will be hide after click on handle input
    
//   }
//   return( 
//     <div className='App'>
//     <h1> Use Ref in React js</h1>
//     <input  type="text" ref={iref}/>
//     <button onClick={handle}>Handle input</button>
//     </div>
//   )
  
  
// }

// function App (){
//   let impref=useRef(null)
//   function updateinput(){
//     impref.current.value='Monchu'
//     impref.current.style.color='red'
//     impref.current.style.backgroundColor='greenyellow'
//     impref.current.focus()
//   }
//   return(
// <div className='App'>
// <h1>FOrwardRef in React</h1>
// <Child ref={impref} />
// <button onClick={updateinput}>Update input box</button>
// </div>
//   );
// }


// function App(){
//   let[val,setval]=useState("md")
//   let[item,setitem]=useState("rm")
//   return(
//     <div className="App">
//       <h1> Controlled Statement </h1>
//       <input type='text' value={val} defaultValue="sachin" onChange={(e)=>setval(e.target.value)}/>
//       <br></br>
//       <input type='text' value={item} onChange={(e)=>setitem(e.target.value)}/>
//       <h2>value: {val}</h2>
//       <h2>item: {item}</h2>

//       </div>
//   );
// }
// export default React.forwardRef(App) ;
// function App(){
//   let inputref1=useRef(null)
//   let inputref2=useRef(null)
//   function submitform(e){
//     e.preventDefault()
//     console.warn("input field 1 value :" ,inputref1.current.value)
//     console.warn("input field 2 value :" ,inputref2.current.value)
//     let input3=document.getElementById('input3').value
// console.warn("input field 3  value  :  " ,input3 )
//   }
//   return(
// <div className='App'>
// <h1 style={{color:'#f12',backgroundColor:'black',}}>Uncontrolled Component</h1>
// <form onSubmit={submitform}>
// <br></br>

// <input  ref={inputref1} type='text' />
// <br></br>

// <input  ref={inputref2}type='text' />
// <br></br>
// <input id="input3" type="text" />
// <br></br>
// <button>Submit</button>
// </form>
// </div>
//   );
// }


// function App(){
//   return(
// <div className='App'>
//   <h1 style={{color:'magenta',backgroundColor:'cyan'}}>Simple HOC</h1>
//   <HOCRed cmp={Counter} />
//   <HOCGreen cmp={Counter} />
//   <HOCBLue cmp={Counter} />
//   {/* <Counter />
//   <Counter /> */}
// </div>
//   );
// }
// function HOCRed(props){
//   return (
//   <h2 style={{backgroundColor:'red',width:100}}>Neel<props.cmp /></h2>
//   )
// }
// function HOCGreen(props){
//   return (
//   <h2 style={{backgroundColor:'green',width:100}}>Nitin <props.cmp /></h2>
//   )
// }
// function HOCBLue(props){
//   return (
//   <h2 style={{backgroundColor:'blue',width:100}}> Mukesh<props.cmp /></h2>
//   )
// }
// function Counter(){
//   const [count,setcount]=useState(0)
// return ( <div>
//   <h1> {count}</h1>
//   <button onClick={()=>setcount(count+1)}>Update </button>
// </div>
// )
// }

// function App(){
//   return (
// <div className='App'>
//   {/* <h2>Routing Setup</h2> */}
//   <Nav />
 
//   <Routes>
//   {/* <Route path="/Home" element={<Home />} /> */}
//   <Route path="/About" element={<About />}/>
//   <Route path="/" exact={true}  element={<Home />} />
//   </Routes>


// </div>
//   );
// }

// function App(){
//   return (
// <div className='App'>
//   <h2>404  page-page Not found</h2>
  
// <Link to="/">Home</Link>
// <br></br>
// <Link to="/About">About</Link>
// <br></br>
// <Link to="/Login">login</Link>
// <br></br>
// <Routes>
// <Route path="/"  exact={true} element={<Home/>} />
// <Route path="/About" element={<About/>} />


// <Route path="*" element={<PageNotFound/>} />
// </Routes>
// </div>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h1>Home page</h1>
//       <p>This is the home page</p>
//     </div>
//   );
// }
// function About(){
//   return(
//     <div>
//       <h1>about page</h1>
//       <p>This is the about page</p>
//     </div>
//   );
//   }
// function PageNotFound(){
//   return(
//     <div>
//       <h1>404 Page</h1>
//       <p>This Page not found</p>
//     </div>
//   );
// }


// function App() {
//   let users = [
//     { id: 1, name: 'anil', email: 'anil@test.com' },
//     { id: 2, name: 'sam', email: 'sam@test.com' },
//     { id: 3, name: 'ram', email: 'ram@test.com' },
//     { id: 4, name: 'raju', email: 'raju@test.com' },
//     { id: 5, name: 'raj', email: 'raj@test.com' },
//     { id: 15, name: 'mudit', email: 'batman@dalle.com' },
//   ];

//   return (
//     <div className='App'>
//       <Router>
//         <h1 style={{ color: 'gold', backgroundColor: 'blue' }}>React Dynamic Routing</h1>
//         {users.map((item) => (
//           <div >
//             <Link to={`/user/${item.id}/${item.email}`}>

//               <h3>{item.name}</h3>
         
        
//             </Link>
//           </div>
//         ))}
//         <Routes>
//         <Route path='/user/:id/:email' element={<Users />} />
        
//       </Routes>
//       </Router>
//     </div>
//   );
// }


// function App(){
// //   fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
// //     result.json().then((resp)=>{
// // console.warn("result",resp)
    
// //      })
// //   })

//  const[data,setdata]=useState([]) ;
// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//     result.json().then((resp)=>{
// console.warn("result",resp)
// setdata(resp)
//      })
//   })
// },[])
// const filteredData = data.filter((item) => item.id === 1);

// console.warn(data)
//   return (
// <div className='App'>
//   <h1>Get API Call</h1>
//   <table border='2px'>
//     {/* <tr>
//       <td>ID</td>
//       <td>Name</td>
//       <td>Email</td>
//       <td>Mobile</td>
//     </tr> */}
//     {
//       filteredData.map((item)=>
//       <tr key={item.id} >
//       <td style={{padding:'10px'}}>{item.id}</td>
//       <td  style={{padding:'10px'}}>{item.name}</td>
//       <td  style={{padding:'10px'}}>{item.username}</td>
//       <td style={{padding:'10px'}} >{item.email}</td>
//       <td style={{padding:'10px'}} >{item.address.street}</td>
//       <td style={{padding:'10px'}} >{item.address.suite}</td>
//       <td style={{padding:'10px'}} >{item.address.city}</td>
//       <td style={{padding:'10px'}} >{item.address.zipcode}</td>
//       <td style={{padding:'10px'}}>{item.geo}</td>
      
//       <td style={{padding:'10px'}} >{item.phone}</td>
//       <td style={{padding:'10px'}} >{item.website}</td>
//       <td style={{padding:'10px'}} >{item.company.name}</td>
//       <td  style={{padding:'10px'}} >{item.company.catchPhrase}</td>
//       <td  style={{padding:'10px'}}>{item.company.bs}</td>
    
//     </tr>
//       )
//     }
//   </table>
// </div>
//   );
// }

// function App(){
//   const[name,setname]=useState("") ;
//   const[email,setemail]=useState("") ;
//   const[mobile,setmoblie]=useState("") ;

//   function saveuser(){
//     console.warn({name,email,mobile}) ;
//     let data={name,email,mobile}
//     fetch("https://jsonplaceholder.typicode.com/users",{
//       method:'POST',
//       headers:{
//         'Accept': 'application/json',
//     'Content-Type': 'application/json'
//       },
//       body:JSON.stringify(data)
      
//     }).then((result)=>{
//       //console.warn("result : ",result);
//       result.json().then((resp)=>
//       console.warn("resp",resp)
      
//       )
//     }
//     )
//   }
//   return(
    
//     <div className='App'>
//       <h1 style={{color:'black',backgroundColor:'purple'}}>Post API Example</h1>
//       <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} name="name"></input><br></br>
//       <input type='text' value={email} onChange={(e)=>{setemail(e.target.value)}} name="email"></input><br></br>
//       <input type='text' value={mobile} onChange={(e)=>{setmoblie(e.target.value)}}  name="mobile"></input><br></br>
      
//       <br></br>
// <button type='button' onClick={saveuser()}> Save new user</button>
//     </div>
//   );
// }

// App.js (or any parent component)




// const EntityTable = () => {
//   const [entities, setEntities] = useState([]);

//   useEffect(() => {
//     // Fetch the data from the API when the component mounts
//     fetchEntities();
//   }, []);

//   // Function to fetch entities from the API
//   const fetchEntities = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setEntities(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Function to handle entity deletion
//   const deleteEntity = async (id) => {
//     try {
//       // Make a DELETE request to the API endpoint to delete the entity
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // If the deletion was successful, update the state or refetch the data
//         fetchEntities();
//       } else {
//         console.error('Failed to delete entity.');
//       }
//     } catch (error) {
//       console.error('Error deleting entity:', error);
//     }
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Description</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {entities.map((entity) => (
//           <tr key={entity.id}>
//             <td>{entity.id}</td>
//             <td>{entity.name}</td>
//             <td>{entity.description}</td>
//             <td>
//               <button onClick={() => deleteEntity(entity.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//   );
// };

// export default EntityTable;



// function App() {
//   const [users, setUser] = useState([]) ;
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");



//   useEffect(() => {
//     getUsers();
//   }, [])
//   function getUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//       result.json().then((resp) => {
//         // console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
        
//         setEmail(resp[0].email)
      
//       })
//     })
//   }

//   function deleteUser(id) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   function selectUser(id)
//   {
//     let item=users[id-1];
//     setName(item.name)
//         setEmail(item.email)
      
//   }
//   function updateUser()
//   {
//     let item={name,email}
//     console.warn("item",item)
//     fetch(`https://jsonplaceholder.typicode.com/users/ `, {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }
//   return (
//     <div className="App">
//       <h1>Update User Data With API </h1>
//       <table border="1" style={{ float: 'left' }}>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Operations</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
               
//                 <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                 <td><button onClick={() => selectUser(item.id)}>Update</button></td>

//               </tr>
//             )
//           }
//         </tbody>
//       </table>
//       <div>
//       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
//         <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />

//         <button onClick={updateUser} >Update User</button>  
//       </div>
//     </div>
//   );
// }
// export default App;

// function App (){
//  const[data,setdata]=useState(1);
//  function updatecounter(){
// //   let rand= Math.floor(Math.random()*10) ;
// // setdata((previous)=>{
// //   console.warn(previous)
// //   if(previous < 5){
// //     alert("low value " )
// //   }
// //   else{
// //   return rand ;
// //   }
// // })

// //  
// for(let i=0 ;i<5;i++){

//   // ismae data ki value setdata() assigned hone ke pahle hi sync hojaati hai
//   //  setdata(data+1) ;
// setdata((pre)=>{
//   return pre+1 
// })
// }
//  }
//   return(
//   <div className='App'>
// <h2> {data}</h2>
// <button onClick={updatecounter}> click me to Update counter </button>
// <br></br>

//   </div>
//   )
// }

// export default App ;

function App(){
  const[num,setnum]=useState(0);
  return (
    <div className='App' style={{color:'gold' , backgroundColor:'black'}}>
    <Tds num={num}/>

    <button onClick={()=>setnum(Math.floor(Math.random() *10))}>Update Conter</button>
    </div>
  )
}

export default  App ;



// point of video : Context API 
// What we do 
// make common file for context file 
// make provider Wrapper in app.js
// make main js file for consumer context
// make button file for update context 
// make header and footer file


// provider :-  jeetni bhi har jagah par api aayegi matlab uss jagah data transfer hoga ..

//Consumer:- uss data ko use karna

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       color:"gold",
//       updateColor:this.updateColor
//     }
//     this.updateColor=()=>{
//       this.setState({
//         color:"red"
//       })
//     }
//   }
//   render(){

//     return(
//       <div className='App'>

//        <CommonContext.Provider value={this.state}>
//        <b > Complete and easy example of Context Api</b> 
//        </CommonContext.Provider>
//        <Main />
//          </div>
//     );
//   }
// }

// export default App ;

