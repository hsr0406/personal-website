const Contact = () => {
  const contactItems = [
    {
      label: '邮箱',
      value: '3331980081@qq.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: '电话',
      value: '13674913046',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: '地址',
      value: '河南省信阳市华北水利水电大学',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-medium mb-4">
            联系方式
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            一起交流吧
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
          <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
            如果你有任何问题或想法，欢迎通过以下方式与我联系
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item, idx) => (
            <div key={idx} className="blue-card p-8 text-center hover-lift">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#7BB8E8] to-[#A3D0F0] flex items-center justify-center text-white shadow-md">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-[#3D4A5C] mb-2">{item.label}</h3>
              <p className="text-sm text-[#6B7A8C]">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-[#E8F0F8]">
          <p className="text-sm text-[#6B7A8C]">
            © 2026 胡释然 · 用代码创造价值
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
