import {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Aside = ({categorys}) => {

    const [open,setOpen]= useState(false);

    const toggleMenu = () => {
    setOpen(!open);
  };

    const info=new Set (categorys.map((p => p.category)));

    const navigate= useNavigate();

  return (
    <aside className='aside__menu'>
        <div className='menu__header'>
        <span className='menu__button' onClick={()=> setOpen(!open)}>=</span>
        <p>Categorias</p>
        </div>
        {
          open &&  (
          <ul className={`menu__categorys`} >
           {[...info].map(category =>(
           <li className="categorys__item" onClick={() => navigate('/product/694edfc145a368fa4d33277b')}>{category}</li>
           ))}
        </ul>)
        }
    </aside>
  )
}

export default Aside