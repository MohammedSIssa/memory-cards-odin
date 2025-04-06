import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CardsGame from './Game'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardsGame />
  </StrictMode>,
)
