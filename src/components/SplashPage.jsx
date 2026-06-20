const SplashPage = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center min-h-screen bg-blue-gradient animate-fade-in">
      <div className="w-[420px] max-w-[92vw] glass-effect rounded-3xl p-10 text-center shadow-xl border border-white/40">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-[#7BB8E8]/20">
          <img src={`${import.meta.env.BASE_URL}images/avatar.jpg`} alt="头像" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-bold text-[#3D4A5C] mb-2">胡释然</h1>

        <p className="text-sm text-[#6B7A8C] mb-3">华北水利水电大学 · 软件工程</p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="inline-block w-10 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
          <span className="inline-block w-10 h-0.5 bg-[#B8D8F0] rounded-full"></span>
        </div>

        <p className="text-sm text-[#6B7A8C] mb-8 leading-relaxed">
          欢迎来到我的个人主页<br />
          一起了解我的故事
        </p>

        <button
          onClick={onEnter}
          className="btn-blue w-full py-3 text-base tracking-wider"
        >
          ENTER
        </button>
      </div>
    </div>
  )
}

export default SplashPage
