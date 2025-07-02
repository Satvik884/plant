import { useState , useEffect} from "react";
import './shopping.css';
import { useNavigate } from 'react-router-dom';

export default function Shopping() {
    const navigate = useNavigate();
    const [num,setnum] = useState(0);
    const [cart,setcart] = useState([]);
    const counter = (e) => {
        setnum(num + 1);

        const exists = cart.some(item => item.name === e.name);
      
        if (!exists) {
          setcart([...cart, e]);
        }
      };
      
    useEffect(() => {
        console.log("Cart updated:", cart);
      }, [cart]); 

    
    const plants = [
        {
          name: "Snake Plant",
          description: "Produces oxygen at night, improving air quality.",
          price: 15,
          image: "sp.png",
        },
        {
          name: "Spider Plant",
          description: "Filters formaldehyde and xylene from the air.",
          price: 12,
          image: "spp.jpg",
        },
        {
          name: "Peace Lily",
          description: "Removes mold spores and purifies the air.",
          price: 18,
          image: "lp.jpg",
        }
      ];
      
    return (
        <>
            <header className="header">
                <div className="info">
                    <p>Paradise Nursery</p>
                    <p>where green meets serenity</p>
                </div>
                <div className="heading">
                    Plants
                </div>
                <div className="right">
                    <img src="cart.jpg" alt="Cart" className="cart-icon" onClick={() => navigate('/plant/payment', { state: { cart } })} />
                    <span className="cart-count">{num}</span>
                </div>
            </header>
            <div className="body">
                <div className="head2">
                    <hr></hr>
                    Air purifying plants
                    <hr></hr>
                </div>
                <div className="display">
                    {plants.map((item, index) => (
                        <div key={index} className="plant-card">
                        <img src={item.image} alt={item.name} className="image" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Cost:${item.price}</p>
                        <button onClick={() => counter(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}