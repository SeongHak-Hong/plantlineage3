export default function Page() {

    return (
        <div className="bg-black text-white min-h-screen">
       {/* <!-- Navigation --> */}
       <header className="flex items-center justify-between px-8 py-6">
   
         <h1 className="text-lg font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-lime-300 bg-clip-text text-transparent">
           Green Fingers <span className="text-xs align-super">VIP</span>
         </h1>
   
         {/* <!-- Menu --> */}
         <nav className="space-x-6 text-sm">
           <a href="#" className="hover:text-lime-300">브랜드</a>
           <a href="#" className="hover:text-lime-300">명품·희귀 식물</a>
           <a href="#" className="hover:text-lime-300">유전자 분석 및 소유권</a>
           <a href="#" className="hover:text-lime-300">커뮤니티</a>
           <a href="#" className="hover:text-lime-300">로그인</a>
           <button className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-gray-100">
             Green Fingers
           </button>
         </nav>
       </header>
       
       {/* <!-- Main Content --> */}
       <main className="flex flex-col items-center justify-center h-[calc(100vh-96px)] text-center px-4">
         <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-lime-300 bg-clip-text text-transparent mb-4">
           Green Fingers <span className="text-white">VIP</span>
         </h2>
         <p className="text-lg text-white/80">
           당신의 번영과 평안을 위한 특별한 선물
         </p>
       </main>
     </div>
     );
}