function SD(props){
    const data={name:"Rohit Sharma",Jersey:45 ,email:"sharmajikabeta@gmail.com"};
    return (
        <div>
            <h1> User Name : </h1>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}
export default SD ;