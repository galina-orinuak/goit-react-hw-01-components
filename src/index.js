import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, AppStat, AppFriends, AppTrans } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppStat/>
    <AppFriends/>
    <AppTrans/>
  </React.StrictMode>
);
