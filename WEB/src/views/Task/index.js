import React, {useState, useEffect}  from 'react'
import * as S from './styles'

import api from '../../services/api'

//Nossos components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

import iconCalender from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

function Task() {
  const [lateCount, setLateCount] = useState()
  const [type, setType] = useState()

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then((response) => {
      setLateCount(response.data.length)
    })
  }

  useEffect(() => {
    lateVerify()
  }, [])

  return (
    <S.Container>
      <Header lateCount={lateCount}/>

      <S.Form>
        <S.typeIcons>
            {
                TypeIcons.map((icon, index) => (
                    index > 0 && 
                    <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt="Tipo da tarefa"
                        className={type && type != index && 'inative'}/>
                    </button> 
                ))
            }
        </S.typeIcons>

        <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da tarefa..."/>
        </S.Input>

        <S.TextArea>
            <span>Título</span>
            <textarea rows={5} placeholder="Detalhes da tarefa..."></textarea>
        </S.TextArea>

        <S.Input>
            <span>Data</span>
            <input type="date" placeholder="Título da tarefa..."/>
            <img src={iconCalender} alt="Calendário"/>
        </S.Input>

        <S.Input>
            <span>Hora</span>
            <input type="time" placeholder="Título da tarefa..."/>
            <img src={iconClock} alt="Relógio"/>
        </S.Input>

        <S.Options>
            <div>
                <input type="checkbox"/>
                <span>CONCLUÍDO</span>
            </div>
            <button type="button">EXCLUIR</button>
        </S.Options>

        <S.Save>
            <button type="button">SALVAR</button>
        </S.Save>
      </S.Form>

      <Footer/>
    </S.Container>
  )
}

export default Task;
