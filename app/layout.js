import { Toaster } from '@/components/ui/sonner'
import {NavBar} from '@/components/navbar/NavBar'
import '@/css/globals.css'

export const metadata = {
	title: 'To Do List App',
	description: 'Best to do list of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<link rel="icon" href="/svg/favicon.svg" type="image/svg+xml" />
			<body className="bg-gray-200">
				<NavBar />
				{children}
				<Toaster position="top-center" 
				visibleToast ={1}
				toastOptions={{
					unstyled: true,
					toast: 'bg-blue-400',
					title: 'text-red-400',
					description: 'text-red-400',
					actionButton: 'bg-zinc-400',
					cancelButton: 'bg-orange-400',
					closeButton: 'bg-lime-400'
				}}/>
			</body>
		</html>
	)
}
