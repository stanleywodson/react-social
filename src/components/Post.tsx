import { Comment } from "./Comment"

export const Post = () => {
	return (
		<>
			<article className="p-3 border rounded-md flex flex-col bg-gray-800">
				<header className="flex justify-between">
					<div className="flex gap-1">
						<img
							className="w-12 h-12 rounded-lg border boder-gray-800 outline outline-green-500"
							src="https://avatars.githubusercontent.com/u/42077764?v=4"
						/>
						<div className="flex flex-col ml-2">
							<strong className=" text-gray-300 leading-normal -mt-1">Stanley Wodson</strong>
							<span className="text-sm text-gray-500">Developer</span>
						</div>
					</div>
					<time
						title="25 de agosto de 2023 ás 18:13"
						dateTime="2023-08-25 18:13:30"
						className="flex items-center text-xs font-thin text-gray-400">
						Publicado há 1h
					</time>
				</header>
				<div className="mt-4 text-gray-400">
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, eligendi!</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde at animi ut aliquam maiores beatae molestias aut vero iste veniam.</p>
					<p className=""><a href="" className="text-blue-500 hover:underline hover:text-blue-400 transition-colors">Lorem ipsum dolor sit amet.</a></p>
				</div>
				<form className="flex flex-col mt-4 w-full pt-6 border-t border-gray-600 mb-2">
					<textarea className="bg-gray-500 rounded-md h-20 text-gray-300 outline-none w-full p-1 resize-none" placeholder="Deixe seu comentário..." />
					<div className="flex justify-end mt-2">
						<button
							className="border text-green-500 border-green-500 rounded-full font-bold mt-2 py-1 px-4 hover:bg-green-600 hover:text-gray-300 transition-colors mb-2">
							Publicar
						</button>
					</div>
				</form>
				<Comment />
				<Comment />
				<Comment />
			</article>


		</>
	)
}