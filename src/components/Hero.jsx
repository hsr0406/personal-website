const Hero = () => {

  const personalityTags = [
    '行事稳重', '做事踏实', '责任心强', '高效优质完成任务',
    '吃苦耐劳', '任劳任怨服务大家', '自律性强', '坚守原则'
  ]

  return (
    <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-[#7BB8E8]/20">
            <img src="/images/avatar.jpg" alt="头像" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            我是胡释然
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-10 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="text-sm text-[#6B7A8C]">华北水利水电大学 · 软件工程专业 · 大二学生</span>
            <span className="inline-block w-10 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
        </div>

        <div className="blue-card px-8 py-6 max-w-2xl mx-auto mb-14 text-center">
          <p className="text-[#5A8AB8] text-sm leading-relaxed italic">
            <span className="text-xl font-bold mr-2 align-baseline">"</span>
            性格柔软却自有韧性，接纳生活的平淡日常，亦期待每一场不期而遇。
            <br className="hidden sm:block" />
            心底藏着细碎浪漫，于寻常烟火里，守好独属于自己的一方小天地。
            <span className="text-xl font-bold ml-2 align-baseline">"</span>
          </p>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D4A5C] mb-2">个人档案</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="blue-card p-8 hover-lift">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center shadow-sm">
                <span className="text-2xl">🎂</span>
              </div>
              <h3 className="text-lg font-bold text-[#3D4A5C]">基本信息</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-[#E8F0F8] pb-2">
                <span className="text-[#6B7A8C] font-medium">姓名：</span>
                <span className="text-[#3D4A5C]">胡释然</span>
              </div>
              <div className="flex justify-between border-b border-[#E8F0F8] pb-2">
                <span className="text-[#6B7A8C] font-medium">年龄：</span>
                <span className="text-[#3D4A5C]">20岁</span>
              </div>
              <div className="flex justify-between border-b border-[#E8F0F8] pb-2">
                <span className="text-[#6B7A8C] font-medium">星座：</span>
                <span className="text-[#3D4A5C]">射手座</span>
              </div>
              <div className="flex justify-between border-b border-[#E8F0F8] pb-2">
                <span className="text-[#6B7A8C] font-medium">家乡：</span>
                <span className="text-[#3D4A5C]">河南郑州</span>
              </div>
              <div className="flex justify-between border-b border-[#E8F0F8] pb-2">
                <span className="text-[#6B7A8C] font-medium">学校：</span>
                <span className="text-[#3D4A5C] text-right">华北水利水电大学</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7A8C] font-medium">专业：</span>
                <span className="text-[#3D4A5C]">软件工程</span>
              </div>
            </div>
          </div>

          <div className="blue-card p-8 hover-lift">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center shadow-sm">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-[#3D4A5C]">教育背景</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#7BB8E8] to-[#A3D0F0] shadow-sm"></div>
                <div className="absolute left-[5px] top-5 bottom-0 w-px bg-[#B8D8F0]"></div>
                <p className="text-xs text-[#6B7A8C] mb-1">2024 - 至今</p>
                <p className="font-semibold text-[#3D4A5C] mb-1">华北水利水电大学</p>
                <p className="text-[#6B7A8C] text-xs">软件工程专业 · 本科在读</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#B8D8F0] shadow-sm"></div>
                <p className="text-xs text-[#6B7A8C] mb-1">2021 - 2024</p>
                <p className="font-semibold text-[#3D4A5C]">高中</p>
                <p className="text-[#6B7A8C] text-xs">理科 · 扎实基础阶段</p>
              </div>
            </div>
          </div>

          <div className="blue-card p-8 hover-lift">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center shadow-sm">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-[#3D4A5C]">性格特点</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {personalityTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#F0F8FF] text-[#5A8AB8] rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#6B7A8C] leading-relaxed">
              典型的踏实认真型性格，做事有条不紊，专注且有耐心。
              对自己要求严格，有强烈的责任感和目标感。
              虽然是理科生，但内心温和，善于倾听和理解他人。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
