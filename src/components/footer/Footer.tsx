import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  const data = new Date().getFullYear()

  return (
   <>
      <div className="flex justify-center bg-red-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Criado por: Ludmily Oliveira | Copyright: {data}
          </p>
          <p className="text-lg">Acesse as redes de contato</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/ludmily-oliveira/" target="_blank">
              <LinkedinLogoIcon size={48} weight="regular" />
            </a>
            
            <a href="https://github.com/LudmilyS" target="_blank">
              <GithubLogoIcon size={48} weight="regular" />
            </a>

          </div>

        </div>

      </div>
    </>
  )
}

export default Footer