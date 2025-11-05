export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Tailwind CSS 학습 자료</h1>

      <div className="max-w-4xl mx-auto space-y-12">

        {/* 색상 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">1. 글씨 색상 (Text Color)</h2>
          <div className="space-y-2">
            {/* 여기에는 빨간색 글씨가 와야합니다 */}
            <p className="fillout">이 텍스트는 빨간색이어야 합니다</p>

            {/* 여기에는 파란색 글씨가 와야합니다 */}
            <p className="fillout">이 텍스트는 파란색이어야 합니다</p>

            {/* 여기에는 초록색 글씨가 와야합니다 */}
            <p className="fillout">이 텍스트는 초록색이어야 합니다</p>
          </div>
        </section>

        {/* 넓이와 높이 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">2. 넓이와 높이 (Width & Height)</h2>
          <div className="space-y-4">
            {/* 여기에는 넓이 200px, 높이 100px이 와야합니다 */}
            <div className="fillout bg-blue-200"></div>

            {/* 여기에는 넓이는 전체의 50%, 높이 150px이 와야합니다 */}
            <div className="fillout bg-green-200"></div>

            {/* 여기에는 넓이와 높이가 모두 80px인 정사각형이 와야합니다 */}
            <div className="fillout bg-purple-200"></div>
          </div>
        </section>

        {/* 그림자 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">3. 그림자 (Shadow)</h2>
          <div className="flex gap-4">
            {/* 여기에는 작은 그림자가 와야합니다 */}
            <div className="fillout bg-white p-4">작은 그림자</div>

            {/* 여기에는 중간 크기 그림자가 와야합니다 */}
            <div className="fillout bg-white p-4">중간 그림자</div>

            {/* 여기에는 큰 그림자가 와야합니다 */}
            <div className="fillout bg-white p-4">큰 그림자</div>
          </div>
        </section>

        {/* 글씨 크기 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">4. 글씨 크기 (Text Size)</h2>
          <div className="space-y-2">
            {/* 여기에는 매우 작은 글씨(12px)가 와야합니다 */}
            <p className="fillout">작은 글씨</p>

            {/* 여기에는 기본 글씨 크기가 와야합니다 */}
            <p className="fillout">기본 글씨</p>

            {/* 여기에는 큰 글씨(24px)가 와야합니다 */}
            <p className="fillout">큰 글씨</p>

            {/* 여기에는 매우 큰 글씨(36px)가 와야합니다 */}
            <p className="fillout">매우 큰 글씨</p>
          </div>
        </section>

        {/* Flex 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">5. Flex</h2>
          <div className="space-y-6">
            {/* 여기에는 가로로 배치되는 flex container가 와야합니다 */}
            <div className="fillout gap-4">
              <div className="bg-blue-300 p-3">Item 1</div>
              <div className="bg-blue-300 p-3">Item 2</div>
              <div className="bg-blue-300 p-3">Item 3</div>
            </div>

            {/* 여기에는 세로로 배치되는 flex container가 와야합니다 */}
            <div className="fillout gap-4">
              <div className="bg-green-300 p-3">Item A</div>
              <div className="bg-green-300 p-3">Item B</div>
              <div className="bg-green-300 p-3">Item C</div>
            </div>

            {/* 여기에는 가로로 배치되면서 아이템들이 가운데 정렬되는 flex container가 와야합니다 */}
            <div className="fillout gap-4">
              <div className="bg-purple-300 p-3">중앙</div>
              <div className="bg-purple-300 p-3">정렬</div>
            </div>
          </div>
        </section>

        {/* 정렬 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">6. 정렬 (Alignment)</h2>
          <div className="space-y-6">
            {/* 여기에는 텍스트가 왼쪽 정렬되어야 합니다 */}
            <p className="fillout bg-gray-200 p-3">왼쪽 정렬된 텍스트입니다</p>

            {/* 여기에는 텍스트가 가운데 정렬되어야 합니다 */}
            <p className="fillout bg-gray-200 p-3">가운데 정렬된 텍스트입니다</p>

            {/* 여기에는 텍스트가 오른쪽 정렬되어야 합니다 */}
            <p className="fillout bg-gray-200 p-3">오른쪽 정렬된 텍스트입니다</p>
          </div>
        </section>

        {/* 둥근 모서리 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">7. 둥근 모서리 (Rounded Corners)</h2>
          <div className="flex gap-4 items-center">
            {/* 여기에는 약간 둥근 모서리가 와야합니다 */}
            <div className="fillout bg-blue-400 p-6">약간 둥근 모서리</div>

            {/* 여기에는 중간 정도 둥근 모서리가 와야합니다 */}
            <div className="fillout bg-green-400 p-6">중간 둥근 모서리</div>

            {/* 여기에는 매우 둥근 모서리(원에 가까운)가 와야합니다 */}
            <div className="fillout bg-purple-400 p-6">매우 둥근 모서리</div>

            {/* 여기에는 완전한 원이 와야합니다 (넓이와 높이가 같고 매우 둥근 모서리) */}
            <div className="fillout bg-pink-400"></div>
          </div>
        </section>

        {/* 마진 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">8. 마진 (Margin)</h2>
          <div>
            {/* 여기에는 위쪽에 마진이 4단위(16px) 와야합니다 */}
            <div className="fillout bg-yellow-300 p-4">위쪽 마진 16px</div>

            {/* 여기에는 좌우에 마진이 각각 8단위(32px) 와야합니다 */}
            <div className="fillout bg-orange-300 p-4">좌우 마진 32px</div>

            {/* 여기에는 모든 방향에 마진이 12단위(48px) 와야합니다 */}
            <div className="fillout bg-red-300 p-4">모든 방향 마진 48px</div>
          </div>
        </section>

        {/* 패딩 학습 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">9. 패딩 (Padding)</h2>
          <div className="space-y-4">
            {/* 여기에는 패딩이 2단위(8px) 와야합니다 */}
            <div className="fillout bg-blue-200">작은 패딩 (8px)</div>

            {/* 여기에는 패딩이 6단위(24px) 와야합니다 */}
            <div className="fillout bg-green-200">중간 패딩 (24px)</div>

            {/* 여기에는 패딩이 12단위(48px) 와야합니다 */}
            <div className="fillout bg-purple-200">큰 패딩 (48px)</div>

            {/* 여기에는 위아래 패딩 4단위, 좌우 패딩 8단위가 와야합니다 */}
            <div className="fillout bg-pink-200">세로 16px, 가로 32px 패딩</div>
          </div>
        </section>

        {/* 종합 예제 */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">10. 종합 예제 (모든 개념 사용)</h2>
          {/* 여기에는 다음 조건들이 모두 적용되어야 합니다:
              - 넓이 300px, 높이 200px
              - 파란색 배경
              - 가운데 정렬된 텍스트(행,열 전부 정렬되어있어야 합니다.)
              - 큰 그림자
              - 둥근 모서리
              - 모든 방향 패딩 24px
              - 위쪽 마진 16px
              - 흰색 텍스트, 큰 글씨
          */}
          <div className="fillout">
            종합 예제 박스
          </div>
        </section>

      </div>
    </div>
  );
}