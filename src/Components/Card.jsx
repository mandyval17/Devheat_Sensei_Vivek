import React from 'react';
import "../css/card.css";

export default function Card() {
    return (
        <div className='row pb-5 ms-4'>
            <div className='col-md-6'>
                <div className='row heading'><h2 id='heading'>Find a better card deal in few easy steps</h2></div>
                <div className='row ms-2'><p id ='subtext' className='mont'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p></div>
                <div className='row ms-2'><button type="button" class="btn custom-btn">Primary</button></div>
            </div>
            <div className='col-md-6'>
                <img></img>
            </div>
        </div>
    )
}