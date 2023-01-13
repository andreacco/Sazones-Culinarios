import '../../../scss/components/BestSellers.scss'

export default function BestSellers() {
  
  return (
    <div className='BestSellers-container'>
      <h2>BestSellers</h2>
      <div className='cards-container'>
        <div className="flip-card">
          <div className="flip-card-inner">
              <div className="flip-card-front">
              </div>
              <div className="flip-card-back">
                  <p className="title">Bartender Profesional</p>
                  <p>Haz click para más información</p>
              </div>
          </div>
        </div>
        <div className="card">
            <div className="card-details">
              <p className="text-title">Bartender Profesional</p>
              <p className="text-body">La carrera del futuro</p>
            </div>
            <button className="card-button">Haz click para más información</button>
        </div>
        <div className="container">
            <div className="card_box">
                <span></span>
            </div>
        </div>
      </div>
    </div>
  )
}
