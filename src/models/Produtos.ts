import type Categorias from "./Categorias"

export default interface Produtos {
  id: number
  nome: string
  descricao: string
  preco: number
  foto: string
  categoria?: Categorias | null
}