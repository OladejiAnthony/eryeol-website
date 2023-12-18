/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Links () {
    const variants = {
        open : {
            transition: {
                staggerChildren: 0.1
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }
    const itemVariants = {
        open : {
            y: 0,
            opacity: 1
        },
        closed: {
            y: 50,
            opacity: 0
        }
    }

    const items = ["About Us", "Our Services", "Projects", "Contact Us" ]

    return (
        <div className="bg-link" variants={variants}>
            <motion.div 
                className='links'
                variants={variants}
            >
            {items.map((item) => (
                <motion.div 
                    variants={itemVariants} 
                    whileHover={{scale: 1.1}}   
                    whileTap={{scale: 0.9}}
                >
                    <Link
                        to={`${item}`} 
                        key={item}   
                        //relative="/about"  
                    >
                        {item}
                    </Link>
                </motion.div>
                
            ))}
            </motion.div>
            <div className="textContainer">
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p>hello@eryeol.com</p>
            </div>
            <div className="socials">
                <a href="#">Follow us</a>
                <div>
                    <motion.a 
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6.49101 4.50288C6.94135 4.49452 7.39104 4.54069 7.83029 4.64039C8.20011 4.72113 8.55123 4.87138 8.86499 5.08314C9.15477 5.29372 9.38405 5.57683 9.52981 5.90403C9.69734 6.30639 9.77816 6.73954 9.76701 7.17524C9.78603 7.65364 9.66385 8.12707 9.41569 8.53651C9.15462 8.92322 8.79375 9.23206 8.37136 9.43028C8.94457 9.58481 9.44384 9.93879 9.77938 10.4285C10.1015 10.9475 10.2634 11.5499 10.2448 12.1604C10.2555 12.6471 10.1548 13.1299 9.95057 13.5718C9.76179 13.9574 9.48536 14.2934 9.14343 14.5529C8.7914 14.8096 8.39525 14.9995 7.97466 15.1132C7.53851 15.2339 7.08793 15.2945 6.63539 15.2934H1.66675V4.50288H6.49101ZM6.20432 8.86721C6.55816 8.88179 6.90647 8.77587 7.19228 8.56676C7.32915 8.44491 7.43563 8.29273 7.5032 8.12238C7.57077 7.95203 7.59755 7.76823 7.58141 7.58568C7.59057 7.37248 7.54811 7.16021 7.45766 6.96692C7.38092 6.81303 7.26161 6.68441 7.1139 6.59636C6.96429 6.49943 6.79621 6.43458 6.62027 6.40592C6.42937 6.36894 6.23511 6.35211 6.04069 6.35573H3.91766V8.87683H6.20432V8.86721ZM6.32807 13.4612C6.54206 13.4641 6.7556 13.441 6.96402 13.3924C7.15449 13.3503 7.33512 13.2722 7.49616 13.1621C7.65391 13.0521 7.78137 12.9041 7.86672 12.7317C7.9657 12.5119 8.01117 12.2719 7.99941 12.0311C8.02087 11.8118 7.99182 11.5904 7.91447 11.384C7.83713 11.1776 7.71356 10.9916 7.55322 10.8404C7.21338 10.5901 6.79692 10.4661 6.37551 10.4897H3.91766V13.4612H6.32807Z" fill="#4A4752"/>
                            <path d="M13.4507 13.4213C13.6273 13.585 13.8355 13.7112 14.0624 13.792C14.2893 13.8729 14.5303 13.9067 14.7707 13.8916C15.1518 13.9012 15.5255 13.7852 15.8343 13.5615C16.0854 13.3982 16.2756 13.1566 16.3753 12.874H18.1704C17.9792 13.6783 17.5121 14.3901 16.8504 14.8857C16.2156 15.307 15.4655 15.5204 14.704 15.4962C14.1605 15.5033 13.6211 15.4012 13.1179 15.1958C12.6627 15.0059 12.2544 14.719 11.9216 14.3549C11.5901 13.9735 11.3354 13.5316 11.1716 13.0535C10.9877 12.5191 10.8976 11.9569 10.9055 11.3918C10.9022 10.8361 10.9952 10.2841 11.1805 9.7603C11.4295 9.02337 11.9055 8.38424 12.5402 7.93464C13.175 7.48504 13.9358 7.24808 14.7136 7.25776C15.2879 7.24576 15.8557 7.38014 16.3637 7.64826C16.8228 7.90003 17.2189 8.25263 17.5221 8.67953C17.8323 9.12748 18.0546 9.63024 18.1773 10.1611C18.3118 10.7312 18.3598 11.3182 18.3196 11.9026H12.9729C12.9295 12.4516 13.1008 12.996 13.4507 13.4213ZM15.7965 9.31754C15.6468 9.16789 15.4669 9.05203 15.2687 8.97779C15.0705 8.90355 14.8588 8.87265 14.6476 8.88716C14.3675 8.87648 14.0895 8.93854 13.8405 9.06729C13.6431 9.17595 13.4689 9.32215 13.3276 9.49767C13.2024 9.66223 13.1091 9.84878 13.0526 10.0477C13.0017 10.2136 12.9698 10.3847 12.9577 10.5578H16.2695C16.2406 10.1066 16.0762 9.67453 15.7978 9.31823L15.7965 9.31754Z" fill="#4A4752"/>
                            <path d="M16.6806 5.22339H12.5308V6.28422H16.6806V5.22339Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                    <motion.a 
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.3334 10.0505C18.3334 5.41999 14.6029 1.66666 10.0001 1.66666C5.3973 1.66666 1.66675 5.41999 1.66675 10.0505C1.66675 14.2361 4.71341 17.7044 8.69786 18.3333V12.4744H6.5823V10.05H8.69786V8.20332C8.69786 6.10221 9.94175 4.9411 11.8456 4.9411C12.7567 4.9411 13.7112 5.10499 13.7112 5.10499V7.16832H12.6595C11.6245 7.16832 11.3023 7.81499 11.3023 8.47832V10.0505H13.6134L13.244 12.4739H11.3023V18.3333C15.2867 17.7044 18.3334 14.2361 18.3334 10.0505Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C7.963 2.5 7.708 2.5085 6.908 2.545C6.1095 2.5815 5.564 2.7085 5.087 2.894C4.587 3.082 4.1335 3.377 3.7585 3.759C3.37711 4.13357 3.08193 4.58675 2.8935 5.087C2.709 5.564 2.5815 6.11 2.545 6.9085C2.509 7.708 2.5 7.9625 2.5 10C2.5 12.0375 2.5085 12.292 2.545 13.092C2.5815 13.8905 2.7085 14.436 2.894 14.913C3.082 15.413 3.377 15.8665 3.759 16.2415C4.13358 16.6229 4.58675 16.9181 5.087 17.1065C5.564 17.2915 6.1095 17.4185 6.908 17.455C7.708 17.4915 7.963 17.5 10 17.5C12.037 17.5 12.292 17.4915 13.092 17.455C13.8905 17.4185 14.436 17.2915 14.913 17.106C15.413 16.918 15.8665 16.623 16.2415 16.241C16.6229 15.8664 16.9181 15.4133 17.1065 14.913C17.2915 14.436 17.4185 13.8905 17.455 13.092C17.4915 12.292 17.5 12.037 17.5 10C17.5 7.963 17.4915 7.708 17.455 6.908C17.4185 6.1095 17.2915 5.564 17.106 5.087C16.9177 4.58653 16.6225 4.13316 16.241 3.7585C15.8664 3.37711 15.4133 3.08193 14.913 2.8935C14.436 2.709 13.89 2.5815 13.0915 2.545C12.292 2.509 12.0375 2.5 10 2.5ZM10 3.8515C12.0025 3.8515 12.24 3.859 13.031 3.895C13.762 3.9285 14.159 4.05 14.4235 4.1535C14.7735 4.289 15.0235 4.452 15.286 4.714C15.5485 4.9765 15.711 5.2265 15.8465 5.5765C15.9495 5.841 16.0715 6.238 16.105 6.969C16.141 7.76 16.1485 7.9975 16.1485 10C16.1485 12.0025 16.141 12.24 16.105 13.031C16.0715 13.762 15.95 14.159 15.8465 14.4235C15.7265 14.7493 15.5349 15.044 15.286 15.286C15.044 15.535 14.7493 15.7265 14.4235 15.8465C14.159 15.9495 13.762 16.0715 13.031 16.105C12.24 16.141 12.003 16.1485 10 16.1485C7.997 16.1485 7.76 16.141 6.969 16.105C6.238 16.0715 5.841 15.95 5.5765 15.8465C5.25073 15.7265 4.956 15.5349 4.714 15.286C4.46509 15.044 4.27356 14.7493 4.1535 14.4235C4.0505 14.159 3.9285 13.762 3.895 13.031C3.859 12.24 3.8515 12.0025 3.8515 10C3.8515 7.9975 3.859 7.76 3.895 6.969C3.9285 6.238 4.05 5.841 4.1535 5.5765C4.289 5.2265 4.452 4.9765 4.714 4.714C4.95597 4.46502 5.2507 4.27349 5.5765 4.1535C5.841 4.0505 6.238 3.9285 6.969 3.895C7.76 3.859 7.9975 3.8515 10 3.8515Z" fill="#4A4752"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12.5025C9.67139 12.5025 9.34597 12.4378 9.04235 12.312C8.73874 12.1863 8.46286 12.0019 8.23048 11.7695C7.99811 11.5372 7.81377 11.2613 7.68801 10.9577C7.56225 10.6541 7.49752 10.3286 7.49752 10C7.49752 9.67137 7.56225 9.34596 7.68801 9.04234C7.81377 8.73872 7.99811 8.46285 8.23048 8.23047C8.46286 7.99809 8.73874 7.81376 9.04235 7.688C9.34597 7.56224 9.67139 7.49751 10 7.49751C10.6637 7.49751 11.3002 7.76116 11.7696 8.23047C12.2389 8.69978 12.5025 9.3363 12.5025 10C12.5025 10.6637 12.2389 11.3002 11.7696 11.7695C11.3002 12.2389 10.6637 12.5025 10 12.5025ZM10 6.14501C8.97761 6.14501 7.99707 6.55116 7.27412 7.27411C6.55117 7.99706 6.14502 8.9776 6.14502 10C6.14502 11.0224 6.55117 12.003 7.27412 12.7259C7.99707 13.4489 8.97761 13.855 10 13.855C11.0224 13.855 12.003 13.4489 12.7259 12.7259C13.4489 12.003 13.855 11.0224 13.855 10C13.855 8.9776 13.4489 7.99706 12.7259 7.27411C12.003 6.55116 11.0224 6.14501 10 6.14501ZM14.9765 6.07501C14.9765 6.31669 14.8805 6.54847 14.7096 6.71936C14.5387 6.89025 14.3069 6.98626 14.0653 6.98626C13.8236 6.98626 13.5918 6.89025 13.4209 6.71936C13.25 6.54847 13.154 6.31669 13.154 6.07501C13.154 5.83333 13.25 5.60155 13.4209 5.43066C13.5918 5.25976 13.8236 5.16376 14.0653 5.16376C14.3069 5.16376 14.5387 5.25976 14.7096 5.43066C14.8805 5.60155 14.9765 5.83333 14.9765 6.07501Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.5 3.60294V16.3971C17.5 16.6896 17.3838 16.9701 17.177 17.177C16.9701 17.3838 16.6896 17.5 16.3971 17.5H3.60294C3.31042 17.5 3.02989 17.3838 2.82304 17.177C2.6162 16.9701 2.5 16.6896 2.5 16.3971V3.60294C2.5 3.31042 2.6162 3.02989 2.82304 2.82304C3.02989 2.6162 3.31042 2.5 3.60294 2.5H16.3971C16.6896 2.5 16.9701 2.6162 17.177 2.82304C17.3838 3.02989 17.5 3.31042 17.5 3.60294ZM6.91176 8.23529H4.70588V15.2941H6.91176V8.23529ZM7.11029 5.80882C7.11146 5.64197 7.07974 5.47651 7.01696 5.32191C6.95418 5.16731 6.86156 5.02659 6.7444 4.90779C6.62723 4.78898 6.48781 4.69442 6.3341 4.6295C6.18038 4.56458 6.01539 4.53057 5.84853 4.52941H5.80882C5.4695 4.52941 5.14408 4.66421 4.90414 4.90414C4.66421 5.14408 4.52941 5.4695 4.52941 5.80882C4.52941 6.14814 4.66421 6.47357 4.90414 6.7135C5.14408 6.95344 5.4695 7.08824 5.80882 7.08824C5.97569 7.09234 6.14173 7.06353 6.29746 7.00344C6.45319 6.94335 6.59555 6.85317 6.71642 6.73804C6.83728 6.62291 6.93427 6.4851 7.00186 6.33247C7.06944 6.17985 7.10629 6.0154 7.11029 5.84853V5.80882ZM15.2941 11.0059C15.2941 8.88382 13.9441 8.05882 12.6029 8.05882C12.1638 8.03684 11.7266 8.13037 11.3349 8.33009C10.9432 8.52981 10.6107 8.82874 10.3706 9.19706H10.3088V8.23529H8.23529V15.2941H10.4412V11.5397C10.4093 11.1552 10.5304 10.7736 10.7782 10.4779C11.026 10.1822 11.3805 9.99616 11.7647 9.96029H11.8485C12.55 9.96029 13.0706 10.4015 13.0706 11.5132V15.2941H15.2765L15.2941 11.0059Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 1.87225C5.39591 1.87225 1.66675 5.60142 1.66675 10.2056C1.66675 13.8931 4.05216 17.0077 7.36466 18.1118C7.78133 18.1848 7.93758 17.9348 7.93758 17.716C7.93758 17.5181 7.92716 16.8618 7.92716 16.1639C5.83342 16.5493 5.29175 15.6535 5.12508 15.1848C5.03133 14.9452 4.62508 14.2056 4.27091 14.0077C3.97925 13.8514 3.56258 13.466 4.2605 13.4556C4.91675 13.4452 5.3855 14.0598 5.54175 14.3098C6.29175 15.5702 7.48966 15.216 7.96883 14.9973C8.04175 14.4556 8.2605 14.091 8.50008 13.8827C6.64591 13.6743 4.70841 12.9556 4.70841 9.76809C4.70841 8.86184 5.03133 8.11184 5.56258 7.5285C5.47925 7.32017 5.18758 6.466 5.64591 5.32017C5.64591 5.32017 6.34383 5.10142 7.93758 6.17434C8.60425 5.98684 9.31258 5.89309 10.0209 5.89309C10.7292 5.89309 11.4376 5.98684 12.1042 6.17434C13.698 5.091 14.3959 5.32017 14.3959 5.32017C14.8542 6.466 14.5626 7.32017 14.4792 7.5285C15.0105 8.11184 15.3334 8.85142 15.3334 9.76809C15.3334 12.966 13.3855 13.6743 11.5313 13.8827C11.8334 14.1431 12.0938 14.6431 12.0938 15.4243C12.0938 16.5389 12.0834 17.4348 12.0834 17.716C12.0834 17.9348 12.2397 18.1952 12.6563 18.1118C14.3106 17.5534 15.7482 16.4901 16.7666 15.0719C17.785 13.6536 18.333 11.9516 18.3334 10.2056C18.3334 5.60142 14.6042 1.87225 10.0001 1.87225Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                    <motion.a
                        href="#"
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}}   
                        whileTap={{scale: 0.9}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6271 6.60007C16.6373 6.747 16.6373 6.89392 16.6373 7.04221C16.6373 11.5605 13.1977 16.7714 6.90813 16.7714V16.7687C5.05019 16.7714 3.23084 16.2392 1.66675 15.2357C1.93691 15.2682 2.20842 15.2845 2.48062 15.2851C4.02033 15.2865 5.51603 14.7699 6.72735 13.8186C5.26415 13.7908 3.98106 12.8368 3.53282 11.444C4.04538 11.5429 4.57351 11.5225 5.07659 11.3851C3.48136 11.0628 2.33369 9.66121 2.33369 8.03347C2.33369 8.01858 2.33369 8.00436 2.33369 7.99014C2.80901 8.25488 3.3412 8.40181 3.88559 8.41806C2.38311 7.41393 1.91998 5.41515 2.82729 3.85242C4.56336 5.98865 7.1248 7.28732 9.87448 7.42477C9.5989 6.23714 9.97537 4.99264 10.8637 4.15779C12.2409 2.86318 14.4069 2.92954 15.7016 4.30607C16.4673 4.15508 17.2013 3.87409 17.873 3.47595C17.6177 4.26748 17.0835 4.93983 16.3698 5.36708C17.0476 5.28718 17.7098 5.10572 18.3334 4.82879C17.8743 5.51672 17.2961 6.11594 16.6271 6.60007Z" fill="#4A4752"/>
                        </svg>
                    </motion.a>
                </div>
            </div>
        </div>
        
    )
     
}
  
