import Image from "next/image";

interface MarqueeProps {
	direction: "left" | "right";
  images: string[]
}

export default function Marquee({ direction, images }: MarqueeProps) {
	return (
		<div className="overflow-hidden">
			<div
				className={`flex ${
					direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
				}`}>
				{images.map((img, index) => (
					<div key={index} className="flex-shrink-0 size-64 mx-4 rounded-lg overflow-hidden">
						<Image
							src={img}
							alt={`Valentine image ${img}`}
							width={256}
							height={160}
							className="object-cover object-center"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
