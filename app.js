var boton_solicitud = document.getElementById('solicitud')
var tabla_resultados = document.getElementById('tabla_resultados')
var joke_categories = document.getElementById('joke_categories')
var jokes_quantity = document.getElementById('jokes_quantity')

boton_solicitud.addEventListener('click', () => {

    if (joke_categories.value == 'all' && jokes_quantity.value == 1) {
        fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(res_json => {
            var joke = res_json.value.joke
            console.log('logged joke id: '+res_json.value.id+', category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+1+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            
            
        })
    } else if (joke_categories.value == 'all' && jokes_quantity.value != 1) {
        var quant = jokes_quantity.value
        fetch(`http://api.icndb.com/jokes/random/${quant}`)
        .then(res => res.json())
        .then(res_json => {
            console.log(res_json.value)
            console.log('logged joke category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            for(let i=0; i< res_json.value.length; i++){
                var joke = res_json.value[i].joke
                tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+i+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            }    
            
        })
    } else if (joke_categories.value == 'nerdy' && jokes_quantity.value == 1) {
        fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
        .then(res => res.json())
        .then(res_json => {
            var joke = res_json.value.joke
            console.log('logged joke id: '+res_json.value.id+', category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+1+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            
            
        })
    } else if (joke_categories.value == 'nerdy' && jokes_quantity.value != 1) {
        var quant = jokes_quantity.value
        fetch(`http://api.icndb.com/jokes/random/${quant}?limitTo=[nerdy]`)
        .then(res => res.json())
        .then(res_json => {

            console.log('logged joke category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            for(let i=0; i< res_json.value.length; i++){
                var joke = res_json.value[i].joke
                tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+i+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            }  
            
            
        })
    } else if (joke_categories.value == 'explicit' && jokes_quantity.value == 1) {
        fetch('http://api.icndb.com/jokes/random?limitTo=[explicit]')
        .then(res => res.json())
        .then(res_json => {
            console.log(res_json.value)
            var joke = res_json.value.joke
            console.log('logged joke id: '+res_json.value.id+', category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+1+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            
            
        })
    } else if (joke_categories.value == 'explicit' && jokes_quantity.value != 1) {
        var quant = jokes_quantity.value
        fetch(`http://api.icndb.com/jokes/random/${quant}?limitTo=[explicit]`)
        .then(res => res.json())
        .then(res_json => {
            console.log('logged joke category: '+joke_categories.value+', quantity: '+ jokes_quantity.value)
            console.log('selected category : '+joke_categories.value)

            for(let i=0; i< res_json.value.length; i++){
                var joke = res_json.value[i].joke
                tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+i+"</td>"+
                                            "<td>"+joke_categories.value+"</td>"+
                                            "<td>"+joke+"</td>"+
                                            "</tr>"
            }
        })
    }
})