import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import { IMAGES } from "@/constants";

export default function Home() {
	return (
		<div className="bg-red-600/70">
			<main className="min-h-screen space-y-6 max-w-screen-lg mx-auto">
				<Hero />
				<div className="text-center text-2xl leading-tight text-white max-w-[50ch] mx-auto px-3 space-y-2">
					<h2>
						Here are pictures of moments that I, you or we captured together
						since we have known each other.
					</h2>
					<p>
						I hope you laugh, and feel joy, happiness and love.
					</p>
					<p className="text-3xl">I ❤️ you</p>
				</div>
				<Marquee direction="right" images={IMAGES.slice(0, 8)} />
				<Marquee direction="left" images={IMAGES.slice(9, 16)} />
				<Marquee direction="right" images={IMAGES.slice(16, 25)} />
				<Marquee direction="left" images={IMAGES.slice(25)} />
				<Footer />
			</main>
		</div>
	);
}
