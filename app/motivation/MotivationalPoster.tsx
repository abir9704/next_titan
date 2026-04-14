import React from 'react';

const MotivationalPoster = () => {
  const lines = [
    { left: "THINK", right: "POSITIVELY", color: "from-cyan-400 to-teal-500" },
    { left: "NETWORK", right: "WELL", color: "from-cyan-400 to-emerald-500" },
    { left: "EXERCISE", right: "DAILY", color: "from-emerald-400 to-green-500" },
    { left: "EAT", right: "HEALTHY", color: "from-lime-400 to-yellow-500" },
    { left: "WORK", right: "HARD", color: "from-yellow-400 to-amber-500" },
    { left: "STAY", right: "STRONG", color: "from-amber-400 to-orange-500" },
    { left: "BUILD", right: "FAITH", color: "from-orange-400 to-red-500" },
    { left: "WORRY", right: "LESS", color: "from-red-500 to-rose-600" },
    // আরও লাইন যোগ করতে চাইলে এখানে অ্যাড করো
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
        
        {lines.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-6 mb-8 last:mb-0"
          >
            <h1 
              className={`text-5xl md:text-5xl font-black tracking-tighter bg-gradient-to-b ${item.color} bg-clip-text text-transparent`}
            >
              {item.left}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-zinc-400 tracking-widest uppercase">
              {item.right}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MotivationalPoster;