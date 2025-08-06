import { useState, useEffect } from "react"
import type Categorias from "../../../models/Categorias"
import { buscar } from "../../../services/Service"
import { DNA } from "react-loader-spinner"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categorias[]>([])

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
    } catch (error: any) 
  {}}

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height='200'
          width='200'
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <CardCategorias key={categorias.id} categorias={categorias} />
            ))}

          </div>

        </div>


      </div>
    </>
  )
}

export default ListaCategorias