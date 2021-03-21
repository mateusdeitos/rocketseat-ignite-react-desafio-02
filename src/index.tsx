import React from 'react'
import { render } from 'react-dom'

import { App } from './App'
import { GenreProvider } from './contexts/GenreContext'
import { MovieProvider } from './contexts/MovieContext'

render(
    <GenreProvider>
        <MovieProvider>
            <App />
        </MovieProvider>
    </GenreProvider>,
    document.getElementById('root'))