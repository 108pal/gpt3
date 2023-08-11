import React from 'react';
import './brand.css';
import { google , slack, shopify, dropbox }  from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section_padding'>
      <div><img src={ google } alt='google'/></div>
      <div><img src={ slack } alt='slack'/></div>
      <div><img src={ dropbox } alt='dropbox'/></div>
      <div><img src={ shopify } alt='shopify'/></div>

    </div>
  )
}

export default Brand
