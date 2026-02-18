const Footer = () => {
	const styles = `
.prime-footer {
	font-family: "Segoe UI", Arial, sans-serif;
	color: #1e1e1e;
	background: #ffffff;
	border-top: 1px solid #d0d0d0;
}

.prime-footer__main {
	display: grid;
	grid-template-columns: 1.2fr 0.8fr 1.2fr;
	gap: 16px;
	padding: 28px 48px 22px;
	align-items: start;
	background-image: 
		linear-gradient(
			to right,
			rgba(255, 255, 255, 0.95) 0%,
			rgba(255, 255, 255, 0.95) 40%,
			rgba(255, 255, 255, 0.5) 60%,
			rgba(255, 255, 255, 0) 80%
		),
		linear-gradient(
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0.8)
		),
		url(/img/backg.png);
	background-repeat: no-repeat;
	background-position: right -250px;
	background-size: 500px 500px;
}

.prime-footer__col {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.prime-footer__col--contact {
	position: relative;
	z-index: 1;
	padding-left: 56px;
}

.prime-footer__col--links {
	padding-left: 100px; /* Geser ke kanan */
}

.prime-footer__logo {
	width: 230px;
	height: auto;
}

.prime-footer__desc {
	font-size: 13px;
	line-height: 1.5;
	color: #3e3e3e;
	max-width: 420px;
}

.prime-footer__title {
	font-weight: 600;
	font-size: 15px;
	color: #1c1c1c;
	position: relative;
	padding-left: 12px;
}

.prime-footer__title::before {
	content: "";
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 2px;
	height: 18px;
	background: #8b0f0f;
}

.prime-footer__list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: #2a2a2a;
	font-size: 14px;
}

.prime-footer__list li {
	position: relative;
	padding-left: 12px;
}

.prime-footer__list li::before {
	content: "";
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 2px;
	height: 14px;
	background: #8b0f0f;
}

.prime-footer__contact {
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 13px;
	color: #1f1f1f;
}

.prime-footer__item {
	display: grid;
	grid-template-columns: 20px 1fr;
	align-items: start;
	gap: 10px;
}

.prime-footer__item p {
	margin: 0;
	line-height: 1.4;
}

.prime-footer__label {
	font-weight: 600;
	margin-bottom: 2px;
}

.prime-footer__icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #1e1e1e;
}

.prime-footer__icon svg {
	width: 16px;
	height: 16px;
	fill: currentColor;
}

.prime-footer__bottom {
	background: #7b0f0f;
	color: #fff;
	text-align: center;
	padding: 10px 16px;
	font-size: 13px;
}

@media (max-width: 1024px) {
	.prime-footer__main {
		grid-template-columns: 1.2fr 0.8fr 1.2fr;
		gap: 12px;
		padding: 20px 40px 16px;
	}

	.prime-footer__logo {
		width: 200px;
	}

	.prime-footer__col--links {
		padding-left: 60px;
	}

	.prime-footer__col--contact {
		padding-left: 40px;
	}
}

@media (max-width: 768px) {
	.prime-footer__main {
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		padding: 24px 24px 20px;
	}

	.prime-footer__logo {
		width: 180px;
	}

	.prime-footer__col--brand {
		grid-column: 1 / -1;
	}

	.prime-footer__col--links {
		padding-left: 0;
	}

	.prime-footer__col--contact {
		padding-left: 0;
		background-size: 200px 200px;
		background-position: left top;
	}

	.prime-footer__desc {
		font-size: 12px;
		max-width: 100%;
	}
}

@media (max-width: 480px) {
	.prime-footer__main {
		grid-template-columns: 1fr;
		gap: 20px;
		padding: 20px 16px 16px;
	}

	.prime-footer__logo {
		width: 150px;
	}

	.prime-footer__col--brand {
		grid-column: auto;
	}

	.prime-footer__col--links {
		padding-left: 0;
	}

	.prime-footer__col--contact {
		padding-left: 0;
		background-size: 150px 150px;
		background-position: left top;
	}

	.prime-footer__title {
		font-size: 13px;
	}

	.prime-footer__list {
		gap: 2px;
	}

	.prime-footer__list li {
		font-size: 12px;
	}

	.prime-footer__contact {
		gap: 4px;
		font-size: 12px;
	}

	.prime-footer__desc {
		font-size: 11px;
	}

	.prime-footer__bottom {
		padding: 8px 12px;
		font-size: 11px;
	}
}
`

	return (
		<footer className="prime-footer">
			<style>{styles}</style>
			<div className="prime-footer__main">
				<div className="prime-footer__col prime-footer__col--brand">
					<img
						src="/img/hiprem.png"
						alt="PrimeFEM"
						className="prime-footer__logo"
					/>
					<p className="prime-footer__desc">
						Would you like to start your professional career, gather practical
						experience, but your knowledge to good use and directly earn money?
						At our company, you can undergo training in technical, industrial
						and commercial areas.
					</p>
				</div>

				<div className="prime-footer__col prime-footer__col--links">
					<h4 className="prime-footer__title">Home</h4>
					<ul className="prime-footer__list">
						<li>About Us</li>
						<li>Our Service</li>
						<li>Our Experiences</li>
						<li>Our Specialities</li>
					</ul>
				</div>

				<div className="prime-footer__col prime-footer__col--contact">
					<h4 className="prime-footer__title">Contact Us</h4>
					<div className="prime-footer__contact">
						<div className="prime-footer__item">
							<span className="prime-footer__icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
								</svg>
							</span>
							<div>
								<p className="prime-footer__label">Surabaya Office</p>
								<p>Jl. Baruk Barat IX No.85,</p>
								<p>Kedung Baruk, Kec. Rungkut,</p>
								<p>Surabaya, Jawa Timur 60298</p>
							</div>
						</div>

						<div className="prime-footer__item">
							<span className="prime-footer__icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M6.6 10.8a13.8 13.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" />
								</svg>
							</span>
							<p>+ 6281–333–546–332</p>
						</div>

						<div className="prime-footer__item">
							<span className="prime-footer__icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M6.6 10.8a13.8 13.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.25 1z" />
								</svg>
							</span>
							<p>021 7538506</p>
						</div>

						<div className="prime-footer__item">
							<span className="prime-footer__icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
								</svg>
							</span>
							<p>primefem.id@gmail.com</p>
						</div>
					</div>
				</div>
			</div>

			<div className="prime-footer__bottom">
				All Rights Reserved © 2026. PrimeFEM
			</div>
		</footer>
	)
}

export default Footer