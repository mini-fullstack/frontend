import './App.css'

function App() {
  return (
    <main className="page">
      <section className="reservation-panel">
        <h1>방문 예약 관리</h1>

        <form className="reservation-form">
          <div className="form-group">
            <label>방문자 이름</label>
            <input type="text" placeholder="이름을 입력하세요" />
          </div>

          <div className="form-group">
            <label>회사명</label>
            <input type="text" placeholder="회사명을 입력하세요" />
          </div>

          <div className="form-group">
            <label>연락처</label>
            <input type="text" placeholder="010-0000-0000" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>방문 날짜</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>방문 시간</label>
              <input type="time" />
            </div>
          </div>

          <div className="form-group">
            <label>방문 목적</label>
            <textarea placeholder="방문 목적을 입력하세요" />
          </div>

          <button type="submit">예약 등록</button>
        </form>
      </section>

      <section className="reservation-list">
        <h2>예약 목록</h2>

        <div className="empty-message">
          등록된 예약이 없습니다.
        </div>
      </section>
    </main>
  )
}

export default App