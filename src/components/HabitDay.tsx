import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';


interface HabitProps {
  completed: number
  amount: number
}

export function HabitDay({ completed, amount }: HabitProps) {
  const completedPerncentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
          'bg-zinc-900 border-zinc-800': completedPerncentage === 0,
          'bg-violet-900 border-violet-700': completedPerncentage > 0 && completedPerncentage < 20,
          'bg-violet-800 border-violet-600': completedPerncentage >= 20 && completedPerncentage < 40,
          'bg-violet-700 border-violet-500': completedPerncentage >= 40 && completedPerncentage < 60,
          'bg-violet-600 border-violet-500': completedPerncentage >= 60 && completedPerncentage < 80,
          'bg-violet-500 border-violet-400': completedPerncentage >= 80,
        })} />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>Terça-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>
          <ProgressBar progress={75} />
          <Popover.Arrow className='fill-zinc-900' height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
