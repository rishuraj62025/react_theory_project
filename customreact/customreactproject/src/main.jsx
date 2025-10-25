import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const anotherUser = "react";

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target: '_blank'
  },
  'visit google', 
   anotherUser
 )

createRoot(document.getElementById('root')).render(
   reactElement
)
