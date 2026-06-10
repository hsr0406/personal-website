const Awards = () => {
  const awardsData = [
    {
      year: '2026',
      title: '中国大学生计算机设计大赛',
      level: '省级二等奖',
      icon: 'cpu',
      color: 'blue'
    },
    {
      year: '2025-2026',
      title: '书院优良学风标兵',
      level: '校级荣誉',
      icon: 'star',
      color: 'amber'
    },
    {
      year: '2025',
      title: '全国大学生英语竞赛',
      level: '省级三等奖',
      icon: 'globe',
      color: 'green'
    },
    {
      year: '2024-2025',
      title: '学业一等奖学金',
      level: '校级奖项',
      icon: 'award',
      color: 'purple'
    },
    {
      year: '2024-2025',
      title: '优秀学生一等奖学金',
      level: '校级奖项',
      icon: 'trophy',
      color: 'orange'
    },
    {
      year: '2024',
      title: '第26届"磐石杯"英语学科竞赛',
      level: '校级三等奖',
      icon: 'book-open',
      color: 'pink'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      'cpu': (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </path>
      ),
      'star': (
        <path fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </path>
      ),
      'globe': (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </path>
      ),
      'award': (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </path>
      ),
      'trophy': (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </path>
      ),
      'book-open': (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </path>
      )
    }
    return icons[iconName] || icons['award']
  }

  const getColorClasses = (color) => {
    const colors = {
      'blue': { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      'amber': { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
      'green': { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      'purple': { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      'orange': { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      'pink': { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' }
    }
    return colors[color] || colors['blue']
  }

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            荣誉奖项
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">获奖经历</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            在校期间，我积极参加各类学科竞赛和评选活动，获得了多项荣誉和奖励。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsData.map((award, index) => {
            const colorClasses = getColorClasses(award.color)
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border ${colorClasses.border} hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center`}>
                    <svg className={`w-6 h-6 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24">
                      {getIcon(award.icon)}
                    </svg>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className={`inline-flex items-center px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-sm font-medium`}>
                  {award.level}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Awards
