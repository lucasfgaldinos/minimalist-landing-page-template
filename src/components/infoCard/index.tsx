interface InfoCardProps {
	img: string;
	title: string;
	description: string;
	className?: string;
}

export function InfoCard({
	img,
	title,
	description,
	className,
}: InfoCardProps) {
	return (
		<div
			className={`${className} bg-[#f3f7fd] shadow rounded-3xl p-4 md:p-6 flex flex-col gap-2`}
		>
			<img
				className="w-9 h-9 mb-2 md:w-12 md:h-12 md:mb-4"
				src={img}
				alt="Related icon."
			/>
			<p className="text-dark font-medium text-lg md:text-xl">{title}</p>
			<p className="text-dark font-medium text-xs md:text-sm">{description}</p>
		</div>
	);
}
