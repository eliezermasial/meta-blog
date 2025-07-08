import { useContext } from 'react';
import smallImg from '../../assets/SmallImg.png';
import imgPost from '../../assets/Rectangle 38.png';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Post ({data}) {

    const { theme } = useContext(ThemeContext);
    const [part1, part2] = data.title.split(':') || [];
    
    return (
        <section className="text-[#3B3C4A] pt-10 px-4 md:px-10 font-['Work_Sans']">
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
                <div>
                    <button className="text-sm text-white font-medium bg-[#4B6BFB] px-4 py-1 rounded">
                        Technologie
                    </button>
                    <h2 className={`mt-6 mb-4 font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} text-[28px] sm:text-[32px] md:text-[36px] leading-tight`}>
                        {part1}: <br className="hidden sm:block" />
                        {part2}
                    </h2>
                    <div className="flex items-center text-[#97989F] gap-3 flex-wrap text-sm">
                        <img src={smallImg} alt="auteur" className="w-8 h-8 rounded-full" />
                        <span>Jason Francisco</span>
                        <span>August 20, 2022</span>
                    </div>
                </div>
                <div>
                    <img src={imgPost} alt="post" className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px] rounded-md object-cover"/>
                </div>
                <div className="space-y-6 text-base leading-relaxed">
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        {data.body}
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article,
                        we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                    </p>

                    <h3 className={`font-semibold text-[#181A2A] text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Research Your Destination
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                    </p>

                    <h3 className={`font-semibold text-[#181A2A] text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Plan Your Itinerary
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences.
                        This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences.
                        This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                    </p>
                </div>
                <div className='bg-[#F6F6F7] p-[32px] border border-[#E8E8EA] rounded-sm '>
                    <p className='text-[#181A2A] tex-[24px] leading-loose italic '>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
                </div>
                <div>
                    <img src={imgPost} alt="post" className="w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px] rounded-md object-cover"/>
                </div>
                <div className="space-y-6 text-base leading-relaxed">
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article,
                        we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article,
                        we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
                    </p>

                    <h3 className={`font-semibold text-[#181A2A] text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Research Your Destination
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
                        Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
                    </p>

                    <h3 className={`font-semibold text-[#181A2A] text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        Plan Your Itinerary
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences.
                        This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                    </p>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                        While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences.
                        This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Post;