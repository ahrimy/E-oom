import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import UserDataService from '../../../services/user.service'
import { number } from "prop-types";

var isCreate = false;

class Register extends Component{

  constructor(props){
    super(props);
    this.state = {
      fname : '',
      lname : '',
      email : '',
      pw : '',
      re_pw : '',
      birth : '',
      phone : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleCheck = (e) => {
    e.preventDefault();

    var user_email = this.state.email;
    var responseData = [];

    UserDataService.getCheckId(user_email)
    .then(response => {
      responseData = response.data;
      console.log("responseData : " + responseData)
      if(responseData == ''){
        alert("OK");
      }else{
        alert("이미 있는 email 입니다. 다른 email을 입력하세요.");
      }
    })
    .catch(e => {
      console.log(e);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var data = {
      user_fname : this.state.fname,
      user_lname : this.state.lname,
      user_email : this.state.email,
      user_pw : this.state.re_pw,
      user_birthdate : this.state.birth,
      user_phone : this.state.phone
    };    

    var responseData = [];

    UserDataService.getSignUp(data)
    .then(response => {
      responseData = response.data[0];
      console.log("responseData : " + responseData);

      //isCreate 가 true면 메인 화면으로
      isCreate = true;
      if(isCreate){
        console.log("회원가입 성공");
        // <Link to = "/dashboard/Dashboard"></Link>
      }else{
        console.log("회원가입 실패");
      }
      
    })
    .catch( e => {
      isCreate = false;
      console.log(e);
    });
  }

  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h2>환영합니다. E-oom입니다.</h2>
                    <p className="text-muted">계정을 생성합니다.</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="User First-name"
                        autoComplete="userfname"
                        name="fname"
                        values={this.state.fname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="User Last-name"
                        autoComplete="userlname"
                        name="lname"
                        values={this.state.lname}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        values={this.state.email}
                        onChange={this.handleChange}
                      />
                      <CInputGroupPrepend>
                      {/* <CInputGroupText action onClick={this.handleCheck}>중복</CInputGroupText> */}
                        <CButton color="light" onClick={this.handleCheck}>중복</CButton>
                      </CInputGroupPrepend>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="pw"
                        values={this.state.pw}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="re_pw"
                        values={this.state.re_pw}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-phone" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Phone Number"
                        autoComplete="phone"
                        name="phone"
                        values={this.state.phone}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CCol md="3">
                        <CLabel htmlFor="date-input">Date Input</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          type="date"
                          id="date-input"
                          placeholder="date"
                          name="birth"
                          values={this.state.birth}
                          onChange={this.handleChange}
                        />
                      </CCol>
                    </CInputGroup>
                    <CButton 
                      color="info" 
                      block
                      onClick={this.handleSubmit}>
                      회원 가입
                    </CButton>
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CButton className="mb-1" block color="danger">
                        <span>google로 가입하기</span>
                      </CButton>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CButton className="mb-1" block color="success">
                        <span>naver로 가입하기</span>
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Register;
