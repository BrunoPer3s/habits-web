import logoSvg from '../assets/logo.svg'
import { Plus } from 'phosphor-react'


export function Header() {
  return (
    <div className='w-full max-w-3xl mx-auto flex justify-between items-center'>
      <img src={logoSvg} alt="Habits Logo" />
      <button
        type='button'
        className='bg-transparent px-6 py-4 flex items-center gap-3 font-semibold border border-violet-500 rounded hover:border-violet-300'
      >
        <Plus size={20} className="text-violet-500" />
        Novo Hábito
      </button>
    </div>
  )
}