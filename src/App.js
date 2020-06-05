import React, {useEffect, useReducer} from 'react';
import ArrayCards from "./Cards/ArrayCards";
import {getData} from "./store/action/dataAction";
import {getSate, initState} from "./store/reducer/dataReducer";
import Spinner from "./Spinner/Spinner";
import css from './App.module.css'

function App() {
    const [state, dispatch] = useReducer(getSate, initState);
    useEffect(() => {
        getData(dispatch)
    }, []);

    if (!state.loadForm) {
        return <Spinner/>
    } else {
        return (
            <div className={css.App}>
                <ArrayCards state={state.data}/>
            </div>
        )
    }
}

export default App;
