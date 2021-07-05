import './styles/App.scss';
import Banner from './components/Banner';
import Action from './components/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className='App'>
            <Banner />
            <Action />
            <ToastContainer />
        </div>
    );
}

export default App;
