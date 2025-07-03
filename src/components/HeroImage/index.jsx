import imghero from '../../assets/image.png';
import smallImg from '../../assets/smallImg.png';

function HeroImage () {
    return (
        <section className="relative">
            <div>
                <img src={imghero} className="w-full h-[600px] object-cover rounded-md" alt="hero image"/>
            </div>

            <div className="absolute -bottom-36 left-1/4 max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-md px-4 py-8 text-[#181A2A] shadow-lg ">
                <button className="mb-2 text-sm font-['Work_Sans'] text-white font-medium bg-[#4B6BFB] px-3 py-1 rounded">Technologie</button>
                <p className="mb-4 font-['Work_Sans'] font-semibold text-xl ">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="flex items-center text-[#97989F] gap-2">
                    <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                    <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                </div>
            </div>
        </section>
    )
}

export default HeroImage;