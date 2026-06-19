import { useState } from 'react'

const MessageBoard = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="message" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-10">
          <span className="tag-blue mb-3 inline-block">留言树屋</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3D4A5C]">🌱 留言板</h2>
          <p className="mt-3 text-sm text-[#6B7A8C] max-w-md mx-auto">
            有什么想对我说的话，欢迎通过留言板分享给我
          </p>
        </div>

        {/* 留言表单 */}
        <div className="blue-card p-8">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#3D4A5C] mb-1.5">昵称*</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="你的昵称"
                  className="input-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3D4A5C] mb-1.5">邮箱*</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  className="input-blue"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D4A5C] mb-1.5">留言内容</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleFormChange}
                placeholder="想对我说的话..."
                rows={5}
                className="input-blue resize-none"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-blue w-full">
              提交留言
            </button>
            {submitted && (
              <p className="text-center text-sm text-[#7BB8E8] animate-fade-in">✓ 留言已发送，感谢你的留言！</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default MessageBoard
