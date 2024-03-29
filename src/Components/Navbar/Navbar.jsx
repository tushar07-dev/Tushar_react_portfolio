import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const circle = {
	background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
	transform: 'scale(1)',
};

const Navbar = () => {
	const [preScrollPos, setPreScrollPos] = useState(
		window.pageYOffset,
	);
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if (preScrollPos > currentScrollPos) {
			navRef.current.style.top = '0';
		} else {
			navRef.current.style.top = '0';
		}
		setPreScrollPos(currentScrollPos);
	};

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
			
					<div className={styles.logo}>
						<img
							src='https://imgs.search.brave.com/VMbjG9FlBcL5oya-SqUeee7IuBbfyJR_GgsUvXAUO-o/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGVtcGxhdGUvMjAx/OTA3MTYvb3VybGFy/Z2UvcG5ndHJlZS1s/ZXR0ZXItdHMtaW5p/dGlhbHMtY2lyY2xl/LWxvZ28tdmVjdG9y/LXRlbXBsYXRlLXIt/aW1hZ2VfMjI4MjMw/LmpwZw?raw=true'
							alt='Logo'
						/>
					</div>
				

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<a  href='#home'>Home</a>
					<a  href='#about'>About</a>
					<a href='#techStacks'>Tech stack</a>
					<a href='#experiences'>Work Experience</a>
					<a href='#projects'>Projects</a>
					<a href='#contact'>Contact</a>
				</div>
				<button
					aria-label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
					title={
						mode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'
					}
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					<div
						className={styles.circle}
						style={mode === 'light' ? circle : {}}
					>
						<div
							style={mode === 'light' ? cresent : {}}
							className={styles.crescent}
						></div>
					</div>
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
