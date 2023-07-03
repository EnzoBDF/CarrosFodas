function busca(){
    let cod = document.getElementById("cod").value
    let url = './carros.json'
    fetch(url)
        .then(res => res.json())    
        .then(data => {
            for(var carro of data.ceps){
                if(cod === carro.codigo){
                    carroInfo.innerHTML = `
                        <div>
                            <p>Placa: ${data.placa}</p>
                            <p>Marca: ${data.marca}</p>
                            <p>Modelo: ${data.modelo}</p>
                            <p>Ano:${data.ano}</p>
                        </div>
                        
                        `;
                }
            }
        })
}