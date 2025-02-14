"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useState } from "react";

export default function Hero() {
	const [isOpen, setIsOpen] = useState(false);
	const { ref } = useClickOutside<HTMLDivElement>(true, () => setIsOpen(false));
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="relative z-10 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
					Happy Valentine's Day, Koibito!
				</h1>
				<p className="text-xl md:text-2xl text-white mb-8">
					Open the envelope to reveal a special message
				</p>
				<div className="wrapper" data-open={isOpen}>
					<div className="lid one"></div>
					<div className="lid two"></div>
					<div className="envelope" onClick={() => setIsOpen(true)}></div>
					<div className="letter">
						<p></p>
					</div>
					<div className="dummy-letter space-y-3 text-left" ref={ref}>
						<p>
							Koibito, My sugar plum, it is Feb 14 and you are the 1 4 me. It is
							the season of love and everyday I feel the love you have for me
							and the love I have for you increases.
						</p>
						<p>
							{" "}
							Yes, we have our differences and we bicker atimes but even in
							those times I just want to hold you, kiss you and be with you.
							Being with you isn't like how it is with other people, when I am
							with you I feel over the moon and confident in myself. You bring
							out the best part of me and most importantly you bring out the
							lover boy in me. Hard guy hard guy but for you I will cry if it
							means being with you.{" "}
						</p>
						<p>
							I am grateful to be loved by you, I am happy that I can love you
							and I will continue to love you the way you want to be loved
							because you deserve it and much more. I love you my Bethel, you
							are mine and I am grateful to be spending this season of love with
							you, even though it is not physically.
						</p>
						<p>
							{" "}
							Finally, I am sorry for not asking you to be my Valentine. I see
							it as a given that you will be my Valentine because you are the 1
							4 me and we are together, so I don't see the need to ask again.
							Nevertheless, I appreciate the thought you put into asking me to
							be your Valentine and I definitely learned from that, and I will
							do better next time by God's grace.
						</p>
						<p> Love you always, Your Prince Charming</p>
						<button
							className="text-white bg-green-600 block py-1 px-2 rounded-lg w-full"
							onClick={() => {
								console.log("clicked");
								setIsOpen(false);
							}}>
							Done reading
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
