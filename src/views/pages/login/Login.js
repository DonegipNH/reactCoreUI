import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import avatar from '../../../assets/images/avatar.png';

const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CRow className="justify-content-center">
                    <CImg src={avatar} width="120" height="120"></CImg>
                  </CRow>
                  <CForm>
                    <CRow className="justify-content-center">
                      <h1>Đăng Nhập</h1>                      
                    </CRow>
                    <CRow className="justify-content-center">
                      <p className="text-muted">Một Tài Khoản Sử Dụng Tất Các Ứng Dụng Của MISA</p>
                    </CRow>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email Hoặc Số Điện Thoại" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Mật Khẩu" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow className="justify-content-center">
                      <CButton color="primary" className="px-4">Đăng Nhập</CButton>                   
                    </CRow>
                    <CRow className="justify-content-center">
                      <CButton color="link" className="px-0 text-info">Bạn Quên Mật Khẩu ?</CButton>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
