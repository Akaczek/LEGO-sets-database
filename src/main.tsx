import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { theme } from './themes/theme.ts'
import { LegoItemsProvider } from './utils/context/useLegoItems.tsx'
import { ModalProvider } from './utils/context/useModal.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LegoItemsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LegoItemsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
