import React, { useState } from 'react';
import Link from "next/link";
import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './portfolio.module.scss';

const imagesData = {
    'wszystkie': [
        { id: '1', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Grodzisk Mazowiecki', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '2', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
        { id: '3', src: 'https://media.graphassets.com/89fKLvxRNeSHV8h5rQWQ', title: 'Prywatny Małopolska US Open', alt: 'Image 2', href: '/realizacje/prywatny-malopolska' },
        { id: '4', src: 'https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3', title: 'Prywatny Mazowsze', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze' },
        { id: '5', src: 'https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF', title: 'Prywatny Warmia', alt: 'Image 2', href: '/realizacje/prywatny-warmia' },
        { id: '6', src: 'https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY', title: 'Prywatny Mazowieckie', alt: 'Image 2', href: '/realizacje/prywatny-mazowieckie' },
        { id: '7', src: 'https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI', title: 'Wrocław', alt: 'Image 2', href: '/' },
        { id: '8', src: 'https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw', title: 'Wrocław2', alt: 'Image 2', href: '/' },
        { id: '9', src: 'https://media.graphassets.com/CeGywygMQFG5aAZWjSA9', title: 'Częstochowa', alt: 'Image 2', href: '/' },
        { id: '10', src: 'https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw', title: 'Łódzkie', alt: 'Image 2', href: '/' },
        { id: '11', src: 'https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV', title: 'Mlachowice', alt: 'Image 2', href: '/' },
        { id: '12', src: 'https://media.graphassets.com/ULNthdorSK15hIpsNOMA', title: 'Świerkocin', alt: 'Image 2', href: '/' },
        { id: '13', src: 'https://media.graphassets.com/K6b6golKRMeJOZaG3MjG', title: 'Pruszków', alt: 'Image 2', href: '/' },
        { id: '14', src: 'https://media.graphassets.com/R8mvuD0CRc4vPLcWiYTG', title: 'Wawer', alt: 'Image 2', href: '/' },
        { id: '15', src: 'https://media.graphassets.com/87A71ICSdizs9OXV32Tg', title: 'Dębno', alt: 'Image 2', href: '/' },
        { id: '16', src: 'https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd', title: 'Prywatny Małopolska', alt: 'Image 2', href: '/' },
        { id: '17', src: 'https://media.graphassets.com/HBJvx3IFT22tvWmrZts1', title: 'Prywatny Mazowsze', alt: 'Image 2', href: '/' },
        { id: '18', src: 'https://media.graphassets.com/wpifDb23TiWSSvqEjfgg', title: 'Prywatny Mazowsze 2', alt: 'Image 2', href: '/' },
        { id: '19', src: 'https://media.graphassets.com/rshTKxZsQeKpEWFuQnsH', title: 'Prywatny Mazury', alt: 'Image 2', href: '/' },
        { id: '20', src: 'https://media.graphassets.com/0IlxCJGoQvSlovFzofhH', title: 'Mentor Toruń', alt: 'Image 2', href: '/' },
        { id: '21', src: 'https://media.graphassets.com/sQr7dglMRRG7I9FC5120', title: 'Nowy Sącz', alt: 'Image 2', href: '/' },
        { id: '22', src: 'https://media.graphassets.com/haQeipTzTfyoYPasozX8', title: 'Pojezierce', alt: 'Image 2', href: '/' },
        { id: '23', src: 'https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik', title: 'Wola Gąkowska', alt: 'Image 2', href: '/' },
        { id: '24', src: 'https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk', title: 'Rzeszów', alt: 'Image 2', href: '/' },
        { id: '25', src: 'https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA', title: 'Gniezno', alt: 'Image 2', href: '/' },
        { id: '26', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Grodzisk', alt: 'Image 2', href: '/' },
        // more images...
    ],
    'korty akrylowe': [
        { id: '28', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Grodzisk', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '29', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
        { id: '30', src: 'https://media.graphassets.com/89fKLvxRNeSHV8h5rQWQ', title: 'Prywatny Małopolska US Open', alt: 'Image 2', href: '/' },
        { id: '31', src: 'https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3', title: 'Prywatny Mazowsze', alt: 'Image 2', href: '/' },
        { id: '32', src: 'https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF', title: 'Prywatny Warmia', alt: 'Image 2', href: '/' },
        { id: '33', src: 'https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY', title: 'Prywatny Mazowieckie', alt: 'Image 2', href: '/' },
        { id: '34', src: 'https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI', title: 'Wrocław', alt: 'Image 2', href: '/' },
        { id: '35', src: 'https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw', title: 'Wrocław2', alt: 'Image 2', href: '/' },
        // more images...
    ],
    'korty ceglane': [
        { id: '36', src: 'https://media.graphassets.com/CeGywygMQFG5aAZWjSA9', title: 'Częstochowa', alt: 'Image 2', href: '/' },
        { id: '37', src: 'https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw', title: 'Łódzkie', alt: 'Image 2', href: '/' },
        { id: '38', src: 'https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV', title: 'Mlachowice', alt: 'Image 2', href: '/' },
        { id: '39', src: 'https://media.graphassets.com/ULNthdorSK15hIpsNOMA', title: 'Świerkocin', alt: 'Image 2', href: '/' },
        { id: '40', src: 'https://media.graphassets.com/K6b6golKRMeJOZaG3MjG', title: 'Pruszków', alt: 'Image 2', href: '/' },
        { id: '41', src: 'https://media.graphassets.com/R8mvuD0CRc4vPLcWiYTG', title: 'Wawer', alt: 'Image 2', href: '/' },
        // more images...
    ],
    'sztuczna trawa': [
        { id: '42', src: 'https://media.graphassets.com/87A71ICSdizs9OXV32Tg', title: 'Dębno', alt: 'Image 2', href: '/' },
        { id: '43', src: 'https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd', title: 'Prywatny Małopolska', alt: 'Image 2', href: '/' },
        { id: '44', src: 'https://media.graphassets.com/HBJvx3IFT22tvWmrZts1', title: 'Prywatny Mazowsze', alt: 'Image 2', href: '/' },
        { id: '45', src: 'https://media.graphassets.com/wpifDb23TiWSSvqEjfgg', title: 'Prywatny Mazowsze 2', alt: 'Image 2', href: '/' },
        { id: '46', src: 'https://media.graphassets.com/rshTKxZsQeKpEWFuQnsH', title: 'Prywatny Mazury', alt: 'Image 2', href: '/' },
        { id: '47', src: 'https://media.graphassets.com/0IlxCJGoQvSlovFzofhH', title: 'Mentor Toruń', alt: 'Image 2', href: '/' },
        { id: '48', src: 'https://media.graphassets.com/sQr7dglMRRG7I9FC5120', title: 'Nowy Sącz', alt: 'Image 2', href: '/' },
        { id: '49', src: 'https://media.graphassets.com/haQeipTzTfyoYPasozX8', title: 'Pojezierce', alt: 'Image 2', href: '/' },
        { id: '50', src: 'https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik', title: 'Wola Gąkowska', alt: 'Image 2', href: '/' },
    ],
    'hale tenisowe': [
        { id: '51', src: 'https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk', title: 'Rzeszów', alt: 'Image 2', href: '/' },
        { id: '52', src: 'https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA', title: 'Gniezno', alt: 'Image 2', href: '/' },
        { id: '53', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Grodzisk', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '54', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
    ],
    // more categories...
};

function getImagesForCategory(category) {
    return imagesData[category] || [];
}

const Portfolio = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className={styles.portfolio}>
            <div className="grid grid-cols-5 mb-[20px] mx-[100px] border-green border-[1px] rounded-2xl">
                {categories.map((category, index) => {
                    const isFirst = index === 0;
                    const isLast = index === categories.length - 1;
                    const borderRadiusClass = isFirst ? 'rounded-l-xl' : isLast ? 'rounded-r-xl' : '';

                    return (
                        <button
                            key={category}
                            className={classNames(styles.category, borderRadiusClass, selectedCategory === category ? 'bg-green' : 'p-[10px] border-green border-r-[1px]')}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            <Gallery key={selectedCategory} category={selectedCategory} />
        </div>
    );
};

const Gallery = ({ category }) => {
    // Fetch or import your images based on the category
    const images = getImagesForCategory(category);

    const variants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.2
            }
        }),
    };

    return (
        <div className="grid grid-cols-2 gap-2 pt-[60px] px-[20px] sm:px-[100px] sm:grid-cols-3">
            {images.map((image, i) => (
                <motion.div
                    className='relative'
                    key={image.id}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    whileHover="visible"
                >
                    <Link
                        href={image.href}
                        className='aspect-video rounded-2xl block h-full'
                        style={{
                            backgroundImage: `url(${image.src})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div className='absolute w-full h-[50px] backdrop-brightness-75 bottom-0 rounded-b-2xl flex justify-center items-center text-white font-semibold'>
                        {image.title}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Portfolio;