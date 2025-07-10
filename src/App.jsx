import SNSLinks from './components/SNSLinks'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl mx-auto text-center space-y-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-700 ring-4 ring-purple-500 shadow-lg">
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/128x128.png?text=Profile';
                }}
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              홍길동
            </h1>
            <p className="text-xl text-gray-300">
              웹 개발자 & 콘텐츠 크리에이터
            </p>
            <p className="text-gray-400 max-w-lg mx-auto">
              새로운 기술과 트렌드를 탐구하며, 웹 개발과 콘텐츠 제작을 통해 
              가치 있는 경험을 만들어내는 것을 좋아합니다.
            </p>
          </div>

          {/* SNS Links Section */}
          <SNSLinks />

          {/* Footer */}
          <footer className="text-sm text-gray-500 mt-8">
            <p>© 2024 홍길동. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
