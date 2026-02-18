import React, { useState } from "react";

const Servis = () => {
	const heroImage = "/img/hero.jpg";
	const servicesImage = "/img/pm.png";
	const servicesCategories = [
		{
			title: "Deliver Mechanical Engineering & Equipment Integrity Services",
			intro: "Professional engineering services focused on the design, evaluation, maintenance, and life-cycle assurance of mechanical systems and industrial equipment.",
			bullets: [
				"Nozzle & Interface Evaluation",
				"Fitness-for-Service & Life Assessment",
				"Troubleshooting & Engineering Support",
				"Design & Engineering Verification",
				"Equipment Integrity Assessment",
				"Skid, Frame & Support Analysis",
			],
			image: "/img/l23.png",
		},
		{
			title: "Piping & PIPELINE Engineering",
			intro: "Specialized mechanical engineering discipline focused on the design, analysis, and integrity assurance of piping systems and pipelines.",
			bullets: [
				"Piping Stress & Flexibility Analysis",
				"Dynamic & Special Load Assessment",
				"Piping Support & Restraint Design",
                "Equipment Interface & Nozzle Load Evaluation",
                "As-Built, Revamp & Brownfield Studies",
                "Code Compliance & Engineering Verification",
			],
			image: "/img/acc1.jpeg",
		},
        {
			title: "Welding Engineering & Fabrication Quality",
			intro: "Services that ensure welded structures, piping, and equipment are fabricated correctly and in full compliance with codes.",
			bullets: [
				"Welding Engineering & Procedure Support",
				"Weld Joint Design & Fabrication Review",
				"Residual Stress & Distortion Assessment",
                "Repair, Modification & Remedial Welding",
                "Failure & Root Cause Analysis",
			],
			image: "/img/wd2.jpeg",
		},
        {
			title: "Provide FEM-Based Engineering Analysis",
			intro: "Advanced analysis using Finite Element Method for complex structural and mechanical evaluations.",
			bullets: [
				"Pressure Equipment & Component Analysis",
				"Thermal & Thermo-Mechanical Analysis",
				"Fatigue & Cyclic Loading Assessment",
                "Buckling & Stability Analysis",
                "Vibration Analysis",
			],
			image: "/img/base.png",
		},
        {
			title: "Ensure Code Compliance & Engineering Assurance",
			intro: "Verification and documentation to ensure all designs and operations meet regulatory and technical standards.",
			bullets: [
				"Code Compliance Verification",
				"Independent Engineering Review (IER)",
				"Engineering Assurance & Risk Assessment",
                "Documentation & Traceability",
			],
			image: "/img/code.png",
		}
	];

	const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
	const activeCategory = servicesCategories[activeCategoryIndex] || servicesCategories[0];

	return (
		<div className="services-page">
			<style>{`
				.services-page {
					font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
					background-color: #ffffff;
					color: #333;
					margin: 0; padding: 0;
					overflow-x: hidden;
				}

				/* --- HERO SECTION --- */
				.services-hero {
					position: relative;
					height: 75vh;
					min-height: 520px;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
				}
				.services-hero-bg {
					position: absolute;
					inset: 0;
					z-index: 0;
					background-size: cover;
					background-position: center;
					filter: brightness(0.8);
				}
				.services-hero-overlay {
					position: absolute;
					inset: 0;
					z-index: 5;
					background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
				}
				.services-hero-content {
					position: relative;
					z-index: 10;
					text-align: center;
					color: white;
				}
				.services-hero-title {
					font-size: clamp(2.5rem, 6vw, 4.5rem);
					font-weight: 800;
					line-height: 1.1;
                    margin: 0;
				}
				.services-hero-gradient-text {
					background: linear-gradient(to right, #60a5fa, #a78bfa, #f87171);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.services-hero-wave {
					position: absolute;
					bottom: -1px;
					left: 0;
					width: 100%;
					line-height: 0;
					z-index: 20;
				}
				.services-hero-wave svg {
					width: 100%;
					height: 100px;
					fill: #7C0A02;
				}

				/* --- RED SECTION WITH GRADIENT --- */
				.services-red-section {
					/* Gradasi dari Merah ke Putih di bagian paling bawah */
					background: linear-gradient(to bottom, #7C0A02 0%, #7C0A02 72%, #b3655f 84%, #e7c4c1 93%, #ffffff 100%);
					padding: 70px 0 120px 0;
					color: #ffffff;
				}
				.container-custom {
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 40px;
				}

				/* Responsif Intro: Judul dan Deskripsi 2 Baris */
				.services-intro-grid {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 16px;
					margin-bottom: 80px;
				}
				.services-intro-title {
					font-size: clamp(32px, 5vw, 56px);
					font-weight: 900;
					letter-spacing: 2px;
					margin: 0;
					flex: 0 0 auto;
				}
				.services-intro-text {
					font-size: 18px;
					line-height: 1.6;
					font-weight: 500;
					opacity: 0.95;
					flex: 1;
					margin: 0;
					display: block;
				}

				/* Kartu Prime FEM: Panjang ke samping */
				.prime-fem-content-wrapper {
					display: flex;
					align-items: center;
					gap: 50px;
					width: 100%; /* Menjadi panjang ke samping */
                    background: rgba(255, 255, 255, 0.08);
                    padding: 50px;
                    border-radius: 20px;
                    border-left: 8px solid #ffffff;
					backdrop-filter: blur(10px);
					box-shadow: 0 20px 40px rgba(0,0,0,0.2);
				}
				.prime-fem-text {
					flex: 2; /* Lebih lebar untuk teks */
				}
				.prime-fem-title {
					font-size: 36px;
					font-weight: 800;
					margin-bottom: 20px;
                    letter-spacing: 1px;
				}
				.prime-fem-desc {
					font-size: 18px;
					line-height: 1.7;
					font-weight: 400;
				}
				.prime-fem-img-box {
					flex: 1; /* Box logo lebih proporsional */
					height: 180px;
					border-radius: 12px;
					overflow: hidden;
				    background: transparent;
					display: block;
				}
				.prime-fem-img-box img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				/* --- WHITE SECTION (CATEGORIES) --- */
				.services-white-section {
					margin-top: -72px;
					padding: 132px 0 120px 0;
					background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0px, #ffffff 190px);
				}
				.category-grid {
					display: grid;
					grid-template-columns: 400px 1fr;
					gap: 80px;
				}
				.accordion-list {
					margin-top: 100px;
				}
				.category-sticky-side {
					position: sticky;
					top: 80px;
                    height: fit-content;
				}
				.category-label {
					font-size: 38px;
					font-weight: 900;
					line-height: 1.1;
					color: #1a1a1a;
					text-transform: uppercase;
					margin-bottom: 20px;
				}
				.category-accent-line {
					width: 53%;
					height: 8px;
					background: #7C0A02;
					margin-bottom: 40px;
				}
				.active-img-preview {
					width: 100%;
					aspect-ratio: 4/3;
					border-radius: 20px;
					overflow: hidden;
					box-shadow: 0 25px 50px rgba(0,0,0,0.1);
				}
				.active-img-preview img {
					width: 100%; height: 100%; object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
				}

				/* --- ACCORDION --- */
				.accordion-item {
					border-bottom: 1px solid #eee;
				}
				.accordion-trigger {
					width: 100%;
					padding: 22px 0;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: none;
					border: none;
					cursor: pointer;
					text-align: left;
				}
				.trigger-title {
					font-size: 19px;
					font-weight: 700;
					color: #333;
                    transition: color 0.3s ease;
				}
				.accordion-trigger:hover .trigger-title {
					color: #7C0A02;
				}
				.trigger-icon {
					font-size: 24px;
					color: #7C0A02;
				}
				.accordion-content {
					padding: 0 0 28px 0;
					color: #555;
					font-size: 16px;
					line-height: 1.7;
                    animation: fadeIn 0.4s ease;
				}
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .bullet-list {
					margin: 14px 0 0 18px;
                    padding: 0;
                    list-style-type: square;
                }
                .bullet-list li {
					margin-bottom: 8px;
                    color: #444;
                }

				/* RESPONSIVE */
				@media (max-width: 992px) {
					.services-intro-grid {
						flex-direction: column;
                        text-align: center;
						gap: 0;
					}
					.services-intro-text {
						display: block;
					}
					.prime-fem-content-wrapper {
						flex-direction: column-reverse;
						text-align: center;
						padding: 30px;
					}
					.prime-fem-img-box {
						width: 100%;
						height: 150px;
					}
                    .category-grid {
                        grid-template-columns: 1fr;
                    }
					.accordion-list {
						margin-top: 0;
					}
                    .category-sticky-side {
                        position: relative;
                        top: 0;
                        margin-bottom: 50px;
                    }
				}
			`}</style>

			{/* HERO */}
			<section className="services-hero">
				<div className="services-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
				<div className="services-hero-overlay" />
				<div className="services-hero-content">
					<h1 className="services-hero-title">
						ENGINEERING<br />
						<span className="services-hero-gradient-text">EXCELLENCE</span>
					</h1>
				</div>
				<div className="services-hero-wave">
					<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C51.17,70.66,128.33,103.1,202.2,95.69,263.49,89.5,302.48,70.34,321.39,56.44Z"></path>
					</svg>
				</div>
			</section>

			{/* RED SECTION WITH GRADIENT TRANSITION */}
			<section className="services-red-section">
				<div className="container-custom">
					<div className="services-intro-grid">
						<h2 className="services-intro-title">SERVICES</h2>
						<p className="services-intro-text">
							The services we provide include Mechanical Engineering, FEM Analysis, Piping & Stress Analysis,<br />
							Welding Engineering, Code Compliance, and Geotechnical Studies.
						</p>
					</div>

					<div className="prime-fem-content-wrapper">
						<div className="prime-fem-text">
							<h3 className="prime-fem-title">PRIME FEM</h3>
							<p className="prime-fem-desc">
								PrimeFEM is an engineering consulting company that delivers 
								analysis-driven engineering solutions. We support industrial 
								projects by providing design verification, integrity assessment, 
								and code-compliant evaluations to ensure efficient project execution.
							</p>
						</div>
						<div className="prime-fem-img-box">
							<img src={servicesImage} alt="Prime FEM Logo" />
						</div>
					</div>
				</div>
			</section>

			{/* WHITE SECTION */}
			<section className="services-white-section">
				<div className="container-custom">
					<div className="category-grid">
						<div className="category-sticky-side">
							<h2 className="category-label">Services<br/>Category</h2>
							<div className="category-accent-line" />
							<div className="active-img-preview">
								<img key={activeCategory.image} src={activeCategory.image} alt="Category preview" />
							</div>
						</div>

						<div className="accordion-list">
							{servicesCategories.map((cat, idx) => (
								<div key={idx} className="accordion-item">
									<button 
										className="accordion-trigger"
										onClick={() =>
											setActiveCategoryIndex((prevIndex) =>
												prevIndex === idx ? null : idx
											)
										}
									>
										<span className="trigger-title">{cat.title}</span>
										<span className="trigger-icon">{activeCategoryIndex === idx ? "−" : "+"}</span>
									</button>
									{activeCategoryIndex === idx && (
										<div className="accordion-content">
											<p>{cat.intro}</p>
											<ul className="bullet-list">
												{cat.bullets.map((b, i) => <li key={i}>{b}</li>)}
											</ul>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Servis;