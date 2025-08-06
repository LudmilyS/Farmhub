import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4
            			   bg-red-900 text-white'>

        <div className="container flex justify-between text-lg">
          <p className="font-bold">FarmaHub</p>

          <div className='flex gap-6'>
            <Link to='/produtos' className='hover:text-red-300 hover:underline'>Produtos</Link>
            <Link to='/categorias' className='hover:text-red-300 hover:underline'>Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:text-red-300 hover:underline'>Cadastrar categoria</Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar