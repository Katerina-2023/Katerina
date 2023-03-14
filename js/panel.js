const addProduct = document.querySelector('input[type=submit]')


addProduct.addEventListener('click',(Event)=>{
    Event.preventDefault()
    //product - id  ф теге form
    let data = new FormData(product)

    
    //посмотреть все поля объекта data
    //data.entries() - Возвращает массив 
    for (let [k,v] of data.entries()){
       // console.log(k,v)
    }
    //return false
    fetch('hendler.php',{
        method:'POST',
        body: data
    })
    .then(response=>response.text())
    
})