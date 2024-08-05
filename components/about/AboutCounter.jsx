import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	// Use CountUp hooks for remaining counters
	useCountUp({ ref: 'experienceCounter', end: 4, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 85, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 90, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Design experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>



				<CounterItem
					title="Happy / Returning Clients "
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
