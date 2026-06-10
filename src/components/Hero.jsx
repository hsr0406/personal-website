const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              大二学生 | 软件工程专业
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              你好，我是
              <span className="block text-blue-600 mt-2">胡释然</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              华北水利水电大学软件工程专业大二学生，成绩优异，积极参加各类竞赛，具备扎实的专业基础和良好的综合素质。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#education"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                了解更多
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                联系我
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.23</div>
                <div className="text-sm text-gray-500">平均GPA</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1/247</div>
                <div className="text-sm text-gray-500">专业排名</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">四六级</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-300">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full"></div>
              <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-4xl font-bold">H</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">胡释然</h3>
                  <p className="text-sm text-gray-500">华北水利水电大学</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in delay-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">学业一等奖学金</div>
                  <div className="text-xs text-gray-500">2024-2025学年</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-fade-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">优良学风标兵</div>
                  <div className="text-xs text-gray-500">2025-2026学年</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
