import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./reduxtool/features/Cart/CartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpend } = useSelector((state)=>state.modal)
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  console.log(isOpend)
  return (
<main>
{
    isOpend && <Modal/>
  }  
  <Navbar/>
  <CartContainer/>
</main>
  );
}
export default App;
