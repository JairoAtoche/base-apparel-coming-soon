import React from 'react';
import '../css/form.css';

function Form() {
    return(
        <form className='form' action='#' method='POST'>
            <input type='email' placeholder='Email address' className='form__mail'/>
            <button className='form__button'>{'>'}</button>
        </form>
    );
}

export default Form;