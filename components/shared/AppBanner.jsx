import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppBanner() {
    const [activeTheme] = useThemeSwitcher();

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
        >
            <div className="w-full md:w-1/3 text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.1,
                    }}
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
                >
                    Hi, I am Dulara Abey
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.2,
                    }}
                    className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                    A Graphic Designer & UI/UX Designer
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                    <Link href="/about" legacyBehavior>
                        <a
                            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                            aria-label="About Me"
                        >
                            <span className="text-sm sm:text-lg duration-100">
                                Learn More
                            </span>
                        </a>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
            >
                <Image
                    src="/images/developer.png"
                    alt="Developer"
                    width={500}
                    height={500}
                    layout="responsive"
                />

            </motion.div>
        </motion.section>
    );
}

export default AppBanner;
