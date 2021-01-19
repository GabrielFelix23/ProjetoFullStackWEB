import React, {useState, useEffect}  from 'react'
import * as S from './styles'
import Qr from 'qrcode-react'

//Nossos components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode() {
  return(
      <S.Container>
          <Header/>
            <S.Containt>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value="getmacaddress" size={250}/>
                </S.QrCodeArea>

                <S.ValidationCode>
                  <span>Digite a numeração que apareceu no seu celular</span>
                  <input type="text"/>
                  <button type="button">Sincronizar</button>
                </S.ValidationCode>
            </S.Containt>
          <Footer/>
      </S.Container>
  )
}

export default QrCode;
