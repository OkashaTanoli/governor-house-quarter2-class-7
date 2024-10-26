import Image from 'next/image'

export default function Home() {
  return (
    // flex box : direction row
    // <div className="h-screen bg-purple-500 flex gap-5 justify-start items-end">
    //   <div className="bg-red-500 w-[100px]">BOX 1</div>
    //   <div className="bg-green-500 w-[100px]">BOX 2</div>
    //   <div className="bg-slate-500 w-[100px]">BOX 3</div>
    //   <div className="bg-orange-500 w-[100px]">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam necessitatibus iure
    //   </div>
    // </div>

    // flex box direction column 

    // <div className="bg-[#044E83] flex justify-between items-center px-10">
    //   <Image src={'/logo.png'} width={75} height={75} alt='Logo' />
    //   <h3 className='text-2xl font-bold text-white'>Tuition Free Education Program on Latest Technologies</h3>
    //   <nav className='text-white flex gap-5'>
    //     <div>Home</div>
    //     <div>About</div>
    //     <div>Contact</div>
    //     <div>Apply</div>
    //     <div>Courses</div>
    //   </nav>
    // </div>


    // <div className='w-[500px] h-[500px] bg-red-300 relative'>
    //   <div className='w-[100px] h-[100px] bg-gray-600 absolute bottom-5 right-5'></div>
    //   <div className='w-[100px] h-[100px] bg-green-600'></div>
    // </div>

    <div className='grid grid-cols-[auto,1fr,1fr,1fr] gap-5'>
      <div className="bg-red-500">BOX 1</div>
      <div className="bg-green-500">BOX 2</div>
      <div className="bg-slate-500">BOX 3</div>
      <div className="bg-black">BOX 4</div>
      <div className="bg-orange-400">BOX 5</div>
    </div>
  );
}
