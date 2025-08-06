import { useEffect, useState, type ChangeEvent } from "react";
import type Categorias from "../../../models/Categorias";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

function FormCategorias() {

  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categorias>({} as Categorias)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategorias)
    } catch (error: any) {
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categorias, setCategorias)
        alert('Categoria atualizado com sucesso!')
      } catch (error: any) {
        alert('Erro ao atualizar o cadastro.')
       }
    } else {
      try {
        await cadastrar(`/categorias`, categorias, setCategorias)
        alert('categoria cadastrada com sucesso!')
      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria.')
        
      }
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4x1 text-center my-8 font-bold text-3xl">
        {id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Nome categoria</label>
           <input
            type="text"
            placeholder="Escreva aqui o nome da sua categoria"
            name="nome"
            className='border-2 border-slate-700 rounded p-2'
            value={categorias.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição categoria</label>
           <input
            type="text"
            placeholder="Descreva sua categoria"
            name="descricao"
            className='border-2 border-slate-700 rounded p-2'
            value={categorias.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-red-400 
                         hover:bg-red-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

          }
        </button>

      </form>

    </div>
  )
}

export default FormCategorias

function handleLogout() {
  throw new Error("Function not implemented.");
}
