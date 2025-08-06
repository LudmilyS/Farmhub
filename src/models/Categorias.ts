import type Produtos from "./Produtos"

export default interface Categorias {
  id: number
  nome: string
  descricao: string
  produto?: Produtos | null
}