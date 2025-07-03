import smallImg from '../../assets/SmallImg.png';
import imgTry from '../../assets/Rectangle 38.png';


function Lastpost () {
    return (
        <section className="mt-20 py-4 text-[#181A2A]">
            <h2 className="font-['Work_Sans'] font-bold text-2xl leading-6 mb-6">Last Post</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4 max-w-full p-4 border border-[#E8E8EA] rounded-md bg-white">
                    <div>
                        <img src={imgTry} className="w-full" alt="try image" />
                    </div>
                    <div className="text-[#181A2A]">
                        <button className="mb-2 text-sm font-['Work_Sans'] text-[#4B6BFB] font-medium bg-[#4B6BFB0D] px-3 py-1 rounded">
                            Technologie
                        </button>
                        <p className="mb-4 font-['Work_Sans'] font-semibold text-xl">
                            The Impact of Technology on the Workplace: How Technology is Changing
                        </p>
                        <div className="flex items-center text-[#97989F] gap-2">
                            <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                            <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                            <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>

    )
}

export default Lastpost;