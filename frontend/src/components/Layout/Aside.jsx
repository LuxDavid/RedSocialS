import {useState} from 'react';

const Aside = () => {

    const [open,setOpen]= useState(false);

    const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <aside className='aside__menu'>
        <div className='menu__header'>
        <span className='menu__button' onClick={()=> setOpen(!open)}>=</span>
        <p>Categorias</p>
        </div>
        {
          open &&  (
          <ul className={`menu__categorys`} >
            <li className="categorys__item">Hola</li>
            <li className="categorys__item">Hola</li>
            <li className="categorys__item">Hola</li>
            <li className="categorys__item">Hola</li>
        </ul>)
        }
    </aside>
  )
}

export default Aside