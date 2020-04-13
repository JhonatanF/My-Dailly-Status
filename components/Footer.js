import React from 'react';

const Footer = () => {
    return (
        <div className='py-4 text-center bg-gray-400'>
            MyDailyStatus é um projeto criado durante o FullStack Lab do DevPleno.<br/>
            Implementado por: {' '}
            <a className='hover:underline hover:text-red-800' href='https://linkedin.com/in/jhonatan-feitosa-659905113/'>Jhonatan Feitosa</a>
        </div>
    );
}

export default Footer;