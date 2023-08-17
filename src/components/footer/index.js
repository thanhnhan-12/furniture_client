import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss'

const Footer = () => {
  return (
    <div className='containerFooter'>
      <div className="funiro">
        <strong>Funiro.</strong>
      </div>

      <div className="copyright">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  )
}

export default Footer