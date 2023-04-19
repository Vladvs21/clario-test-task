import phone from '../assets/phone.png'
import computer from '../assets/computer.png'

import block_1 from '../assets/block_1.png'
import block_1_icon_1 from '../assets/block_1_icon_1.png'
import block_1_icon_2 from '../assets/block_1_icon_2.png'
import block_1_icon_3 from '../assets/block_1_icon_3.png'

import block_2 from '../assets/block_2.png'
import block_2_icon_1 from '../assets/block_2_icon_1.png'
import block_2_icon_2 from '../assets/block_2_icon_2.png'
import block_2_icon_3 from '../assets/block_2_icon_3.png'

import block_3 from '../assets/block_3.png'
import block_3_icon_1 from '../assets/block_3_icon_1.png'
import block_3_icon_2 from '../assets/block_3_icon_2.png'
import block_3_icon_3 from '../assets/block_3_icon_3.png'

import block_4 from '../assets/block_4.png'
import block_4_icon_1 from '../assets/block_4_icon_1.png'
import block_4_icon_2 from '../assets/block_4_icon_2.png'
import block_4_icon_3 from '../assets/block_4_icon_3.png'

import block_5 from '../assets/block_5.png'
import block_5_icon_1 from '../assets/block_5_icon_1.png'
import block_5_icon_2 from '../assets/block_5_icon_2.png'
import block_5_icon_3 from '../assets/block_5_icon_3.png'

import trustpilot from '../assets/trustpilot.png'
import google_play from '../assets/google_play.png'
import app_store from '../assets/app_store.png'

import fifthScreen_icon_1 from '../assets/fifthScreen_icon_1.png'
import fifthScreen_icon_2 from '../assets/fifthScreen_icon_2.png'
import fifthScreen_icon_3 from '../assets/fifthScreen_icon_3.png'
import fifthScreen_icon_4 from '../assets/fifthScreen_icon_4.png'
import fifthScreen_icon_5 from '../assets/fifthScreen_icon_5.png'
import fifthScreen_icon_6 from '../assets/fifthScreen_icon_6.png'

import { COLOR } from '../values/colors'


export const firstScreenIcons = [
    {
        img: phone,
        text: 'iOS'
    },
    {
        img: computer,
        text: 'macOS, Windows'
    }
]

export const firstScreenList = [
    'reveal hidden spying apps',
    'stop silent location tracking',
    'avoid social media hacks',
    'provide 24/7 expert security help'
]

export const secondListElements = [
    {
        img: block_1,
        color: COLOR.color_block_1,
        title: 'Spyware detector',
        subtitle: 'Find apps secretly spying on you and your data. ',
        list: [
            {
                icon: block_1_icon_1,
                text: 'Full background anti-spyware scan',
            },
            {
                icon: block_1_icon_2,
                text: 'Instant spyware detection alerts',
            },
            {
                icon: block_1_icon_3,
                text: 'Immediate threat quarantining',
            }
        ]
    },
    {
        img: block_2,
        color: COLOR.color_block_2,
        title: 'Tracker detector',
        subtitle: 'Discover who tracks your location to spy on you.',
        list: [
            {
                icon: block_2_icon_1,
                text: 'Stop being secretly tracked',
            },
            {
                icon: block_2_icon_2,
                text: 'Protect your real location',
            },
            {
                icon: block_2_icon_3,
                text: 'Control who sees your location',
            }
        ]
    },
    {
        img: block_3,
        color: COLOR.color_block_3,
        title: 'Social media protection',
        subtitle: 'Easily prevent social media account hacks.',
        list: [
            {
                icon: block_3_icon_1,
                text: 'See who uses your accounts',
            },
            {
                icon: block_3_icon_2,
                text: 'Revoke access for other users',
            },
            {
                icon: block_3_icon_3,
                text: 'Get unauthorized login alerts',
            }
        ]
    },
    {
        img: block_4,
        color: COLOR.color_block_4,
        title: 'Call recorder blocker',
        subtitle: 'Discover if someone records your calls and chats. ',
        list: [
            {
                icon: block_4_icon_1,
                text: 'Hide your call history and records',
            },
            {
                icon: block_4_icon_2,
                text: 'Revoke sharing your contact list',
            },
            {
                icon: block_4_icon_3,
                text: 'Help secret texts remain secret',
            }
        ]
    },
    {
        img: block_5,
        color: COLOR.color_block_5,
        title: 'Screen recording detector',
        subtitle: 'Don’t let anyone access your phone screen.',
        list: [
            {
                icon: block_5_icon_1,
                text: 'Find out if your screen is being recorded',
            },
            {
                icon: block_5_icon_2,
                text: 'Immediately stop silent recordings',
            },
            {
                icon: block_5_icon_3,
                text: 'Get alerts if your camera is in use',
            }
        ]
    }
]

const trustpilot_name = 'Trustpilot'
const google_play_name = 'Google Play'
const app_store_name = 'App Store'

export const sources = [
    {
        name: trustpilot_name,
        icon: trustpilot,
        bgColor: '#EFF1FF',
        textColor: '#3D317C'
    },
    {
        name: google_play_name,
        icon: google_play,
        bgColor: '#EAF5E4',
        textColor: '#305938'
    },
    {
        name: app_store_name,
        icon: app_store,
        bgColor: '#E6F2FE',
        textColor: '#1D367C'
    }
]

export const reviews = [
    {
        source: trustpilot_name,
        content: 'It is a great application to protect yourself from hackers.',
        username: 'Manweet'
    },
    {
        source: trustpilot_name,
        content: 'Great service! They were an amazing help with making sure my device is secure.',
        username: 'Megan_N'
    },
    {
        source: google_play_name,
        content: 'The best app you could find! I had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.',
        username: 'Shahu Sardar'
    },
    {
        source: app_store_name,
        content: 'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
        username: 'Zagkri'
    }
]

export const whatYouGet = [
    {
        icon: fifthScreen_icon_1,
        text: 'Protection for 3 devices'
    },
    {
        icon: fifthScreen_icon_2,
        text: 'Anti-spy checkup'
    },
    {
        icon: fifthScreen_icon_3,
        text: 'Unlimited access to anti-spying tools'
    },
    {
        icon: fifthScreen_icon_4,
        text: '24/7 help from security experts'
    }
]

export const facts = [
    {
        icon: fifthScreen_icon_5,
        text: '30-day money-back guarantee'
    },
    {
        icon: fifthScreen_icon_6,
        text: '100.000 + downloads'
    }
]

export const steps = [
    {
        title: 'Install Clario',
        text: 'Relax and let Clario do the job.'
    },
    {
        title: 'Set up your protection',
        text: 'Relax and let Clario do the job.'
    },
    {
        title: 'Enjoy spy-free life',
        text: 'Relax and let Clario do the job.'
    }
]