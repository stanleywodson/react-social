interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
	thumb: string,
	hasBorder?: boolean,
	size?: number
}

export const Avatar = ({ thumb, hasBorder = true, size = 12, ...props }: AvatarProps) => {
	return (
		<img
			className={
				hasBorder ? 
				`border-4 border-gray-800 outline w-${size} h-${size} rounded-lg outline-1 outline-green-500` : 
				`w-10 h-10 rounded-lg outline-green-500`
			}
			src={thumb}
			{...props}
		/>
	)
}