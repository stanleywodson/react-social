import { useState, FormEvent, ChangeEvent } from "react"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { PostProps } from "../types/postsTypes"


export const Post = ({ author, content, publishedAt }: PostProps) => {

	const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(publishedAt)
	const [comments, setComments] = useState<string[]>([])
	const [newCommentText, setNewCommentText] = useState('')

	const handleCreateNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setNewCommentText(event.target.value)
	}

	const handleCreateNewComment = (event: FormEvent) => {
		event.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	const deleteComment = (comment: string) => {
		const commentsWithoutDeletedOne = comments.filter(item => item !== comment)
		setComments(commentsWithoutDeletedOne)
	}

	return (
		<>
			<article className="p-3 border rounded-md flex flex-col bg-gray-800">
				<header className="flex justify-between">
					<div className="flex gap-1">
						<Avatar thumb={author.avatarUrl} size={14} />
						<div className="flex flex-col ml-2">
							<strong className=" text-gray-300 leading-normal -mt-1">{author.name}</strong>
							<span className="text-sm text-gray-500">{author.role}</span>
						</div>
					</div>
					<time
						title={publishedDateFormatted}
						dateTime="2023-08-25 18:13:30"
						className="flex items-center text-xs font-thin text-gray-400">
						{publishedDateFormatted}
					</time>
				</header>
				<div className="mt-4 text-gray-400">
					{content.map(item => (
						item.type === 'paragraph' ?
							<p key={item.content}>{item.content}</p> :
							<p key={item.content} className="mt-1">
								<a href="" className="text-blue-500 hover:underline hover:text-blue-400 transition-colors">{item.content}</a>
							</p>
					))
					}
				</div>
				<form onSubmit={handleCreateNewComment} className="flex flex-col mt-4 w-full pt-6 border-t border-gray-600 mb-2">
					<textarea
						onChange={handleCreateNewCommentChange}
						value={newCommentText}
						className="bg-gray-500 rounded-md h-20 text-gray-300 outline-none w-full p-1 resize-none" placeholder="Deixe seu comentário..."
						required
					/>
					<div className="flex justify-end mt-2">
						<button
							disabled={newCommentText.length === 0}
							className="border text-green-500 border-green-500 rounded-full font-bold mt-2 py-1 px-4 hover:bg-green-600 hover:text-gray-300 transition-colors mb-2 disabled:opacity-50 disabled:cursor-not-allowed">
							Publicar
						</button>
					</div>
				</form>
				{comments.map(comment => (
					<Comment
						key={comment}
						comment={comment}
						onDeleteComment={deleteComment}
					/>
				))}
			</article>


		</>
	)
}