import React, { useState } from 'react'
//Elements
import { 
  NavbarSearchContainer,
  NavbarSContent,
  LogoBrackets,
  MenuNavegacion,
  SpanNav,
  MenuDown
} from '../../elements/navbar/index';
//Images
import { ReactComponent as BracketUp } from '../../Images/vectorPaint.svg';

const NavbarSearch = () => {

  const useActive = (activo = false) => {
    const [active, setActive] = useState(activo)
    return{
      active,
      setActive
    }
  }

  const home = useActive(true)
  const features = useActive();
  const pages = useActive();
  const portafolio = useActive();
  const blog = useActive();
  const contact = useActive();

  const handleActive = (id) => {
    features.setActive(false)
    pages.setActive(false)
    portafolio.setActive(false)
    blog.setActive(false)
    contact.setActive(false)

    switch(id){
      case 'features':
        return features.setActive(!features.active)
      case 'pages':
        return pages.setActive(!pages.active)
      case 'portafolio':
        return portafolio.setActive(!portafolio.active)
      case 'blog':
        return blog.setActive(!blog.active)
      case 'contact':
        return contact.setActive(!contact.active)
      default:
        break;  
    }
  }

  return (
    <NavbarSearchContainer>
        <NavbarSContent>
            <LogoBrackets>
                N
                <BracketUp />
                rma
            </LogoBrackets>
            <MenuNavegacion>
              <SpanNav
                activo={home.active ? 'active' : 'inactive'}
                home
              >
                <p>home</p>
                <div></div>
              </SpanNav>
              <SpanNav
                activo={features.active ? 'active' : 'inactive'}
                onClick={() => handleActive('features')}
              >
                <p>features</p>
                <div></div>
                {
                  features.active && (<MenuDown>
                    <li>Single Column</li>
                    <li>2 Column</li>
                    <li>3 Column</li>
                    <li>4 Column</li>
                  </MenuDown>)
                }
              </SpanNav>
              <SpanNav
                activo={pages.active ? 'active' : 'inactive'}
                onClick={() => handleActive('pages')}
              >
                <p>pages</p>
                <div></div>
                {
                  pages.active && (<MenuDown>
                    <li>Single Column</li>
                    <li>2 Column</li>
                    <li>3 Column</li>
                    <li>4 Column</li>
                  </MenuDown>)
                }
              </SpanNav>
              <SpanNav
                activo={portafolio.active ? 'active' : 'inactive'}
                onClick={() => handleActive('portafolio')}
              >
                <p>portafolio</p>
                <div></div>
                {
                  portafolio.active && (<MenuDown>
                    <li>Single Column</li>
                    <li>2 Column</li>
                    <li>3 Column</li>
                    <li>4 Column</li>
                  </MenuDown>)
                }   
              </SpanNav>
              <SpanNav
                activo={blog.active ? 'active' : 'inactive'}
                onClick={() => handleActive('blog')}
              >
                <p>blog</p>
                <div></div>
                {
                  blog.active && (<MenuDown>
                    <li>Single Column</li>
                    <li>2 Column</li>
                    <li>3 Column</li>
                    <li>4 Column</li>
                  </MenuDown>)
                }
              </SpanNav>
              <SpanNav
                activo={contact.active ? 'active' : 'inactive'}
                onClick={() => handleActive('contact')}
              >
                <p>contact us</p>
                <div></div>
                {
                  contact.active && (<MenuDown>
                    <li>Single Column</li>
                    <li>2 Column</li>
                    <li>3 Column</li>
                    <li>4 Column</li>
                  </MenuDown>)
                }
              </SpanNav>
            </MenuNavegacion>
        </NavbarSContent>
    </NavbarSearchContainer>
  )
}

export default NavbarSearch