import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const relatedProjects = [
    {
        id: uuidv4(),
        title: 'Adora Beauty Salon Branding',
        img: '/images/adora-logo.jpg',
    },
    {
        id: uuidv4(),
        title: 'Eco View Tyre Recycling Branding',
        img: '/images/eco-view-logo.jpg',
    },
    {
        id: uuidv4(),
        title: 'Kingswood Rugby Team Branding',
        img: '/images/kingswood-rugby-logo.jpg',
    },
    {
        id: uuidv4(),
        title: 'Ozone Consultants Branding',
        img: '/images/ozone-consultants-logo.jpg',
    },
];

function RelatedProjects() {
    return (
        <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
                Related Projects
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
                {relatedProjects.map((project) => (
                    <div key={project.id} className="mb-10 sm:mb-0">
                        <Image
                            src={project.img}
                            className="rounded-xl cursor-pointer"
                            alt={project.title}
                            layout="responsive"
                            width={400}
                            height={400}
                        />
                        <p className="text-center text-primary-dark dark:text-primary-light mt-2">
                            {project.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelatedProjects;
