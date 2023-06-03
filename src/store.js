import {configureStore} from '@reduxjs/toolkit';
import eventreducer from './redux/eventslice';
import userreducer from './redux/userslice';

export default configureStore({
    reducer:{
        eventreducer,
        userreducer
    }
})