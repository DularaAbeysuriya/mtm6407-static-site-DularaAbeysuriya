import { useState } from 'react';

const selectOptions = [
	'Logo Design',
	'Brand Identity',
	'Print Design',
	'Web Design',
	'Branding',
	'Typography',
	'Illustration',
	'Social Media Graphics',
];

function ProjectsFilter({ setSelectProject }) {
	const [selectedValue, setSelectedValue] = useState('All Projects');

	return (
		<select
			value={selectedValue}
			onChange={(e) => {
				setSelectedValue(e.target.value);
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value="All Projects" className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
