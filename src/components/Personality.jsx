const Personality = () => {
  const traits = [
    {
      title: '行事稳重',
      description: '做事沉着冷静，善于分析问题，做出明智的决策。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </path>
      )
    },
    {
      title: '做事踏实',
      description: '对待每一项任务都认真负责，注重细节，力求完美。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </path>
      )
    },
    {
      title: '责任心强',
      description: '勇于承担责任，对待工作认真负责，值得信赖。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </path>
      )
    },
    {
      title: '高效优质',
      description: '能够在规定时间内高效完成任务，保证工作质量。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </path>
      )
    },
    {
      title: '吃苦耐劳',
      description: '不畏困难，勇于挑战，具备良好的抗压能力。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </path>
      )
    },
    {
      title: '自律性强',
      description: '严格要求自己，坚守原则，保持良好的学习和生活习惯。',
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </path>
      )
    }
  ]

  return (
    <section id="personality" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            性格特点
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">个人特质</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            我是一个做事踏实、责任心强的人，始终坚持高标准要求自己，努力成为更好的自己。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
                  {trait.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{trait.title}</h3>
              <p className="text-gray-600 text-sm">{trait.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">个人总结</h3>
              <p className="text-gray-600 leading-relaxed">
                作为一名大二学生，我始终以高标准要求自己，在学业上追求卓越，在生活中注重品德修养。
                我相信，只有不断学习和努力，才能实现自己的人生目标。在未来的学习和工作中，我将继续保持积极进取的态度，
                不断提升自己的专业能力和综合素质，为社会做出贡献。
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">H</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">胡释然</h4>
                  <p className="text-sm text-gray-500">软件工程专业 | 大二</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">成绩优异</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">团队协作</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">责任心强</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">自律严谨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Personality
