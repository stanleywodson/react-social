import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
type CommentProps = {
	comment: string
	onDeleteComment: (comment: string) => void
}
export const Comment = ({ comment, onDeleteComment }: CommentProps) => {
	const [likesCount, setLikeCount] = useState(0)

	const handleLikeComment = () => setLikeCount(state => state + 1)

	const handleDeleteComment = () => onDeleteComment(comment)
	

	return (
		<div className="flex gap-3">
			<Avatar hasBorder={false} thumb='https://avatars.githubusercontent.com/u/42077764?v=4' />
			<div className="flex-1 flex flex-col">
				<div className=" bg-gray-700 p-2 rounded-lg w-auto">
					<header className="flex items-start justify-between text-gray-400 p-1">
						<div>
							<strong className="text-gray-300 leading-normal">Stanley Wodson</strong>
							<time
								title="25 de agosto de 2023 ás 18:13"
								dateTime="2023-08-25 18:13:30"
								className="flex items-center text-xs font-thin ">
								Cerca de 1h atrás
							</time>
						</div>
						<button onClick={handleDeleteComment} className="leading-0 rounded-md hover:text-red-500" title="Deletar Comentário">{<Trash size={20} />}</button>
					</header>
					<p className="mt-4 mb-2 text-gray-300">{comment}</p>
				</div>
				<footer className="mt-2 flex mb-4 rounded-lg border-b border-gray-700 pb-1 text-gray-300 ">
					<button onClick={handleLikeComment} className="flex items-center gap-1 text-sm rounded-sm hover:text-green-500">
						<ThumbsUp size={18} />Curtir<span className="before:content-['\2022'] before:p-[0.25rem]">{likesCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)

}