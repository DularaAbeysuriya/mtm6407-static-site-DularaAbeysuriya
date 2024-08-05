import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import RelatedProjects from '../../components/projects/RelatedProjects';
import { projectsData } from '../../data/projectsData'; // Ensure this path is correct

function ProjectSingle({ project }) {
    if (!project) {
        return (
            <div className="container mx-auto">
                <p className="font-general-medium text-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    Project not found.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <PagesMetaHead title={project.title} />

            {/* Header */}
            <div>
                <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                    {project.ProjectHeader.title}
                </p>
                <div className="flex">
                    <div className="flex items-center mr-10">
                        <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {project.ProjectHeader.publishDate}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
                        <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                            {project.ProjectHeader.tags}
                        </span>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                {project.ProjectImages.map((img) => (
                    <div className="mb-10 sm:mb-0" key={img.id}>
                        <Image
                            src={img.img} // Ensure this path is correct
                            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                            alt={img.title}
                            layout="responsive"
                            width={100}
                            height={90}
                        />
                    </div>
                ))}
            </div>

            {/* Info */}
            <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                <div className="w-full sm:w-1/3 text-left">
                    {/* Single project client details */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                            {project.ProjectInfo.ClientHeading}
                        </p>
                        <ul className="leading-loose">
                            {project.ProjectInfo.CompanyInfo.map((info) => (
                                <li className="font-general-regular text-ternary-dark dark:text-ternary-light" key={info.id}>
                                    <span>{info.title}: </span>
                                    <a
                                        href={info.details.includes('http') ? info.details : undefined}
                                        className={info.title === 'Website' || info.title === 'Phone' ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300' : ''}
                                        aria-label="Project Website and Phone"
                                    >
                                        {info.details}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Single project objectives */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project.ProjectInfo.ObjectivesHeading}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-primary-light">
                            {project.ProjectInfo.ObjectivesDetails}
                        </p>
                    </div>

                    {/* Single project technologies */}
                    <div className="mb-7">
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project.ProjectInfo.Technologies[0]?.title || 'Technologies'}
                        </p>
                        <p className="font-general-regular text-primary-dark dark:text-primary-light">
                            {project.ProjectInfo.Technologies[0]?.techs.join(', ') || 'N/A'}
                        </p>
                    </div>

                    {/* Single project social sharing */}
                    <div>
                        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                            {project.ProjectInfo.SocialSharingHeading || 'Share this project'}
                        </p>
                    </div>
                </div>

                {/* Single project right section details */}
                <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        {project.ProjectInfo.ProjectDetailsHeading}
                    </p>
                    {Array.isArray(project.ProjectInfo.ProjectDetails) ? (
                        project.ProjectInfo.ProjectDetails.map((detail) => (
                            <p key={detail.id} className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
                                {detail.details}
                            </p>
                        ))
                    ) : (
                        <p className="text-ternary-dark dark:text-ternary-light">No project details available.</p>
                    )}
                </div>
            </div>

            {/* Related Projects */}
            <RelatedProjects />
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const { id } = query;
    console.log('Requested project ID:', id); // Log the requested project ID
    console.log('Projects Data:', projectsData); // Log the projectsData

    // Ensure `projectsData` is available
    if (!Array.isArray(projectsData)) {
        console.error('Projects data is not an array or is undefined');
        return {
            notFound: true,
        };
    }

    // Fetch the project data
    const project = projectsData.find((project) => project.id === id);

    if (!project) {
        console.log('Project not found for ID:', id); // Log when project is not found
        return {
            notFound: true,
        };
    }

    console.log('Found project:', project); // Log the found project details

    return {
        props: {
            project,
        },
    };
}

export default ProjectSingle;
