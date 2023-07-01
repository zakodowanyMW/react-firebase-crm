import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';

export function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">countainer</div>
        </div>
    )
}

export default Home