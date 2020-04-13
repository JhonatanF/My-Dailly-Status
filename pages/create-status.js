import React, { useState } from 'react';
import auth0 from '../lib/auth0';

const CreateStatus = () => {
    const [dados, setDados] = useState({
        status: 'bem',
        coords: {
            lat: null,
            long: null
        }
    })
    const getMyLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords);
                setDados(old => {
                    return {
                        ...old,
                        coords: {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
            })
        }
    }
    const onStatusChange = evt => {
        console.log(evt.target)
    }
    return (
        <div>
            <h1>Create Status</h1>
            <label className='block'>
                <input 
                 type='radio'
                 name='status'
                 value='Bem'
                 onClick={onStatusChange}
            />
            Estou bem 
            </label>
            <label className='block'>
                <input 
                 type='radio' 
                 name='status' 
                 value='Gripe'
                 onClick={onStatusChange}     
            />
                 Estou com gripe
            </label>
            <label className='block'>
                <input 
                 type='radio' 
                 name='status' 
                 value='Covid'
                 onClick={onStatusChange}
            />
                 Estou com Covid-19
            </label>
            Sua posição atual: {JSON.stringify(dados)}
            <button onClick={getMyLocation}>Get my location</button>
        </div>
    );
};

export default CreateStatus;

export async function getServerSideProps({ req, res }) {
    const session = await auth0.getSession(req);
    if (session) {
        return {
            props: {
                isAuth: true,
                user: session.user,
            }
        }
    }
        return {
            props: {
                isAuth: false,
                user: {}
            }
        }    
    }