import { Link } from "react-router-dom"
import type Categorias from "../../../models/Categorias"

interface CardCategoriasProps {
  categorias: Categorias
}
function CardCategorias({categorias}: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-red-800 text-white font-bold text-2x1">
      <p>{categorias.nome}</p>
      </header>
      <p className="p-8 text-3x1 bg-slate-200 h-full">{categorias.descricao}</p>

      <div className="flex">
        <Link to={`/editarcategoria/${categorias.id}`}
          className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarcategoria/${categorias.id}`}
          className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias