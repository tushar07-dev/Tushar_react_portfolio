import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		React.useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 2200);
	}, []);

	return (
		<React.Fragment>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img
					className='ts_logo'
						src='https://imgs.search.brave.com/VMbjG9FlBcL5oya-SqUeee7IuBbfyJR_GgsUvXAUO-o/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGVtcGxhdGUvMjAx/OTA3MTYvb3VybGFy/Z2UvcG5ndHJlZS1s/ZXR0ZXItdHMtaW5p/dGlhbHMtY2lyY2xl/LWxvZ28tdmVjdG9y/LXRlbXBsYXRlLXIt/aW1hZ2VfMjI4MjMw/LmpwZw?raw=true'
						alt='logo'
					/>
				</div>
			) : (
				<div className='components'>
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#experiences'>
							Work Experience
						</a>

						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techStacks'>
							Tech Stacks
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</React.Fragment>
	);
}

export default App;
