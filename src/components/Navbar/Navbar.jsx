import React, { useState } from 'react'
//Elements
import { 
    LeftSideNav,
    NavBarBody,
    NavBarE,
    RightSideNav,
    LoginDiv,
    Span,
    FormLog,
    ContainerForm
} from '../../elements/navbar/index'
import { Button, Input } from '../../elements/formulario'; 
//Components
import NavbarSearch from './NavbarSearch';
//Images
import { ReactComponent as Phone } from '../../Images/phone.svg';
import { ReactComponent as UserIcon } from '../../Images/usuario.svg';
import { ReactComponent as SearchIcon } from '../../Images/search.svg';
import { ReactComponent as VimeoIcon } from '../../Images/vimeo.svg';
import { ReactComponent as LinkedinIcon } from '../../Images/linkedin.svg';
import { ReactComponent as GooglePlusIcon } from '../../Images/google-plus.svg';
import { ReactComponent as TwitterIcon } from '../../Images/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../Images/facebook.svg';
import { ReactComponent as  DribbleIcon } from '../../Images/dribble.svg';


const Navbar = () => {

    const useActivar = (active = false) => {
        const [activar, setActivar] = useState(active);
        return{
            activar,
            setActivar
        }
    }

    const [log, setLog] = useState('');

    const face = useActivar();
    const twit = useActivar();
    const google = useActivar();
    const linkedin = useActivar();
    const dribble = useActivar();
    const vimeo = useActivar();
    const search = useActivar(true);

    const reg = useActivar();

    const handleLog = (log) => {
        setLog(log);
        reg.setActivar(true);
    }

    const closeForm = () => {
        reg.setActivar(false);
    }

    const handleToggleActive = (id) => {
        face.setActivar(false);
        twit.setActivar(false);
        google.setActivar(false);
        linkedin.setActivar(false);
        dribble.setActivar(false);
        vimeo.setActivar(false);
        search.setActivar(false);

        switch(id){
            case 'face':
                return face.setActivar(true);
            case 'twit':
                return twit.setActivar(true);
            case 'google':
                return google.setActivar(true);
            case 'linkedin':
                return linkedin.setActivar(true);
            case 'dribble':
                return dribble.setActivar(true)    
            case 'vimeo':
                return vimeo.setActivar(true);
            case 'search':
                return search.setActivar(true);    
            default:
                break;
        }
    }
    
  return (
    <>
        <NavBarE>
            <NavBarBody>
                <LeftSideNav>
                    <Phone />
                    <p> Call Us: +1 800 123 4567 </p>
                    <hr />
                    <LoginDiv>
                        <UserIcon />
                        <p
                            onClick={() => handleLog('login')}
                        >Login</p>  
                        or
                        <p
                            onClick={() => handleLog('register')}
                        >Register</p>  
                    </LoginDiv>
                    {
                        reg.activar && (<FormLog log={log}>
                            <div></div>
                            <p
                                onClick={() => closeForm()}
                            >&times;</p>
                            <ContainerForm>
                                <Input 
                                    placeholder={log === 'register' ? 'Your Name*' : 'Email'}
                                />
                                <Input 
                                    placeholder={log === 'register' ? 'Your Email*' : 'Password'}
                                />
                                {
                                    log === 'register' && (<>
                                    <Input 
                                        placeholder='Your Password*'
                                    />
                                    <Input 
                                        placeholder='Confirm Password*'
                                    />
                                    </>)
                                }
                                
                                <Button>
                                    { log === 'register' ? 'Register' : 'Login' }
                                </Button>
                            </ContainerForm>
                        </FormLog>)
                    }
                    
                </LeftSideNav>
                <RightSideNav>
                    <Span activo={face.activar ? 'active' : 'inactive'} >
                        <FacebookIcon  
                            onClick={() => handleToggleActive('face')}
                        />
                    </Span>
                    <Span activo={twit.activar ? 'active' : 'inactive'} >
                        <TwitterIcon  
                            onClick={() => handleToggleActive('twit')}
                        />
                    </Span>
                    <Span activo={google.activar ? 'active' : 'inactive'} >
                        <GooglePlusIcon 
                            onClick={() => handleToggleActive('google')}
                        />
                    </Span>
                    <Span activo={linkedin.activar ? 'active' : 'inactive'}>
                        <LinkedinIcon 
                            onClick={() => handleToggleActive('linkedin')}
                        />
                    </Span>
                    <Span activo={dribble.activar ? 'active' : 'inactive'}>
                        <DribbleIcon
                            onClick={() => handleToggleActive('dribble')}
                        />
                    </Span>
                    <Span activo={vimeo.activar ? 'active' : 'inactive'}>
                        <VimeoIcon 
                            onClick={() => handleToggleActive('vimeo')}
                        />
                    </Span>
                    <Span activo={search.activar ? 'active' : 'inactive'}>
                        <SearchIcon  
                            onClick={() => handleToggleActive('search')}
                        />
                    </Span>
                </RightSideNav>
            </NavBarBody>
        </NavBarE>
        <NavbarSearch />
    </>
  )
}

export default Navbar