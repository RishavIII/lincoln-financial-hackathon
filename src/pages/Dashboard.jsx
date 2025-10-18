import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="p-8  ">
        <div className="p-12 min-h-[calc(85vh)] flex justify-center items-center ">
          {/* <div className="text-9xl text-[#4cae4f]">
         InsoraPath 
          </div> */}
          <div className="  px-20 flex-col">
                      <img src="src\assets\insurapath-high-resolution-logo-transparent.png" alt="description" className=" h-[20vh] rounded-lg  " />

                        <div>
                          <div className="text-4xl text-[#c7e5c8] font-bold text-center">Your journey to the right coverage</div>
                        </div>
            
                        <div className=" flex justify-center items-center  h-[20vh]">
                         <button className="h-20 px-6 py-2 bg-[#4cae4f]/15 text-white rounded-lg hover:bg-[#4cae4f]  border-2 border-[#4cae4f]">
                         Find My Coveragee
                         </button>
                       </div>
          </div>
        </div>
    </div>
  );
}
