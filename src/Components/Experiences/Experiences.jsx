import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div id="experiences" className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Work Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
					FrontEnd Developer | Software Developer{' '}
					<a href='https://www.zeuslearning.com'>@ Zeus Leaning</a>
				</div>
				<div className={styles.date}>Dec 2022 - Mar 2024</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
                        Developed robust school CRM, improving administrative onboarding by 30% in 2023.
						</li>
						<li>
                        Collaborated on integrating Redux Saga into React, simplifying state management and asynchronous operations
						</li>
						<li>
                        Ensured web accessibility compliance for class-based components in legacy code, meeting Web Accessibility
                            Initiative (WAI) standards for an education platform and improving usability for all users.
						</li>
						<li>
                        Optimized CKEditor integration with client-side caching and intelligent data fetching, resulting in reduced API calls and
                            improved editor performance.
						</li>
					</ul>
				</fieldset>
			</div>
		</div>
	);
};

export default Experiences;
