const Skills = () => {
  const skillCategories = [
    {
      title: '专业技能',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'React / Vue 前端框架', level: 80 },
        { name: 'Python 编程语言', level: 75 },
        { name: '数据库（MySQL / MongoDB）', level: 70 },
        { name: 'Git 版本控制', level: 85 },
      ]
    },
    {
      title: '软技能',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: [
        { name: '团队协作与沟通', level: 90 },
        { name: '问题解决与分析', level: 85 },
        { name: '学习能力与适应力', level: 90 },
        { name: '时间管理与执行力', level: 85 },
        { name: '责任心与踏实肯干', level: 92 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-medium mb-4">
            技能特长
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            专业能力
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
          <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
            通过课程学习与项目实践，逐步构建扎实的软件工程专业技能。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="blue-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center text-[#5A8AB8] shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#3D4A5C]">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-[#3D4A5C]">{skill.name}</span>
                      <span className="text-xs text-[#6B7A8C] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#F0F8FF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#7BB8E8] to-[#A3D0F0] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
