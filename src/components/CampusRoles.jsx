const CampusRoles = () => {

  const roles = [
    { title: '学生会主席', desc: '统筹部门例会、活动策划、材料整理，协调多部门联动开展校园学习类活动。', icon: '👔' },
    { title: '班级心理委员', desc: '关注班级同学心理健康，组织班级心理交流，做好日常情绪疏导工作。', icon: '💛' },
    { title: '校心理协会干事', desc: '参与 525 心理健康主题宣传，负责活动现场布置与落地执行。', icon: '🌱' },
  ]

  const volunteer = [
    { title: '2026 年寒假｜郑州东站春运暖冬志愿活动', desc: '完成岗前专业培训，负责旅客路线指引、自助售票设备协助、老弱病残孕等重点旅客帮扶。', icon: '🚉' },
    { title: '寒暑假基层社区实践', desc: '街道办事处带队开展便民引导、街区环保清扫、线下反诈知识宣传，深入基层服务群众。', icon: '🏘️' },
    { title: '校内常态化志愿工作', desc: '参与新生迎新接待、525 心理健康科普、校园环保宣传等活动，全程负责现场组织与落地执行。', icon: '🎓' },
  ]

  return (
    <section id="campus-roles" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-medium mb-4">
            校园履职
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            履职与志愿
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
          <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
            在校园生活中，我积极参与学生工作与志愿服务，在实践中成长，在服务中收获。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="blue-card p-8">
            <div className="flex items-center justify-center mb-8">
              <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-semibold">
                学生任职 · 统筹协作
              </span>
            </div>

            <div className="space-y-6">
              {roles.map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-[#E8F0F8] last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#B8D8F0] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#3D4A5C] mb-2">{item.title}</p>
                    <p className="text-sm text-[#6B7A8C] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="blue-card p-8">
            <div className="flex items-center justify-center mb-8">
              <span className="inline-block px-5 py-2 bg-[#DDEFF7] text-[#4A8AB8] rounded-full text-sm font-semibold">
                志愿服务 · 扎根一线
              </span>
            </div>

            <div className="space-y-6">
              {volunteer.map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-[#E8F0F8] last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DDEFF7] to-[#A8D4E8] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[#3D4A5C] mb-2">{item.title}</p>
                    <p className="text-sm text-[#6B7A8C] leading-relaxed">{item.desc}</p>
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

export default CampusRoles
