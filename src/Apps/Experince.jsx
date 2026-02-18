import React, { useState } from "react";

const Experince = () => {
	const heroImage = "/img/hero1.jpg";
	const [activeYear, setActiveYear] = useState("2024");
	const experiencesByYear = {
		"2024": {
			title: "Our 2024 Experiences",
			image: "/img/pg1.png",
			imageAlt: "Experience 2024",  
			items: [
				"PHR : Sucker Rod Strength Well Design Optimization",
				"BTA : Water Storage Tank Strength Calculation",
				"Medco : Gas Piping & Pig Receiver Mechanical Design – Wall Thickness Calculation, Reinforcement Pad Design, and Isometric Drawing Development (2024)",
				"UGM : Complex Gas Piping Network Design – Hydraulic Analysis, Pipe Sizing, and Mechanical Calculation – MEDCOM X (2024)",
				"PGN : Gas Transmission Pipeline FEED Study – Route Selection, Hydraulic Analysis, Pipe Sizing, and Stress Evaluation – Central Java, Indonesia (2024)",
				"Georadar : ANALISIS PONDASI Pembangunan IPA Kapasitas300 lt/dtk–IKN",
				"TGI : Compressor Station Piping Stress Analysis and Design – Suction & Discharge Line Analysis, Support Optimization, and Cost Estimation (2024)",
			],
		},
		"2025": {
			title: "Our 2025 Experiences",
			image: "/img/pg2.png",
			imageAlt: "Experience 2025",
			items: [
				"Tripatra : Adequacy Coil Heater Design Revamp Unit 2 PKT.",
                "Tripatra : FSR - Finite Element Analysis of CO2 Liquifaction Spherical Tank",
                "PKT : Pipestress Analysis of Coil Heater Fin Tube Design",
                "CASALE : Linearization Study of Heat Treatment Manifold Reheater",
                "Puspetindo : Fin Tube Segregated Study for High Tempearature Performance",
                "UGM : Modelling of Numerical Analysis with FInite Element Method for Material Properties Canine",
                "BTA : Shaft Pump Model for Centrigufal Pump Vibration Analysis",
                "PHR : Strength Analysis of Piping Well Model for FInite Element Analysis Stage", 
			],
		},
	};
	const activeExperience = experiencesByYear[activeYear];

	return (
		<div className="experience-page">
			<style>{`
				.experience-page {
					font-family: "Arial", "Helvetica", sans-serif;
					background-color: #ffffff;
					color: #111111;
					width: 100%;
					min-height: 100vh;
					margin: 0;
					padding: 0;
					overflow-x: hidden;
					position: relative;
				}

				.experience-hero {
					position: relative;
					height: 70vh;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					padding-top: 8rem;
				}

				.experience-hero-bg {
					position: absolute;
					inset: 0;
					z-index: 0;
					transform: scale(1.1);
					background-size: cover;
					background-position: center;
					filter: brightness(0.4);
				}

				.experience-hero-gradient {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 10;
					background: linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0.6),
						transparent,
						rgba(0, 0, 0, 1)
					);
				}

				.experience-hero-blur-1 {
					position: absolute;
					top: -6rem;
					left: -6rem;
					width: 24rem;
					height: 24rem;
					background: rgba(37, 99, 235, 0.2);
					border-radius: 9999px;
					filter: blur(120px);
					animation: pulse 2s ease-in-out infinite;
				}

				.experience-hero-blur-2 {
					position: absolute;
					bottom: -6rem;
					right: -6rem;
					width: 24rem;
					height: 24rem;
					background: rgba(220, 38, 38, 0.2);
					border-radius: 9999px;
					filter: blur(120px);
					animation: pulse 2s ease-in-out infinite;
				}

				@keyframes pulse {
					0%, 100% {
						opacity: 1;
					}
					50% {
						opacity: 0.5;
					}
				}

				.experience-hero-content {
					position: relative;
					z-index: 20;
					text-align: center;
					padding: 0 1rem;
					max-width: 56rem;
					margin: 0 auto;
					margin-top: -13rem;
				}

				.experience-hero-badge {
					display: inline-block;
					padding: 0.375rem 1rem;
					margin-bottom: 1rem;
					background: rgba(255, 255, 255, 0.1);
					backdrop-filter: blur(12px);
					border: 1px solid rgba(255, 255, 255, 0.2);
					border-radius: 9999px;
				}

				.experience-hero-badge-text {
					color: #60a5fa;
					font-size: 0.75rem;
					font-weight: 700;
					letter-spacing: 0.2em;
					text-transform: uppercase;
				}

				.experience-hero-title {
					font-size: clamp(3rem, 7vw, 4.5rem);
					font-weight: 900;
					letter-spacing: -0.025em;
					color: #ffffff;
					line-height: 1.1;
				}

				.experience-hero-gradient-text {
					background: linear-gradient(to right, #60a5fa, #a78bfa, #f87171);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.experience-hero-wave {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					overflow: hidden;
					line-height: 0;
					z-index: 20;
				}

				.experience-hero-wave svg {
					position: relative;
					display: block;
					width: 100%;
					height: 60px;
					fill: #000000;
				}

				.experience-content {
					width: 100%;
					background-color: #ffffff;
					color: #111111;
					padding: clamp(24px, 5vw, 80px) clamp(20px, 6vw, 80px)
						clamp(40px, 7vw, 90px);
					box-sizing: border-box;
					background-image: linear-gradient(
						rgba(255, 255, 255, 0.88),
						rgba(255, 255, 255, 0.88)
						),
						url(/img/backg.png);
					background-repeat: no-repeat;
					background-position: left -150px top -150px;
					background-size: clamp(220px, 30vw, 360px) auto;
				}

				.experience-heading {
					font-size: clamp(24px, 4vw, 34px);
					font-weight: 800;
					letter-spacing: 0.3px;
					margin-bottom: clamp(4px, 1.2vw, 10px);
					text-align: left;
				}

				.experience-tabs {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					margin: clamp(12px, 3vw, 24px) 0 clamp(18px, 3vw, 28px);
					text-align: left;
					width: fit-content;
				}

				.experience-tab-buttons {
					display: flex;
					gap: clamp(16px, 4vw, 28px);
					align-items: center;
					justify-content: flex-start;
					margin-bottom: 10px;
					font-size: clamp(16px, 2.6vw, 20px);
					font-weight: 700;
					color: #111111;
				}

				.experience-tab {
					background: none;
					border: none;
					padding: 0;
					font: inherit;
					color: inherit;
					cursor: pointer;
					opacity: 0.6;
					transition: opacity 0.2s ease;
				}

				.experience-tab.is-active {
					opacity: 1;
				}

				.experience-track {
					width: 100%;
					height: 2px;
					background-color: #d9d9d9;
					position: relative;
				}

				.experience-indicator {
					position: absolute;
					left: 0;
					top: 0;
					height: 2px;
					width: 50%;
					background-color: #111111;
					transform: translateX(0);
					transition: transform 0.25s ease;
				}

				.experience-indicator.is-right {
					transform: translateX(100%);
				}

				.experience-grid {
					display: grid;
					grid-template-columns: minmax(240px, 340px) minmax(280px, 1fr);
					gap: clamp(20px, 4vw, 36px);
					align-items: start;
				}

				.experience-image-col {
					width: 100%;
				}

				.experience-image-card {
					width: 100%;
					aspect-ratio: 3 / 4;
					max-height: 380px;
					border-radius: 16px;
					overflow: hidden;
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
				}

				.experience-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					display: block;
				}

				.experience-details {
					min-width: 0;
				}

				.experience-title {
					font-size: clamp(16px, 2.3vw, 18px);
					font-weight: 800;
					margin-bottom: 12px;
					text-transform: uppercase;
					text-align: left;
				}

				.experience-list {
					margin: 0;
					padding-left: 18px;
					line-height: 1.7;
					font-size: clamp(15px, 2.2vw, 17px);
					text-align: left;
					list-style-type: disc;
					list-style-position: outside;
				}

				@media (max-width: 900px) {
					.experience-grid {
						grid-template-columns: 1fr;
					}

					.experience-image-card {
						max-height: 420px;
					}
				}

				@media (max-width: 600px) {
					.experience-content {
						background-position: left -120px top -120px;
					}
				}
			`}</style>
			<section className="experience-hero">
				<div
					className="experience-hero-bg"
					style={{
						backgroundImage: `url(${heroImage})`,
					}}
				/>

				<div className="experience-hero-gradient" />
				<div className="experience-hero-blur-1" />
				<div className="experience-hero-blur-2" />

				<div className="experience-hero-content">
					<div className="experience-hero-badge">
						<a href="#experience-content" className="experience-hero-badge-text">Read More</a>
					</div>
					<h1 className="experience-hero-title">
						Company Experince <br />
						<span className="experience-hero-gradient-text">
							Year to Year
						</span>
					</h1>
				</div>

				<div className="experience-hero-wave">
					<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C51.17,70.66,128.33,103.1,202.2,95.69,263.49,89.5,302.48,70.34,321.39,56.44Z"></path>
					</svg>
				</div>
			</section>

			<div className="experience-content" id="experience-content">
				<div className="experience-heading">Experience</div>
				<div className="experience-heading">Year to Year</div>

				<div className="experience-tabs">
					<div className="experience-tab-buttons">
						<button
							type="button"
							onClick={() => setActiveYear("2024")}
							className={`experience-tab ${
								activeYear === "2024" ? "is-active" : ""
							}`}
						>
							2024
						</button>
						<button
							type="button"
							onClick={() => setActiveYear("2025")}
							className={`experience-tab ${
								activeYear === "2025" ? "is-active" : ""
							}`}
						>
							2025
						</button>
					</div>
					<div className="experience-track">
						<div
							className={`experience-indicator ${
								activeYear === "2025" ? "is-right" : ""
							}`}
						/>
					</div>
				</div>

				<div className="experience-grid">
					<div className="experience-image-col">
						<div className="experience-image-card">
							<img
								src={activeExperience.image}
								alt={activeExperience.imageAlt}
								className="experience-image"
							/>
						</div>
					</div>

					<div className="experience-details">
						<div className="experience-title">
							{activeExperience.title}
						</div>
						<ul className="experience-list">
							{activeExperience.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experince;
