import React from 'react';
import { useState } from 'react';
import '../css/form.css';
import arrow from '../images/icon-arrow.svg';
import error from '../images/icon-error.svg';

function Form() {
    let myRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/g;
    const [classError, setClassError] =useState(false);
    const [form, setForm] = useState({'mail':''});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
        setClassError(false)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!myRegex.test(form.mail.toLowerCase())) {
            console.log(form.mail.toLowerCase(),"ERROR")
            setClassError(true);
        } else {
            console.log(form.mail.toLowerCase(),"BIEN")
            setClassError(false);
        }
    };

    return(
        <form className='form' action='#' method='POST' onSubmit={handleSubmit}>
            <input role='text' type='text' name='mail' placeholder='Email address' className={`form__mail ${classError ? 'form__mail--error' : '' }`} value={form.mail} onChange={handleChange} />
            <img src={error} alt='' className={`${classError ? 'form__icon-error' : 'disabled' }`}/>
            <button role='button' className='form__button'>ㅤ
                <img src={arrow} alt="" />ㅤ
            </button>
            <p className={`${classError ? 'form__p-error' : 'disabled' }`}>Please provide a valid email</p>
        </form>
    );
}
export default Form;