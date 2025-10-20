interface InfoBlockProps {
	img: string;
	imgName: string;
	title: string;
	description: string;
}

export function InfoBlock({
	img,
	imgName,
	title,
	description,
}: InfoBlockProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-[220px] md:max-w-[300px]">
			<div className="flex items-end w-full justify-center">
				<img
					className="h-[100px] md:h-[200px] w-auto object-contain"
					src={img}
					alt={imgName}
				/>
			</div>
			<p className="text-white font-medium text-center md:mt-4 mb-2">{title}</p>
			<p className="text-white font-light text-xs md:text-sm text-center">
				{description}
			</p>
		</div>
	);
}
