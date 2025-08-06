import ListaCategorias from "../categorias/listacategorias/ListaCategorias"

function Home() {
  return (
    <>
      <div className="bg-red-300 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Skincare Day
            </h2>
            <p className='text-xl'>
              Todos os produtos de cuidados com a pele com 15% de desconto
            </p>

            <div className="flex justify-around gap-4">
              <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
              >
                Skincare
              </div>
            </div>
          </div>

          <div className="flex justify-end ">
            <img
              src="https://ik.imagekit.io/ludmily/skincare%20png.png?updatedAt=1754415280098"
              alt="Imagem Página Home"
              className='w-2/3'
            />
            
          </div>
        </div>
      </div>

      <ListaCategorias />
    </>
  )
}

export default Home