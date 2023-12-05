import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate() 
  return (
    <div onClick={() => navigate("/")} className='text-5xl cursor-pointer'>BattalShoping</div>
  )
}

export default NavbarLeft