import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
// import { useCart } from "../../context"

export const CartPage = () => {
// const { cartList } = useCart();
const cartListLength = 2;

  return (
    <main>       
      { cartListLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}