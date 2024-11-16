import React from 'react'

import { createRoot } from 'react-dom/client'

import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'styles/tailwind.css'

const element = document.getElementById('root')
if (element === null) throw new Error('Root container missing in index.html')

const root = createRoot(element)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
void reportWebVitals()
