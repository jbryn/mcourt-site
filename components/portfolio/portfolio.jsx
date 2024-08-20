import React, { useState } from 'react';
import Link from "next/link";
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './portfolio.module.scss';

const imagesData = {
    'wszystkie': [
        { id: '1', src: 'https://media.graphassets.com/awYLvtSNmg72UZ4Do0wA', title: 'Akademia Tenisa Kozerki - Filia Grodzisk Mazowiecki', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '2', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Polskie Centrum Szkoleniowe PZT - Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
        { id: '26', src: 'https://media.graphassets.com/bPjA4uPtQxurLqETiVQZ', title: 'Kortmax - Łaźniewek', alt: 'Image 2', href: '/korty-lazniewek' },
        { id: '9', src: 'https://media.graphassets.com/CeGywygMQFG5aAZWjSA9', title: 'Antuka Tenis Klub - Częstochowa', alt: 'Image 2', href: '/realizacje/antuka-tenis-klub-czestochowa', offsetX: '0px', offsetY: '-70px' },
        { id: '14', src: 'https://media.graphassets.com/AdBoETmRQu2S6x4pgNSA', title: 'OSiR Wawer - Warszawa', alt: 'Image 2', href: '/realizacje/osir-wawer-warszawa' },
        { id: '15', src: 'https://media.graphassets.com/87A71ICSdizs9OXV32Tg', title: 'OSiR Dębno - Dębno', alt: 'Image 2', href: '/realizacje/osir-debno', offsetX: '0px', offsetY: '-70px' },
        { id: '3', src: 'https://media.graphassets.com/89fKLvxRNeSHV8h5rQWQ', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-malopolska-us-open', offsetX: '-20px', offsetY: '-120px', size: '115%' },
        { id: '20', src: 'https://media.graphassets.com/0IlxCJGoQvSlovFzofhH', title: 'MentorSport - Toruń', alt: 'Image 2', href: '/realizacje/mentorsport-torun', offsetX: '0px', offsetY: '-70px' },
        { id: '4', src: 'https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze', offsetX: '-50px', offsetY: '0px' },
        { id: '23', src: 'https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik', title: 'Centrum Kultury - Wola Gołkowska', alt: 'Image 2', href: '/realizacje/centrum-kultury-wola-golkowska', offsetX: '0px', offsetY: '-40px' },
        { id: '5', src: 'https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-warmia', offsetX: '0px', offsetY: '-70px' },
        { id: '25', src: 'https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA', title: 'Gnieźnieński Klub Tenisowy - Gniezno', alt: 'Image 2', href: '/realizacje/hala-tenisowa-gniezno' },
        { id: '18', src: 'https://media.graphassets.com/wpifDb23TiWSSvqEjfgg', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze-2023', offsetX: '0px', offsetY: '-20px' },
        { id: '19', src: 'https://media.graphassets.com/s2rsBfiAQhmPh2OLuvyk', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazury', offsetX: '-15px', offsetY: '-70px', size: '110%' },
        { id: '7', src: 'https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI', title: 'Szkoła Podstawowa nr: 72 - Wrocław', alt: 'Image 2', href: '/realizacje/szkola-podstawowa-nr72-wroclaw', offsetX: '0px', offsetY: '-130px', size: '120%' },
        { id: '10', src: 'https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-lodzkie', offsetX: '0px', offsetY: '-70px' },
        { id: '8', src: 'https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw', title: 'Hala w Szkole Podstawowej nr: 72 - Wrocław', alt: 'Image 2', href: '/realizacje/szkola-podstawowa-nr72-wroclaw-hala', offsetX: '-30px', offsetY: '-120px', size: '115%' },
        { id: '11', src: 'https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-myslenice', offsetX: '-50px', offsetY: '-30px', size: '115%' },
        { id: '12', src: 'https://media.graphassets.com/ULNthdorSK15hIpsNOMA', title: 'Ośrodek wypoczynkowy - Świerkocin', alt: 'Image 2', href: '/realizacje/osrodek-wypoczynkowy-swierkocin', offsetX: '-60px', offsetY: '-120px', size: '115%' },
        { id: '13', src: 'https://media.graphassets.com/K6b6golKRMeJOZaG3MjG', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-pruszkow', offsetX: '0px', offsetY: '-70px' },
        { id: '24', src: 'https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk', title: 'Klub Sportowy Czarni - Rzeszów', alt: 'Image 2', href: '/realizacje/klub-sportowy-czarni-rzeszow' },
        { id: '16', src: 'https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-malopolska', offsetX: '-30px', offsetY: '-110px', size: '115%' },
        { id: '17', src: 'https://media.graphassets.com/HBJvx3IFT22tvWmrZts1', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze-sztuczna-trawa', offsetX: '-70px', offsetY: '-130px', size: '120%' },
        { id: '6', src: 'https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowieckie', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '21', src: 'https://media.graphassets.com/sQr7dglMRRG7I9FC5120', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-nowy-sacz', offsetX: '0px', offsetY: '-110px', size: '115%' },
        { id: '22', src: 'https://media.graphassets.com/haQeipTzTfyoYPasozX8', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-pojezierce', offsetX: '0px', offsetY: '-40px', size: '120%' },
        { id: '101', src: 'https://media.graphassets.com/i9A5NuhKTpacPtoTCFnz', title: 'Kort tenisowy Hotel Sokół Łańcut', alt: 'Kort tenisowy Hotel Sokół Łańcut', href: '/realizacje/lancut', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '102', src: 'https://media.graphassets.com/4g14dmRHSjSX00IE1JOT', title: 'Centrum Tenisowe AcePark Opole', alt: 'Centrum Tenisowe AcePark Opole', href: '/realizacje/opole', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '103', src: 'https://media.graphassets.com/TnXmtDuRMquQyW2uzB0w', title: 'Kort prywatny', alt: 'Kort prywatny', href: '/realizacje/prywatny-dolnoslaskie', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '104', src: 'https://media.graphassets.com/PkjAnUuMQkObWM1KcKcX', title: 'Kort prywatny', alt: 'Kort prywatny', href: '/realizacje/prywatny-dolnoslaskie-przedmosc', offsetX: '-10px', offsetY: '-70px', size: '115%' },
    ],
    'korty akrylowe': [
        { id: '28', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Akademia Tenisa Kozerki - Filia Grodzisk Mazowiecki', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '29', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Polskie Centrum Szkoleniowe PZT - Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
        { id: '34', src: 'https://media.graphassets.com/C2u5SekYTWq4l3iFcmDI', title: 'Szkoła Podstawowa nr: 72 - Wrocław', alt: 'Image 2', href: '/realizacje/szkola-podstawowa-nr72-wroclaw', offsetX: '0px', offsetY: '-130px', size: '120%' },
        { id: '35', src: 'https://media.graphassets.com/mTGgax3RxCRBbP6NdkOw', title: 'Hala w Szkole Podstawowej nr: 72 - Wrocław', alt: 'Image 2', href: '/realizacje/szkola-podstawowa-nr72-wroclaw-hala', offsetX: '-30px', offsetY: '-120px', size: '115%' },
        { id: '30', src: 'https://media.graphassets.com/89fKLvxRNeSHV8h5rQWQ', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-malopolska-us-open', offsetX: '-20px', offsetY: '-120px', size: '115%' },
        { id: '31', src: 'https://media.graphassets.com/MJFer4wtRaGOMmmAhNe3', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze', offsetX: '-50px', offsetY: '0px' },
        { id: '32', src: 'https://media.graphassets.com/IEFVsQwqTHO3niZGSIvF', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-warmia', offsetX: '0px', offsetY: '-70px' },
        { id: '33', src: 'https://media.graphassets.com/x7yovZqFS6m2vH1UbWuY', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowieckie', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '101', src: 'https://media.graphassets.com/i9A5NuhKTpacPtoTCFnz', title: 'Kort tenisowy Hotel Sokół Łańcut', alt: 'Kort tenisowy Hotel Sokół Łańcut', href: '/realizacje/lancut', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '102', src: 'https://media.graphassets.com/4g14dmRHSjSX00IE1JOT', title: 'Centrum Tenisowe AcePark Opole', alt: 'Centrum Tenisowe AcePark Opole', href: '/realizacje/opole', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '103', src: 'https://media.graphassets.com/TnXmtDuRMquQyW2uzB0w', title: 'Kort prywatny', alt: 'Kort prywatny', href: '/realizacje/prywatny-dolnoslaskie', offsetX: '-10px', offsetY: '-70px', size: '115%' },
        { id: '104', src: 'https://media.graphassets.com/PkjAnUuMQkObWM1KcKcX', title: 'Kort prywatny', alt: 'Kort prywatny', href: '/realizacje/prywatny-dolnoslaskie-przedmosc', offsetX: '-10px', offsetY: '-70px', size: '115%' },

    ],
    'korty ceglane': [
        { id: '36', src: 'https://media.graphassets.com/CeGywygMQFG5aAZWjSA9', title: 'Antuka Tenis Klub - Częstochowa', alt: 'Image 2', href: '/realizacje/antuka-tenis-klub-czestochowa', offsetX: '0px', offsetY: '-70px' },
        { id: '41', src: 'https://media.graphassets.com/AdBoETmRQu2S6x4pgNSA', title: 'OSiR Wawer - Warszawa', alt: 'Image 2', href: '/realizacje/osir-wawer-warszawa' },
        { id: '39', src: 'https://media.graphassets.com/ULNthdorSK15hIpsNOMA', title: 'Ośrodek wypoczynkowy - Świerkocin', alt: 'Image 2', href: '/realizacje/osrodek-wypoczynkowy-swierkocin', offsetX: '-60px', offsetY: '-120px', size: '115%' },
        { id: '40', src: 'https://media.graphassets.com/K6b6golKRMeJOZaG3MjG', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-pruszkow', offsetX: '0px', offsetY: '-70px' },
        { id: '37', src: 'https://media.graphassets.com/9qdgihK1SkGgUVtVlsRw', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-lodzkie', offsetX: '0px', offsetY: '-70px' },
        { id: '38', src: 'https://media.graphassets.com/gRsQr6SQy8CaJSZ0oKAV', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-myslenice', offsetY: '-30px', size: '115%' },
    ],
    'sztuczna trawa': [
        { id: '42', src: 'https://media.graphassets.com/87A71ICSdizs9OXV32Tg', title: 'OSiR Dębno - Dębno', alt: 'Image 2', href: '/realizacje/osir-debno', offsetX: '0px', offsetY: '-70px' },
        { id: '47', src: 'https://media.graphassets.com/0IlxCJGoQvSlovFzofhH', title: 'MentorSport - Toruń', alt: 'Image 2', href: '/realizacje/mentorsport-torun', offsetX: '0px', offsetY: '-70px' },
        { id: '50', src: 'https://media.graphassets.com/2gYQ1eFTXO5qniZgsTik', title: 'Centrum Kultury - Wola Gołkowska', alt: 'Image 2', href: '/realizacje/centrum-kultury-wola-golkowska', offsetX: '0px', offsetY: '-40px' },
        { id: '43', src: 'https://media.graphassets.com/1Vvwps9gTDaWbHp3TLpd', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-malopolska', offsetX: '-30px', offsetY: '-110px', size: '115%' },
        { id: '44', src: 'https://media.graphassets.com/HBJvx3IFT22tvWmrZts1', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze-sztuczna-trawa', offsetX: '-70px', offsetY: '-130px', size: '120%' },
        { id: '45', src: 'https://media.graphassets.com/wpifDb23TiWSSvqEjfgg', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazowsze-2023', offsetX: '0px', offsetY: '-20px' },
        { id: '46', src: 'https://media.graphassets.com/s2rsBfiAQhmPh2OLuvyk', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-mazury', offsetX: '-15px', offsetY: '-70px', size: '110%' },
        { id: '48', src: 'https://media.graphassets.com/sQr7dglMRRG7I9FC5120', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-nowy-sacz', offsetX: '0px', offsetY: '-110px', size: '115%' },
        { id: '49', src: 'https://media.graphassets.com/haQeipTzTfyoYPasozX8', title: 'Kort prywatny', alt: 'Image 2', href: '/realizacje/prywatny-pojezierce', offsetX: '0px', offsetY: '-40px', size: '120%' },
    ],
    'hale tenisowe': [
        { id: '53', src: 'https://media.graphassets.com/XGvyv53ORjqnVccqdm27', title: 'Akademia Tenisa Kozerki - Filia Grodzisk Mazowiecki', alt: 'Image 2', href: '/hale-tenisowe-grodzisk' },
        { id: '54', src: 'https://media.graphassets.com/MfKX9WXrQq257vDpGApk', title: 'Polskie Centrum Szkoleniowe PZT - Kozerki', alt: 'Image 2', href: '/akademia-tenisa-kozerki' },
        { id: '52', src: 'https://media.graphassets.com/5zdtLaRRAiYinj5jzoaA', title: 'Gnieźnieński Klub Tenisowy - Gniezno', alt: 'Image 2', href: '/realizacje/hala-tenisowa-gniezno' },
        { id: '51', src: 'https://media.graphassets.com/DtM9zRUuTHaZVFa2vwAk', title: 'Klub Sportowy Czarni - Rzeszów', alt: 'Image 2', href: '/realizacje/klub-sportowy-czarni-rzeszow' },
    ],
};

function getImagesForCategory(category) {
    return imagesData[category] || [];
}

const Portfolio = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div className={styles.portfolio}>
            <div className="grid grid-cols-1 md:grid-cols-5 mb-[20px] mx-[20px] md:mx-[40px] lg:mx-[100px] border-green border-[1px] rounded-2xl">
                {categories.map((category, index) => {
                    const isFirst = index === 0;
                    const isLast = index === categories.length - 1;
                    const borderRadiusClass = isFirst ? 'rounded-t-xl md:rounded-l-xl md:rounded-tr-none' : isLast ? 'rounded-b-xl md:rounded-r-xl md:rounded-bl-none' : '';

                    return (
                        <button
                            key={category}
                            className={classNames(styles.category, borderRadiusClass, selectedCategory === category ? 'bg-green' : 'p-[10px]', !isLast && 'border-b-[1px] md:border-r-[1px] md:border-b-0 border-green')}
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

    const isMinMd = useMediaQuery({ minDeviceWidth: 1240 });


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
        <div className="grid grid-cols-1 gap-2 pt-[30px] px-[20px] md:px-[20px] md:grid-cols-2 lg:grid-cols-3">
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
                            backgroundPositionX: isMinMd ? image.offsetX || 'center' : 'center',
                            backgroundPositionY: isMinMd ? image.offsetY || 'center' : 'center',
                            backgroundSize: isMinMd ? image.size || 'cover' : 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div className='absolute w-full h-[50px] backdrop-brightness-75 bottom-0 rounded-b-2xl flex justify-center items-center text-white font-semibold p-[10px] text-center text-[12px]'>
                        {image.title}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Portfolio;