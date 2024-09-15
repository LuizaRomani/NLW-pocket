import { Plus } from 'lucide-react'

import logo from './assets/logo-in-orbit.svg'
import letStart from './assets/let_start.svg'
import { Dialog, DialogTrigger } from './components/ui/dialog'
import { Button } from './components/ui/button'

export function App() {
  return (
    <Dialog>
      <div className="h-screen flex felx-col items-center justify-center gap-8">
        <img src={logo} alt="in.orbit" />
        <img src={letStart} alt="in.orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou uma meta! Que tal começar agora mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </Dialog>
  )
}
