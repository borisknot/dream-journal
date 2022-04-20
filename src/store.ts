import { configureStore } from '@reduxjs/toolkit';
import dreamReducer from './reducers/dreamSlice';

export default configureStore({
  reducer: {
    dreamReducer: dreamReducer,
  },
});
