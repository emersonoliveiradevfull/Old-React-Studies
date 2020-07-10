export const submitUserAction = (data) => {
    let url = "http://127.0.0.1:8000/"
    fetch(url, {
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
      .then(json => {console.log(json)})

    console.log(data)
}