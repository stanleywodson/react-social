import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {
	return (
		<aside className="rounded-lg overflow-hidden bg-gray-800">
			<img
				className="w-full h-[72px] object-cover"
				src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
			/>
			<div className="flex flex-col items-center text-gray-300 -mt-8">
				<img
					className="w-20 h-20 rounded-lg border boder-gray-800 outline outline-green-500"
					src="https://avatars.githubusercontent.com/u/42077764?v=4"
				/>
				<strong className="mt-2 text-gray-100 leading-normal">Stanley Wodson</strong>
				<span className="text-sm text-gray-400">Developer</span>
			</div>
			<footer className="flex py-4 px-2 mt-4 mb-2 border-t border-gray-600 justify-center">
				<a
					className="flex items-center gap-2 text-green-500 border border-green-500 rounded-lg py-2 px-2 font-bold hover:bg-green-500 hover:text-gray-300 hover:border-gray-300 hover:transition-colors"
					href="#">
					<PencilLine size={18} />
					Editar perfil
				</a>
			</footer>
		</aside>
	)
}