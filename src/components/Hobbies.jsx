import { useState } from 'react'

const Hobbies = () => {
  const [activeTab, setActiveTab] = useState('music')

  const musicData = {
    genre: 'R&B',
    artists: ['陶喆', '卢广仲', '王力宏'],
    songs: [
      { title: '普通朋友', desc: '"等待，我随时随地在等待。"' },
      { title: '一口', desc: '"我终于都忘记，那天七点半你说买菜去。"' },
      { title: '搬家', desc: '"跌倒不一定是失败，只是跌的频率比较快。"' },
      { title: '蝴蝶', desc: '"每次一想到你，像雨过天晴。"' },
      { title: '最佳损友', desc: '"朋友，我当你一世朋友，奇怪过去再不堪回首。"' },
    ]
  }

  const books = [
    { title: '傲慢与偏见', author: '简·奥斯汀', desc: '"我们总在误会中相识，也在理解中靠近。" 初读只觉得是一段英式爱情，后来才发现，它写尽了人与人之间的误解与傲慢。达西与伊丽莎白从偏见走向理解的过程，也是我们认识自我的过程。', color: 'from-[#B8D8F0] to-[#7BB8E8]' },
    { title: '假面山庄', author: '东野圭吾', desc: '"有些面具戴得太久，就摘不下来了。" 一座封闭的山庄，一群各怀心事的客人。东野圭吾用层层递进的推理，揭开人性中最复杂的一面。读这本书的过程，像是在迷雾中寻找真相，每一页都有新的发现。', color: 'from-[#A3D0F0] to-[#5A8AB8]' },
    { title: '我与地坛', author: '史铁生', desc: '"死是一件不必急于求成的事，死是一个必然会降临的节日。" 地坛见证了一个青年从绝望走向平静的心路历程。在这本书里，我读到了关于生命、关于存在、关于与命运和解的思考。每次重读，都能获得新的力量。', color: 'from-[#C8E0F5] to-[#8EC4E8]' },
  ]

  const talentData = {
    title: '单簧管',
    cert: '中国音乐学院单簧管七级认证',
    years: '五年学琴经历',
    desc: '与单簧管相伴五载，从初学指尖生涩，到如今可独立完整演奏，无数沉静专注的岁月都藏在旋律之中。每一次换气、每一段音符，都是我与乐器独有的对白。数年练习磨出长久坚持的韧性，也让我在纯粹的乐声里，寻得专属自我的倾诉与表达。'
  }

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-[#E8F4FD] text-[#5A8AB8] rounded-full text-sm font-medium mb-4">
            兴趣爱好
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3D4A5C] mb-2">
            兴趣与热爱
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
            <span className="inline-block w-8 h-0.5 bg-[#B8D8F0] rounded-full"></span>
          </div>
          <p className="text-sm text-[#6B7A8C] max-w-2xl mx-auto">
            在兴趣的森林里探索自我，用热爱让生活更加丰盈多彩。
          </p>
        </div>

        {/* 标题卡片 */}
        <div className="blue-card p-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🌱</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D4A5C]">
              兴趣营地 · Explore My Passions
            </h2>
          </div>
          <div className="text-[#6B7A8C] space-y-2 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
            <p>每个人心中，都有一片属于自己的 "兴趣森林" —— 那里没有标准答案，也不需要完成目标</p>
            <p>我的这片营地里，藏着声音、光影、故事、色彩，还有热爱</p>
            <p>你将看到的，是我如何在音乐里舒展情绪，在文字中沉淀思考，在单簧管的吹奏中感受生活的脉搏</p>
            <p>欢迎你走进这片营地，也许你会发现，我们热爱的事情，竟然有那么多重叠的部分</p>
          </div>
        </div>

        {/* 切换按钮 */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {[
            { key: 'music', label: '🎵 音乐' },
            { key: 'reading', label: '📖 阅读' },
            { key: 'talent', label: '🎼 特长' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`btn-blue-light ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 音乐板块 - CD圆形布局 */}
        {activeTab === 'music' && (
          <div className="animate-fade-in">
            {/* 副标题 */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#3D4A5C] mb-2">🎵 音乐</h3>
              <div className="text-sm text-[#6B7A8C] mb-3">
                最爱 <span className="text-[#5A8AB8] font-semibold">{musicData.genre}</span>
              </div>

              {/* 我喜欢的歌手 - 移到私藏CD之前 */}
              <div className="mt-8 mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-xl">🎤</span>
                  <h4 className="text-lg font-bold text-[#3D4A5C]">我喜欢的歌手</h4>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  {musicData.artists.map((artist, i) => (
                    <div key={i} className="blue-card px-6 py-3 hover-lift">
                      <span className="text-base font-semibold text-[#5A8AB8]">{artist}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8F4FD]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-xl">🎧</span>
                  <h4 className="text-lg font-bold text-[#3D4A5C]">我的私藏CD</h4>
                </div>
                <p className="text-sm text-[#6B7A8C] italic">有些旋律，是某段时光的缩影。它们陪我走过低谷，也见证了闪光。</p>
              </div>
            </div>

            {/* CD网格 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {musicData.songs.map((song, i) => (
                <div key={i} className="blue-card p-6 text-center hover-lift" style={{ animationDelay: `${i * 0.08}s` }}>
                  {/* CD圆形封面 */}
                  <div className="w-36 h-36 mx-auto mb-5 rounded-full shadow-lg relative overflow-hidden" style={{
                    background: `radial-gradient(circle at 50% 50%, #1a1a2e 0%, #2d2d44 40%, #3d3d5c 60%, #2d2d44 80%, #1a1a2e 100%)`,
                  }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7BB8E8] to-[#A3D0F0] flex items-center justify-center shadow-inner">
                        <div className="w-3 h-3 rounded-full bg-[#1a1a2e]"></div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-[#3d3d5c]/30 origin-bottom" style={{ transform: `rotate(${(i * 30)}deg)` }}></div>
                  </div>
                  <h4 className="font-bold text-[#3D4A5C] mb-2">《{song.title}》</h4>
                  <p className="text-xs text-[#6B7A8C] italic leading-relaxed">{song.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 阅读板块 - 左右卡片布局 */}
        {activeTab === 'reading' && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#3D4A5C] mb-2">📖 阅读</h3>
              <p className="text-sm text-[#6B7A8C] italic">在字里行间，遇见另一个自己。每一本书都是一次远行。</p>
            </div>

            <div className="space-y-6">
              {books.map((book, i) => (
                <div key={i} className="blue-card p-6 flex flex-col sm:flex-row gap-6 items-start hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                  {/* 左侧封面占位 */}
                  <div className={`w-full sm:w-36 h-48 rounded-2xl bg-gradient-to-br ${book.color} flex items-center justify-center flex-shrink-0 shadow-md sm:mx-auto`}>
                    <div className="text-center text-white">
                      <div className="text-3xl mb-2">📖</div>
                      <div className="text-sm font-bold px-2">{book.title}</div>
                    </div>
                  </div>
                  {/* 右侧文字内容 */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h4 className="text-xl font-bold text-[#3D4A5C] mb-1">《{book.title}》</h4>
                    <p className="text-sm text-[#7BB8E8] font-medium mb-4 italic">— {book.author}</p>
                    <p className="text-sm text-[#6B7A8C] leading-relaxed whitespace-pre-line">{book.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 特长板块 - 简约卡片 */}
        {activeTab === 'talent' && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#3D4A5C] mb-2">🎼 特长</h3>
              <p className="text-sm text-[#6B7A8C] italic">乐器是情感的延伸，单簧管让我学会在呼吸之间感受节奏。</p>
            </div>

            <div className="blue-card p-10 max-w-3xl mx-auto text-center hover-lift">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7BB8E8] to-[#A3D0F0] flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-4xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3D4A5C] mb-2">{talentData.title}</h3>
              <p className="text-sm text-[#5A8AB8] font-semibold mb-3">{talentData.cert}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F0F8FF] rounded-full text-sm text-[#5A8AB8] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7BB8E8]"></span>
                {talentData.years}
              </div>
              <p className="text-sm text-[#6B7A8C] leading-relaxed max-w-lg mx-auto">{talentData.desc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hobbies
