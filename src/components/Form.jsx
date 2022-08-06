import React from 'react';
import '../css/form.css';
import arrow from '../images/icon-arrow.svg';

function Form() {
    return(
        <form className='form' action='#' method='POST'>
            <input type='email' placeholder='Email address' className='form__mail'/>
            <button className='form__button'>
                <img src={arrow} alt="" />
            </button>
        </form>
    );
}

export default Form;