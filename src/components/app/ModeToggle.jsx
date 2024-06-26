import { Moon, Sun } from 'lucide-react'

import useTheme from '@/components/app/ThemeProvider'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle({ admin }) {
	const { setTheme } = useTheme()

	return (
		<Button
			variant='outline'
			size='icon'
			className={`${
				admin ? 'bg-primary-foreground' : 'bg-primary'
			} border-none`}
			onClick={() => {
				setTheme(
					window.localStorage.getItem('vite-ui-theme') === 'light'
						? 'dark'
						: 'light',
				)
			}}
		>
			<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 border-none' />
			<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 border-none' />
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}
