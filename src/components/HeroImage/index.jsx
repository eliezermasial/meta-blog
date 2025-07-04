import imghero from '../../assets/image.png';
import smallImg from '../../assets/smallImg.png';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/Context/ThemeContext';

function HeroImage () {

    const { theme } = useContext(ThemeContext);

    return (
        <section className="relative w-full h-[600px] bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${imghero})` }} >
            <div className={`absolute -bottom-8 md:-bottom-12 left-1/2 md:left-[40%] lg:left-[30%] xl:left-[25%] ${theme === 'dark' ? 'bg-[#181A2A] border-[#242535] text-white ' : 'bg-white border-[#E8E8EA] text-[#181A2A]'}
                transform -translate-x-1/2 border rounded-md px-4 py-6 shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[32rem]`}
            >
                <button className="mb-2 text-sm font-['Work_Sans'] text-white font-medium bg-[#4B6BFB] px-3 py-1 rounded">
                    Technologie
                </button>
                <p className="mb-4 font-['Work_Sans'] font-semibold text-base sm:text-lg md:text-xl">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="flex items-center text-[#97989F] gap-2 flex-wrap">
                    <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                    <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                </div>
            </div>
        </section>
    )
}

export default HeroImage;