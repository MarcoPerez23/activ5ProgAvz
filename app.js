var boton_solicitud = document.getElementById('solicitud')
var tabla_resultados = document.getElementById('tabla_resultados')

boton_solicitud.addEventListener('click', () => {
    fetch('http://api.icndb.com/jokes/random')
        .then(res => res.json())
        .then(res_json => {
            var jokes = res_json.value.joke
            console.log(res_json)

            tabla_resultados.innerHTML += "<tr>"+
                                            "<td>"+1+"</td>"+
                                            "<td>"+jokes+"</td>"+
                                            "</tr>"
            
            
        })
})