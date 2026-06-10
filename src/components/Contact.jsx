const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </path>
      ),
      label: '邮箱',
      value: '3331980081@qq.com',
      link: 'mailto:3331980081@qq.com'
    },
    {
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </path>
      ),
      label: '电话',
      value: '+86 136-7491-3046',
      link: 'tel:+8613674913046'
    },
    {
      icon: (
        <path fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </path>
      ),
      label: '地址',
      value: '河南省信阳市华北水利水电大学',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            联系方式
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">联系我</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            如果您有任何问题或合作意向，欢迎随时与我联系。
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`flex items-center gap-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 ${
                item.link ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">感谢您的访问</h3>
          <p className="text-blue-100 mb-6">
            如果您对我的个人简历感兴趣，欢迎通过以上方式与我取得联系。
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#education"
              className="px-6 py-2 bg-white text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors"
            >
              查看教育背景
            </a>
            <a
              href="#awards"
              className="px-6 py-2 border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看获奖经历
            </a>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2026 胡释然 - 华北水利水电大学软件工程专业</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
