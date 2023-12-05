import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartComp from '../components/cart/CartComp'
import { getCartTotal } from '../redux/cartSlice'

const Cart = () => {
  const {carts, totalAmount, itemCount} = useSelector(state => state.carts)
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  console.log("ads", carts,totalAmount,itemCount)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
      {
        carts?.lenght > 0 ? 
        <div>
          {
            carts.map((cart,i) => (
              <CartComp key={i} cart={cart} />
            ))
          }
          <CartComp/>
        </div> : 
        <div>
          Kartınız Boş...
        </div>
      }
    </div>
  )
}

export default Cart