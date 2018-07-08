import React from 'react';
import {render} from 'react-dom';
import AppContainer from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Root from './root'

// Wrap existing app in Provider - Step 2
render(
  <Root store={store} />,
  document.getElementById('root')
)