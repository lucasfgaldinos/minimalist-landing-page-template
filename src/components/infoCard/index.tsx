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
			<img className="w-12 h-12 mb-4" src={img} alt="Related icon." />
			<p className="text-dark font-medium text-xl">{title}</p>
			<p className="text-dark font-medium text-sm">{description}</p>
		</div>
	);
}
