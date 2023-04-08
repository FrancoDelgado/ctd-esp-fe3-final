import Contact from '../Routes/Contact'
import Detail from '../Routes/Detail'
import Favs from '../Routes/Favs'
import Home from '../Routes/Home'


export const routes = [
    {id :0, path: "/", Element: Home, title: "Home"},
    {id :1, path: "/odontologo/:id", Element: Detail, title: "Odontologo"},
    {id :2, path: "/favoritos", Element: Favs, title: "Favoritos"},
    {id :3, path: "/contact", Element: Contact, title: "Contacto"}
]