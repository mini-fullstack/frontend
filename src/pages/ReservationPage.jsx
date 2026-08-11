import { useEffect, useState } from 'react'
import '../App.css'

const API_BASE_URL = 'http://127.0.0.1:8000'

function ReservationPage() {
  const [form, setForm] = useState({
    visitor_name: '',
    company: '',
    phone: '',
    visit_date: '',
    visit_time: '',
    purpose: '',
  })

  const [reservations, setReservations] = useState([])

  function handleChange(event) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  async function fetchReservations() {
    const response = await fetch(`${API_BASE_URL}/api/v1/reservations/`)
    const data = await response.json()

    setReservations(data.items)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(`${API_BASE_URL}/api/v1/reservations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    console.log(data)

    setForm({
      visitor_name: '',
      company: '',
      phone: '',
      visit_date: '',
      visit_time: '',
      purpose: '',
    })

    fetchReservations()
  }

  useEffect(() => {
    fetchReservations()
  }, [])

  return (
    <main className="page">
      <section className="reservation-panel">
        <h1>방문 예약 관리</h1>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>방문자 이름</label>
            <input
              type="text"
              name="visitor_name"
              value={form.visitor_name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label>회사명</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="회사명을 입력하세요"
            />
          </div>

          <div className="form-group">
            <label>연락처</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="010-0000-0000"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>방문 날짜</label>
              <input
                type="date"
                name="visit_date"
                value={form.visit_date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>방문 시간</label>
              <input
                type="time"
                name="visit_time"
                value={form.visit_time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>방문 목적</label>
            <textarea
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              placeholder="방문 목적을 입력하세요"
            />
          </div>

          <button type="submit">예약 등록</button>
        </form>
      </section>

      <section className="reservation-list">
        <h2>예약 목록</h2>

        {reservations.length === 0 ? (
          <div className="empty-message">
            등록된 예약이 없습니다.
          </div>
        ) : (
          <div className="reservation-items">
            {reservations.map((reservation) => (
              <article className="reservation-card" key={reservation.id}>
                <div>
                  <strong>{reservation.visitor_name}</strong>
                  <span>{reservation.company}</span>
                </div>

                <p>{reservation.purpose}</p>

                <dl>
                  <div>
                    <dt>연락처</dt>
                    <dd>{reservation.phone}</dd>
                  </div>
                  <div>
                    <dt>방문 일시</dt>
                    <dd>
                      {reservation.visit_date} {reservation.visit_time}
                    </dd>
                  </div>
                  <div>
                    <dt>상태</dt>
                    <dd>{reservation.status}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default ReservationPage