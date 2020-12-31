import React, {useState}  from 'react'
import * as S from './styles'

//Nossos components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'

function Home() {
  const [filterAcitived, setFilterActived] = useState('today')

  return (
    <S.Container>
      <Header/>

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos"  actived={filterAcitived == 'all'}/>
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje"   actived={filterAcitived == 'today'}/>
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterAcitived == 'week'}/>
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês"    actived={filterAcitived == 'month'}/>
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano"    actived={filterAcitived == 'year'}/>
        </button>
      </S.FilterArea>
      
      <Footer/>
    </S.Container>
  )
}

export default Home;
