import './App.css';
import {useEffect} from "react";
import {useTelegram} from "../hooks/useTelegram";

function App() {

    const {onToggleButton, tg} = useTelegram();


    useEffect(() => {
        tg.ready();
    }, [])


    return (
        <div className="App">
            <button onClick={onToggleButton}>Toggle Telegram</button>
        </div>
    );
}

export default App;
