import styled from "styled-components";

import { COLOR } from '../../values/colors'

import list_marker from '../../assets/list_marker.png'
import fifthScreen_main from '../../assets/fifthScreen_main.png'

export const MainCon = styled.div`

    .firstScreen {
        background: ${COLOR.color_firstScreen_bg};
        padding: 50px 24px 40px;
        display: flex;
        flex-direction: column;
        gap: 35px;

        .firstScreen__title {
            font-size: 36px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.4355555474758148px;
            text-align: center;

            .firstScreen__title__highlight {
                font-size: 36px;
                font-weight: 700;
                line-height: 36px;
                letter-spacing: -0.4355555474758148px;
                text-align: center;
                color: ${COLOR.color_highlight};
            }
        }
        
        .firstScreen__subtitle {
            letter-spacing: -0.24888889491558075px;
            text-align: center;
            opacity: .7;
            margin: 10px 0 0;
        }

        .btn {
            width: 100%;
        }

        .firstScreen__icons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 8px;

            .firstScreen__icons__item {
                display: flex;
                align-items: center;
                
                font-size: 12px;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: 0px;
                text-align: left;
                
                img {
                    margin-right: 4px;
                }
            }
        }

        .firstScreen__highlightBlock {
            border-radius: 14px;
        }
        
        .firstScreen__list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;

            .firstScreen__list__title {
                font-weight: 700;
                letter-spacing: -0.24888889491558075px;
                text-align: center;
            }

            .firstScreen__list__content {
                list-style: none;
                margin: 0;
                padding: 0;
                
                .firstScreen__list__content__item {
                    display: flex;
                    align-items: center;

                    margin: 10px 0;

                    font-size: 14px;
                    line-height: 18px;
                    letter-spacing: 0px;
                    text-align: left;

                    &::before {
                        content: url(${list_marker});
                        margin-right: 8px;
                        height: 18px;
                    }
                } 
            }
        }
    }
    
    .secondScreen {
        padding: 20px 24px 0;

        .secondScreen__title {
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;

            margin-bottom: 30px;
        }

        .secondScreen__element {
            margin-bottom: 43px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .secondScreen__element__highlightBlock {
                position: relative;
                width: 100%;
                border-radius: 14px;
                padding: 48px 0 16px;
                display: flex;
                justify-content: center;

                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 16px;
                    height: 46px;
                }

                &.block_1::after,
                &.block_5::after {
                    background: linear-gradient(180deg, rgba(239, 241, 255, 0) 0%, rgba(239, 241, 255, 0.9) 82.13%, #EFF1FF 100%);
                }
                &.block_2::after {
                    background: linear-gradient(180deg, rgba(246, 237, 250, 0) 0%, rgba(246, 237, 250, 0.9) 82.13%, #F6EDFA 100%);
                }
                &.block_3::after {
                    background: linear-gradient(180deg, rgba(230, 242, 254, 0) 0%, rgba(230, 242, 254, 0.9) 82.13%, #E6F2FE 100%);
                }
                &.block_4::after {
                    background: linear-gradient(180deg, rgba(234, 245, 228, 0) 0%, rgba(234, 245, 228, 0.9) 82.13%, #EAF5E4 100%);
                }
            }

            .secondScreen__element__title {
                font-size: 18px;
                font-weight: 700;
                line-height: 22px;
                letter-spacing: -0.4170212745666504px;
                text-align: center;
            }
            
            .secondScreen__element__subtitle {
                letter-spacing: -0.24888889491558075px;
                text-align: center;
                margin-top: 2px;
            }
            
            .secondScreen__element__list__items {
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: 0px;
                text-align: left;

                display: flex;
                align-items: center;
                gap: 8px;

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
    
    .thirdScreen {
        padding: 33px 32px 50px;
        background: linear-gradient(180deg, #FFFFFF 29.01%, #F4F9FF 80.52%);
        display: flex;
        flex-direction: column;
        align-items: center;

        .thirdScreen__title {
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;
        }

        .thirdScreen__subtitle {
            letter-spacing: -0.24888889491558075px;
            text-align: center;
            margin: 10px 0 24px;
        }

        .thirdScreen__img {
            margin: 10px 0 40px;
        }

        .thirdScreen__respTime {
            width: fit-content;
            background: #E1EFFF73;
            padding: 15px 17px;
            border-radius: 16px;
            box-shadow: 0px 3px 17px 0px #6094E336;
            display: flex;
            align-items: center;
            gap: 3px;
            
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: -0.24888889491558075px;
            text-align: left;

            img {}

            span {
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: -0.24888889491558075px;
                text-align: left;
            }
        }
    }
    
    .fourthScreen {
        padding: 30px 40px 5px;

        .fourthScreen__title {
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;

            .fourthScreen__title__highlight {
                font-size: 26px;
                font-weight: 700;
                line-height: 30px;
                letter-spacing: -0.4399999976158142px;
                color: ${COLOR.color_highlight_green};
                margin-bottom: 30px;
            }
        }

        .fourthScreen__steps{}
    }
    
    .fifthScreen {
        background: ${COLOR.color_highlight};
        position: relative;
        overflow: hidden;
        padding: 170px 24px 38px;

        .fifthScreen__offset {
            position: absolute;
            top: -56px;
            opacity: 0;
            width: 0;
            height: 0;
            overflow: hidden;
        }

        .fifthScreen__main {
            position: absolute;
            width: 520px;
            height: 520px;
            border-radius: 357px;
            top: -370px;
            left: 50%;
            transform: translateX(-50%);
            background: url(${fifthScreen_main}), #4D56E5;
            background-repeat: no-repeat;
            background-position: bottom;
        }

        .fifthScreen__title {
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;
            color: ${COLOR.color_bg};
            margin-bottom: 19px;
        }

        .fifthScreen__block {
            width: 100%;
            border-radius: 16px;
            background: ${COLOR.color_bg};
            padding: 24px 24px 30px;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .fifthScreen__block__specialOffer {
                display: flex;
                justify-content: space-between;
                
                background: #FFF2EB;
                padding: 3px 12px;
                border-radius: 4px;
                
                & > div {
                    font-size: 11px;
                    line-height: 18px;
                    letter-spacing: 0px;
                    color: #DF723A;

                    .fifthScreen__block__specialOffer__highlight {
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 18px;
                        letter-spacing: 0px;
                        color: #DF723A;
                    }
                }
            }
            
            .fifthScreen__block__price {
                margin-top: 10px;
                background: #F2F8FF;
                border-radius: 16px;
                padding: 10px 30px 20px 40px;
            }
            
            .fifthScreen__block__list {
                padding: 0 24px;

                .fifthScreen__block__list__title {
                    font-weight: 700;
                    line-height: 34px;
                    letter-spacing: -0.4355555474758148px;
                    text-align: center;
                    margin-bottom: 3px;
                }
                
                .fifthScreen__block__list__content {
                    
                    div {
                        display: flex;
                        align-items: flex-start;
                        gap: 8px;
                        
                        font-size: 14px;
                        line-height: 18px;
                        letter-spacing: 0px;

                        margin-bottom: 18px;

                        img {
                            width: auto;
                            height: 20px;
                        }
                    }
                }
            }

            .fifthScreen__block__rights {

                font-size: 9px;
                line-height: 12px;
                letter-spacing: 0px;
                text-align: center;

                opacity: .5;
            }

            .fifthScreen__block__iconText {
                font-size: 10px;
                line-height: 14px;
                letter-spacing: 0px;
                text-align: left;

                display: flex;
                align-items: center;
                gap: 8px;

                img {
                }
            }
        }
    }
    
    .sixthScreen {
        background: ${COLOR.color_firstScreen_bg};
        padding: 25px 32px;

        .sixthScreen__title {
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;
        }
        
        .sixthScreen__subtitle {
            letter-spacing: -0.24888889491558075px;
            text-align: center;
            margin: 10px 0 20px;
        }

        .sixthScreen__icons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 8px;

            .sixthScreen__icons__item {
                display: flex;
                align-items: center;
                
                font-size: 12px;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: 0px;
                text-align: left;

                img {
                    margin-right: 4px;
                }
            }
        }
    }
    
    .seventhScreen {
        padding: 40px 0 60px;

        .seventhScreen__title {
            padding: 0 32px;
            
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: -0.4399999976158142px;
            text-align: center;
        }

        .seventhScreen__carousel {
            .seventhScreen__carousel__item {
                padding: 40px 24px;
                border-radius: 20px;
                width: calc(100vw - 48px);
                display: flex;
                flex-direction: column;
                align-items: space-between;
                gap: 30px;

                background: ${COLOR.color_block_4};

                .seventhScreen__carousel__item__source {}

                .seventhScreen__carousel__item__content {
                    font-weight: 700;
                    line-height: 23px;
                    letter-spacing: -0.24888889491558075px;
                    text-align: left;
                    color: ${COLOR.color_carousel_text};
                }
                
                .seventhScreen__carousel__item__username {
                    line-height: 23px;
                    letter-spacing: -0.24888889491558075px;
                    text-align: left;
                    color: ${COLOR.color_carousel_text};
                }
            }
        }
    }
    
    .eighthScreen {
        padding: 70px 24px 80px;

        .eighthScreen__title {
            font-size: 36px;
            font-weight: 700;
            line-height: 36px;
            letter-spacing: -0.4355555474758148px;
            text-align: center;
            margin-bottom: 40px;

            .eighthScreen__title__highlight {
                font-size: 36px;
                font-weight: 700;
                line-height: 36px;
                letter-spacing: -0.4355555474758148px;
                color: ${COLOR.color_highlight};
            }
        }

        .btn {
            width: 100%;
        }
    }
`