import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>EzOrder | Home</title>
				<meta name="keywords" content="EzOrder"></meta>
			</Head>
			<div className="index__banner font-Kulim_Park_Normal">
				<div className=" banner grid grid-cols-12 container m-auto gap-5">
					<div className="banner__introduce col-span-5 flex items-end relative">
						<Image src="/assets/img/bus.png" width={530} height="400"></Image>
						<span className=" rounded-sm absolute top-6 right-0 bg-white-rgba px-6 py-10  banner__introduce-text font-Kulim_Park_Bold text-center ">
							<div className="text-center mb-6 mx-auto">
								<h1 className=" text-5xl mb-2">Super voucher</h1>
								<h1 className=" text-5xl text-right  ">in now</h1>
							</div>

							<h2 className="text-xl mx-3 mb-10 line-clamp-4 text-left">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Praesentium quaerat commodi molestias esse recusandae reiciendis
								neque fugit, consectetur nihil quas ea odio officia quo dolore,
								illo sint hic minus quisquam.
							</h2>

							<Link href="#">
								<a className="text-3xl text-white btn mx-auto px-4 py-2 rounded-lg">
									Explore Now
								</a>
							</Link>
						</span>
					</div>
					<div className=" col-span-7 pl-16">
						<Slider images={sliderImage} />
					</div>
				</div>
			</div>
			<div>
				<Link href="/about">HOMEPAGE</Link>
			</div>
		</>
	);
}
