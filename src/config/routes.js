import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Colecciones from '../secciones/Colecciones'
import Contacto from '../secciones/Contacto'
import Carrito from '../secciones/Carrito'

const routes = [
    { path:"/dashboard",
    component: Dashboard,
    },

    { path:"/Home", 
    component: Home,
    },

    { path:"/login",
    component: Login,
    },

    { path:"./colecciones", 
    component: Colecciones,
    },

    { path:"/Contacto", 
    component: Contacto,
    },

    { path:"/Carrito", 
    component: Carrito
    },

    { path:"/*",
    //el * quiere decir not found
    component: NotFound,
    },   
]

export default routes