import React, { Component } from "react";
import { Link } from "react-router-dom"; //****
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CEmbed,
  CEmbedItem,
  CSwitch, //****
  CFormGroup, //****
  CLabel, //****
  CForm,
  CButtonToolbar, //****
} from "@coreui/react";
import SWR from '../../meet/ShowWebRTC'

class PrepareRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_num: "",
      room_info: "",
      room_link: "",
      // test: true,
    };
    // this.recieveData = this.recieveData.bind(this);
  }

  componentWillMount() {
    //this.setState를 통해서 state 값을 변경해 줍니다.
    var recievedMessage = this.props.location.state;
    // this.setState({
    //   room_info : recievedMessage['room_info'],
    //   room_num : recievedMessage['room_num']
    // });
    this.state.room_info = recievedMessage['room_info'];
    this.state.room_num = recievedMessage['room_num'];
    this.state.room_link = this.state.room_info['room_link'];
    console.log(this.state);
  }

  // componentDidMount() {
  //   var recievedMessage = this.props.location.state;
  //   this.setState({
  //     room_info : recievedMessage['room_info'],
  //     room_num : recievedMessage['room_num']
  //   });
  //   // this.state.room_info = recievedMessage['room_info'];
  //   // this.state.room_num = recievedMessage['room_num'];
  //   console.log(this.state);
  // }

  render() {
    console.log(this.state);
    return (
      <>
        <CRow>
          {/* 회의 참여 준비화면 */}
          <CCol>
            <CCard>
              <CCardBody>
                {/* 회의 준비 화면 레이아웃 구성
                  비디오 on/off, 오디오 on/off, 비디오화면, 참여button
                  참여button 클릭 시 -> 회의 화면으로 이동
                */}
                <CRow>
                  <CCol xs="12" md="2"></CCol> {/* 여백 */}
                  <CCol xs="12" md="4">
                    <CEmbed> <SWR param={this.state.room_link}>내 화면</SWR></CEmbed>
                  </CCol>
                  {/* 중간중간 공백 어케줌? ㅠㅠ */}
                  <CCol xs="12" md="4">
                    {this.state.room_info && this.state.room_num ? (
                      <div>
                        <h2>교육에 참여하시겠습니까?</h2>
                        <CButtonToolbar justify="center">
                          <Link
                            to={{
                              pathname: `../../meet/MeetScreen/${this.state.room_link}`,
                              state: {
                                room_info: this.state.room_info,
                                room_num: this.state.room_num,
                              },
                            }}
                          >

                            <CButton
                              active
                              tabIndex={-1}
                              className="px-4"
                              color="info"
                            >
                              {" "}
                              참여{" "}
                            </CButton>
                          </Link>

                        </CButtonToolbar>
                      </div>
                    ) : (
                        <h2>호스트가 교육 화면을 시작하지 않았습니다.</h2>
                      )}
                    <CButtonToolbar justify="center">
                      <CForm action="" method="post">
                        <CFormGroup>
                          <CLabel htmlFor="btn_video">비디오 OFF/ON</CLabel>
                          <CSwitch
                            name={"btn_video"}
                            id={"btn_video"}
                            className={"mx-1"}
                            shape={"pill"}
                            color={"success"}
                            variant={"opposite"}
                            defaultChecked
                          />
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="btn_audio">오디오 OFF/ON</CLabel>
                          <CSwitch
                            name={"btn_audio"}
                            id={"btn_audio"}
                            className={"mx-1"}
                            shape={"pill"}
                            color={"warning"}
                            variant={"opposite"}
                            defaultChecked
                          />
                        </CFormGroup>
                      </CForm>
                    </CButtonToolbar>
                  </CCol>
                  <CCol xs="12" md="2"></CCol>
                  {/* 여백 */}
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default PrepareRoom;
