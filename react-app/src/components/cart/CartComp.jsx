
const CartComp = ({cart}) => {
  return (
    <div className=''>
        <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
        <div></div>
    </div>
  )
}

export default CartComp