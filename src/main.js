import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

authentication()
function authentication(){
    axios.get("http://localhost:8080/bikeStoreBis/api/utilisateur")
        .then(response=>{console.log(response.data)})
        .catch(error=>{console.log(error)});
}
const app = createApp(App)

app.use(router, axios)

app.mount('#app')
