import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from './redux/store';
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
// let persistor = persistStore(store);
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
)
