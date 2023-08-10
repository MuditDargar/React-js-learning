function Student(Props){
    console.warn(Props)
    return (
        <div style={{backgroundColor:"skyblue", margin:35}}>
            <h1><i>Hello {Props.name}</i></h1>
            <h2><i> Email: {Props.email}</i></h2>
            <h4><i> Address: {Props.other.address}</i></h4>
            <h4><i> Mobile: {Props.other.mobile}</i></h4>
           
        </div>
    )
}



export default Student ;