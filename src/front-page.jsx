import './front-page.css';
import { useNavigate } from 'react-router-dom';

export default function Frontpage() {
    const navigate = useNavigate();
    return (
        <main className="bg-image">
        <div className="par">
            <div className="intro">
                <h2>Welcome to Paradise Nursery</h2>
                <hr className="hor"></hr>
                <p>Where Green Meets Serentiy</p>
                <button onClick={() => navigate('/plant/shopping')}>Get Started</button>
            </div>
            <div className="about">
                <p className="head">Welcome to Paradise Nursery, where green meets serenity!</p>
                <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.</p>
                <p>Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.</p>
                <p>Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
                </p>

            </div>
        </div>
        </main>
    );
}
