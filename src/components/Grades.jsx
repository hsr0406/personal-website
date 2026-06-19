const Grades = () => {

  const academicStats = [
    { label: '平均 GPA', value: '4.23', desc: '专业前 1%' },
    { label: '专业排名', value: '1/247', desc: '全系第 1 名' },
    { label: '英语四级', value: '521', desc: '已通过' },
    { label: '英语六级', value: '535', desc: '已通过' },
  ]

  const scholarships = [
    { title: '学业一等奖学金', year: '2024-2025 学年', level: '校级' },
    { title: '优秀学生一等奖学金', year: '2024-2025 学年', level: '校级' },
    { title: '优良学风标兵', year: '2025-2026 学年', level: '书院级' },
  ]

  const competitions = [
    { title: '全国大学生英语竞赛', year: '2025 年', level: '省级三等奖' },
    { title: '第 26 届磐石杯英语学科竞赛', year: '2024 年', level: '校级三等奖' },
    { title: '中国大学生计算机设计大赛', year: '2026 年', level: '省级二等奖' },
  ]

  return (
    <section id="grades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-medium mb-4">
            在校成绩
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            学业与荣誉
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
          <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
            在校期间，我始终保持优异的学习成绩，积极参与各类学术竞赛和活动，不断提升专业能力。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {academicStats.map((item, i) => (
            <div key={i} className="blue-card p-6 text-center hover-lift">
              <div className="text-3xl sm:text-4xl font-bold text-[#5A8AB8] mb-2">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#3D4A5C] mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[#6B7A8C]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="blue-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center shadow-sm">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-[#3D4A5C]">奖学金 & 荣誉</h3>
            </div>
            <div className="space-y-4">
              {scholarships.map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-[#E8F0F8] last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-[#F0F8FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#3D4A5C] mb-1">{item.title}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 bg-[#E8F4FD] text-[#5A8AB8] rounded-full">{item.year}</span>
                      <span className="text-[#6B7A8C]">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="blue-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center shadow-sm">
                <span className="text-2xl">🥇</span>
              </div>
              <h3 className="text-xl font-bold text-[#3D4A5C]">竞赛奖项</h3>
            </div>
            <div className="space-y-4">
              {competitions.map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-[#E8F0F8] last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-[#F0F8FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎖️</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#3D4A5C] mb-1">{item.title}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2 py-0.5 bg-[#E8F4FD] text-[#5A8AB8] rounded-full">{item.year}</span>
                      <span className="text-[#6B7A8C]">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grades
