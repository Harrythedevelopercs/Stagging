import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/DubaiBrandTrust.module.css"


// Images
import BrandOne from "media/newdubai/single-brands.png"
import BrandTwo from "media/newdubai/single-brands1.png"
// import BrandTwo from "media/newdubai/trust-2.png"
import BrandThree from "media/newdubai/trust-3.png"
import BrandFour from "media/newdubai/trust-4.png"
import BrandFive from "media/newdubai/trust-5.png"
import BrandSix from "media/newdubai/trust-6.png"
import Slider from 'react-slick'

const DubaiBrandTrust = () => {
    var brandSlider = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 6,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: true
    };


    return (
        <>
            <section className={styles.brandTrustSec}>
                <div className={`${styles.overFlow} container`}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>World-Renowned</p>
                                <h2>Brands Trust Us</h2>
                            </div>
                            {/* <div className='d-md-block d-none'>
                                <div className={styles.brands}>
                                    <Image src={BrandOne} alt='Bitswits' width={80} height={65} />
                                    <Image src={BrandTwo} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandThree} alt='Bitswits' width={70} height={70} />
                                    <Image src={BrandFour} alt='Bitswits' width={80} height={70} />
                                    <Image src={BrandFive} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandSix} alt='Bitswits' width={150} height={90} />
                                </div>
                            </div> */}
                            <div className={styles.brands}>
                                <div>
                                    <Image src={BrandOne} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandOne} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' loading='lazy' sizes="100vw" className='w-100 h-auto' />
                                </div>
                                {/* <Slider {...brandSlider} className='mt-4'>
                                    <div className='px-4'>
                                        <Image src={BrandOne} alt='Bitswits' width={80} height={65} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandTwo} alt='Bitswits' width={200} height={80} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandThree} alt='Bitswits' width={70} height={70} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandFour} alt='Bitswits' width={80} height={70} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandFive} alt='Bitswits' width={200} height={80} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandSix} alt='Bitswits' width={150} height={90} />
                                    </div>
                                </Slider> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiBrandTrust
