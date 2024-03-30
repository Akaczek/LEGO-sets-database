import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { theme } from './themes/theme.ts'
import { LegoItemsProvider } from './utils/context/useLegoItems.tsx'
import { AddModalProvider } from './utils/context/useAddModal.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LegoItemsProvider>
        <AddModalProvider>
          <App />
        </AddModalProvider>
      </LegoItemsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
