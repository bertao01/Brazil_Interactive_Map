var map = document.getElementById('map')
var state 
var array_states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito+Federal','Espírito+Santo','Goiás','Maranhão','Mato+Grosso','Mato+Grosso+do+Sul','Minas+Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio+de+Janeiro','Rio+Grande+do+Norte','Rio+Grande+do+Sul','Rondônia','Roraima','Santa+Catarina','São+Paulo','Sergipe','Tocantins']
var text_state = document.getElementById('description')
var array_region = ['north','northeast','midwest','southeast','south']
var region


function redirect(state){
    
    switch (state) {
        case state:
            window.location.href = `https://www.google.com/search?q=${array_states[state]}&oq=google&aqs=chrome..69i57j0j69i59j0l2j69i65j69i60l2.4590j0j9&sourceid=chrome&ie=UTF-8`
        break
    }
}

function select_region(region){
    
    switch (region) {
        case region:
            map.src = `images/${array_region[region]}.png`
        break

    }
}

