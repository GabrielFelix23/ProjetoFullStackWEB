import React, {useState}  from 'react'
import { Redirect } from 'react-router-dom'
import * as S from './styles'
import Qr from 'qrcode-react'

//Nossos components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
  const [mac, setMac] = useState()
  const [redirect, setRedirect] = useState(false)

  async function SaveMac(){
    if(!mac){
      alert("Você precisa informar o número que apareceu no celular!")
    }
    else{
      await localStorage.setItem('@todo/macaddress', mac)
      setRedirect(true)
      window.location.reload()
    }
  }

  return(
      <S.Container>
        {redirect && <Redirect to="/"/>}
          <Header/>
            <S.Containt>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={250}/>
                </S.QrCodeArea>

                <S.ValidationCode>
                  <span>Digite a numeração que apareceu no seu celular</span>
                  <input type="text" value={mac} onChange={(e) => setMac(e.target.value)}/>
                  <button type="button" onClick={SaveMac}>Sincronizar</button>
                </S.ValidationCode>
            </S.Containt>
          <Footer/>
      </S.Container>
  )
}

export default QrCode;
