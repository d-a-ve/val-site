import Image from "next/image";
import ReactMarquee from 'react-fast-marquee';

interface MarqueeProps {
	direction: "left" | "right";
  images: string[]
}

export default function Marquee({ direction, images }: MarqueeProps) {
	return (
		<ReactMarquee autoFill direction={direction}>
			{images.map((img, index) => (
				<div
					key={index}
					className="flex-shrink-0 size-64 mx-4 rounded-lg overflow-hidden">
					<Image
						src={img}
						alt={`Valentine image ${img}`}
						width={256}
						height={160}
						className="object-cover object-center"
					/>
				</div>
			))}
		</ReactMarquee>
	);
}
