import { useEffect , useState} from 'react';
import './Payment.css';
import {useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Payment(){
    const navigate = useNavigate();
    const location = useLocation();
    const cart = location.state?.cart || [];
    const [num,setnum] = useState(cart.length);
    const [cart2,setcart2] = useState([]);
    
    const increase = (index) => {
        const updated = [...cart2];
        updated[index].quantity += 1;
        updated[index].total = updated[index].quantity * updated[index].price;
        setcart2(updated);
        setnum(num+1)
      };

      const decrease = (index) => {
        const updated = [...cart2];
        if (updated[index].quantity > 0) {
          updated[index].quantity -= 1;
          updated[index].total = updated[index].quantity * updated[index].price;
          setcart2(updated);
        }
        if (num>0){
        setnum(num-1)
        }
      };

      const delete1 = (index) => {
        const updated = [...cart2];
        updated.splice(index, 1);   
        setcart2(updated);          
      };
      
      
      
    useEffect(() => {
        const updatedCart = cart.map((item) => ({
            ...item,
            quantity: 1,
            total: item.price * 1,
          }));
          setcart2(updatedCart);
      }, [cart]); 

    return(
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
            <div className='body'>
                {cart2.map((item,index) => (
                    <div className='box' key={index}>
                        <img src={item.image}></img>
                        <div className='box-small'>
                            <h3>{item.name}</h3>
                            <p>Cost:${item.price}</p>
                            <div className='counter'>
                                <button onClick={() => (decrease(index))}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => (increase(index))}>+</button>
                            </div>
                            <p>Total:{item.total}</p>
                            <button onClick={()=>(delete1(index))}>Delete</button>
                        </div>
                    </div>
                ))}
            <button style={{ display: 'block', margin: '20px auto' }} onClick={() => navigate('/plant/shopping')}>
            Continue Shopping
            </button>
            <button style={{ display: 'block', margin: '20px auto' }}>
            Checkout
            </button>


            </div>
            
        </>
    )

}

