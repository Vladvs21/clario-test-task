import React, { useEffect, useRef, useState } from 'react'

import { MainCon } from './Main'

import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { facts, firstScreenIcons, firstScreenList, reviews, secondListElements, sources, steps, whatYouGet } from '../../data'

import clock from '../../assets/clock.png'
import mocup from '../../assets/mocup.png'
import arr_l from '../../assets/arr_l.png'
import arr_r from '../../assets/arr_r.png'

import price from '../../assets/price.png'

import video from '../../assets/Radar_2x.mp4'

const Main = () => {

    const [isSticky, setIsSticky] = useState(false);

    const scrollRef = useRef(null);
    const firstBtnRef = useRef(null)

    useEffect(() => {
        document.body.addEventListener("scroll", listenToScroll)
        
        return () => document.body.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        const val = firstBtnRef.current?.getBoundingClientRect()?.top

        if (val > -48) {
            setIsSticky(false);
        } else {
            !isSticky && setIsSticky(true);
        }
    };

    const scrollToPrice = () => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth', });
    };

    return (
        <MainCon>
            <Header scrollToPrice={scrollToPrice} isSticky={isSticky} />

            <div className="firstScreen">
                <div>
                    <div className="firstScreen__title">
                        Stop your 
                        <span className="firstScreen__title__highlight"> phone from being spied on</span>
                    </div>

                    <div className="firstScreen__subtitle">
                        Try Clario, a smart anti-spy app that effectively protects your privacy. 
                    </div>
                </div>

                <button className="btn" onClick={scrollToPrice} ref={firstBtnRef}>Protect me now</button>

                <div className="firstScreen__icons">
                    {
                        firstScreenIcons.map(el => 
                            <div className='firstScreen__icons__item' key={el.text.replaceAll(' ', '')}>
                                <img src={el.img} alt={el.text} />
                                {el.text}
                            </div>    
                        )
                    }
                </div>

                <video className='firstScreen__highlightBlock' autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="firstScreen__list">
                    <div className="firstScreen__list__title">The anti-spy Clario app can:</div>
                    
                    <ul className="firstScreen__list__content">
                        {
                            firstScreenList.map(el => 
                                <li key={el.replaceAll(' ', '')} className='firstScreen__list__content__item'>{el}</li>    
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className="secondScreen">
                <div className="secondScreen__title">Clario helps you easily avoid spying.</div>

                {
                    secondListElements.map((el, index) => 
                        <div key={el.title.replaceAll(' ', '')} className="secondScreen__element">
                            <div className={`secondScreen__element__highlightBlock block_${index+1}`} style={{background: el.color}}>
                                <img src={el.img} alt={el.title.replaceAll(' ', '')} />
                            </div>

                            <div>
                                <div className="secondScreen__element__title">{el.title}</div>

                                <div className="secondScreen__element__subtitle">{el.subtitle}</div>
                            </div>
                            
                            {
                                el.list.map(e => 
                                    <div key={e.text.replaceAll(' ', '')} className='secondScreen__element__list__items'>
                                        <img src={e.icon} alt={e.text.replaceAll(' ', '')} />
                                        {e.text}
                                    </div>    
                                )
                            }
                        </div>  
                    )
                }
            </div>

            <div className="thirdScreen">
                <div className="thirdScreen__title">Not sure that the app can solve your problem?</div>

                <div className="thirdScreen__subtitle">You'll have Clario experts ready to jump in and help you, 24/7, just when you need them.</div>

                <div className="thirdScreen__respTime">
                    <img src={clock} alt="clock" />
                    <span>Response time: </span>
                    2 mins
                </div>

                <img src={mocup} alt="mocup" className='thirdScreen__img' />

                <button className="btn" onClick={scrollToPrice}>Protect me now</button>
            </div>

            <div className="fourthScreen">
                <div className="fourthScreen__title">
                    All you need to do is 
                    <span className="fourthScreen__title__highlight"> 3 easy steps</span>
                    .
                </div>

                <ul className='fourthScreen__steps' uk-accordion=''>
                    {
                        steps.map((el, index) => 
                            <li key={el.title.replaceAll(' ', '')} className='fourthScreen__steps__step'>
                                <a className="uk-accordion-title fourthScreen__steps__step__title" href="#">
                                    <div className="fourthScreen__steps__step__title__number">{index + 1}</div>
                                    {el.title}
                                </a>
                                <div className="uk-accordion-content fourthScreen__steps__step__text">
                                    <p>{el.text}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="fifthScreen">
                <div className="fifthScreen__offset" ref={scrollRef} />

                <div className="fifthScreen__main" />

                <div className="fifthScreen__title">Start your spy-free week for as low as</div>

                <div className="fifthScreen__block">
                    <div>
                        <div className="fifthScreen__block__specialOffer">
                            <div>Special offer valid for</div>
                            <div>
                                <span className='fifthScreen__block__specialOffer__highlight'>30:00</span> min
                            </div>
                        </div>

                        <div className="fifthScreen__block__price">
                            <img src={price} alt="price" />
                        </div>
                    </div>

                    <div className="fifthScreen__block__list">
                        <div className="fifthScreen__block__list__title">What you get:</div>

                        <div className="fifthScreen__block__list__content">
                            {
                                whatYouGet.map(el => 
                                    <div key={el.text.replaceAll(' ', '')}>
                                        <img src={el.icon} alt={el.text} />
                                        {el.text}
                                    </div>    
                                )
                            }
                        </div>
                    </div>

                    <button className="btn">Try for $2.99</button>

                    <div className="fifthScreen__block__rights">By clicking above, you agree to try 7 days of Clario for $2.99 as a special offer. Your subscription will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario account.</div>

                    {
                        facts.map(el => 
                            <div key={el.text.replaceAll(' ', '')} className='fifthScreen__block__iconText'>
                                <img src={el.icon} alt={el.text} />
                                {el.text}
                            </div>    
                        )
                    }
                </div>
            </div>

            <div className="sixthScreen">
                <div className="sixthScreen__title">Protect all your devices. </div>

                <div className="sixthScreen__subtitle">Are you working from a Windows laptop and browsing from your home Mac? Use Clario to enjoy total privacy on every platform and device. </div>
            
                <div className="sixthScreen__icons">
                    {
                        firstScreenIcons.map(el => 
                            <div className='sixthScreen__icons__item' key={el.text.replaceAll(' ', '')}>
                                <img src={el.img} alt={el.text} />
                                {el.text}
                            </div>    
                        )
                    }
                </div>
            </div>

            <div className="seventhScreen">
                <div className="seventhScreen__title">Let’s hear what real Clario users say.</div>

                <div className="uk-position-relative uk-visible-toggle uk-light seventhScreen__carousel__container" tabIndex="-1" uk-slider="center: true">

                    <ul className="uk-slider-items uk-grid uk-grid-match seventhScreen__carousel" uk-height-viewport="offset-top: true; offset-bottom: 30">

                        {
                            reviews.map(el => {
                                const {icon, bgColor, textColor} = sources.find(e => e.name === el.source)
                                return (
                                    <li key={el.username} className="uk-width-3-4 seventhScreen__carousel__item" style={{background: bgColor}}>
                                        <div className="uk-cover-container">
                                            <div>
                                                <img src={icon} alt={el.source} className="seventhScreen__carousel__item__source" />

                                                <div className="seventhScreen__carousel__item__content" style={{color: textColor}}>{el.content}</div>
                                            </div>

                                            <div className="seventhScreen__carousel__item__username" style={{color: textColor}}>{el.username}</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <a className="uk-position-center-left uk-position-small seventhScreen__carousel__btn prev" href="#" uk-slider-item="previous">
                        <img src={arr_l} alt="arr_l" />
                    </a>
                    <a className="uk-position-center-right uk-position-small seventhScreen__carousel__btn next" href="#" uk-slider-item="next">
                        <img src={arr_r} alt="arr_r" />
                    </a>

                </div>
            </div>

            <div className="eighthScreen">
                <div className="eighthScreen__title">
                    Stop your
                    <span className="eighthScreen__title__highlight"> phone from being spied on.</span>
                </div>

                <button className="btn" onClick={scrollToPrice}>Protect me now</button>
            </div>

            <Footer />
        </MainCon>
    )
}

export default Main