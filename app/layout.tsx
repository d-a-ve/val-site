import { Caveat } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const caveat = Caveat({ subsets: ["latin"] });

export const metadata = {
	title: "Valentine's Day For Koibito",
	description: "A special Valentine's Day message for Bethel Onohitare",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={caveat.className}>{children}</body>
		</html>
	);
}
