const Skills = () => {
  const skillsData = [
    {
      category: '专业技能',
      items: [
        { name: '编程语言', value: ['Java', 'Python', 'C++', 'JavaScript'] },
        { name: '前端技术', value: ['HTML5', 'CSS3', 'React', 'Vue'] },
        { name: '数据库', value: ['MySQL', 'SQLite', 'MongoDB'] },
        { name: '开发工具', value: ['Git', 'VS Code', 'IntelliJ IDEA'] }
      ]
    },
    {
      category: '英语能力',
      items: [
        { name: '英语四级', value: '500+' },
        { name: '英语六级', value: '500+' },
        { name: '全国大学生英语竞赛', value: '省级三等奖' },
        { name: '磐石杯英语竞赛', value: '校级三等奖' }
      ]
    },
    {
      category: '软技能',
      items: [
        { name: '团队协作', value: '良好' },
        { name: '项目管理', value: '优秀' },
        { name: '沟通能力', value: '优秀' },
        { name: '学习能力', value: '优秀' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            技能特长
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">专业能力</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            经过系统的学习和实践，我掌握了扎实的专业技能和良好的综合能力。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.name}</span>
                    <div className="flex items-center gap-2">
                      {Array.isArray(item.value) ? (
                        <div className="flex flex-wrap gap-1">
                          {item.value.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-800 font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4+</div>
              <div className="text-blue-100">专业奖项</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-blue-100">奖学金</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">英语四六级</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Top 1%</div>
              <div className="text-blue-100">专业排名</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
