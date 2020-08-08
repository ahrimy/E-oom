import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CTabPane,
  CDataTable,
  CBreadcrumb,
  CBreadcrumbItem,
  CLink,
  CSwitch,
  CNavbar,
  CForm,
  CInput,
  //여기부터 문의사항
  CFormGroup,
  CFormText,
  CTextarea,
  CInputFile,
  CInputRadio,
  CLabel,
  CCardFooter,
  CSelect,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react"; //문의사항

import usersData from "../../users/UsersData";

// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };
// const fields = ["name", "registered", "role", "status"];

const Mypage = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <CRow>
        <CCol>
          <CCard accentColor="success">
            <CCardHeader>마이페이지</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="4">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem
                      onClick={() => setActiveTab(0)}
                      action
                      active={activeTab === 0}
                    >
                      프로필
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(1)}
                      action
                      active={activeTab === 1}
                    >
                      수업
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(2)}
                      action
                      active={activeTab === 2}
                    >
                      설정
                    </CListGroupItem>
                    <CListGroupItem
                      onClick={() => setActiveTab(3)}
                      action
                      active={activeTab === 3}
                    >
                      문의사항
                    </CListGroupItem>
                  </CListGroup>
                </CCol>
                <CCol xs="8">
                  <CTabContent>
                    <CTabPane active={activeTab === 0}>
                      {/*사이즈 조정 <CCol xs="12" sm="6" md="4"> */}

                      <CCardHeader>
                        개인 프로필
                        <CCardBody>
                          <h4>이름</h4>
                        </CCardBody>
                      </CCardHeader>
                      <CCardHeader>개인 회의 ID</CCardHeader>
                      <CCardHeader>로그인 이메일</CCardHeader>
                      <CCardHeader>사용자 유형</CCardHeader>
                      <CCardHeader>용량</CCardHeader>
                      <CCardHeader>언어</CCardHeader>
                      <CCardHeader>Date and Time</CCardHeader>
                      <CCardHeader>Calendar and Contact</CCardHeader>
                      <CCardHeader>호스트 키</CCardHeader>
                      <CCardHeader>로그인된 장치</CCardHeader>

                      {/* </CCol>
                      {/* <CListGroupItem accent="primary">
                        <CDataTable
                          items={usersData}
                          fields={fields}
                          scopedSlots={{
                            status: (item) => (
                              <td>
                                <CBadge color={getBadge(item.status)}>
                                  {item.status}
                                </CBadge>
                              </td>
                            ),
                          }}
                        />
                      </CListGroupItem> */}
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>수업목록?class목록?</p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <CNavbar light color="light">
                        {/* <CForm inline> */}
                        <h6>Security</h6>
                        {/* </CForm> */}
                      </CNavbar>
                      <CCardBody>
                        대기실
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        강의실 비밀번호
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        초대링크 클릭시 자동으로 비밀번호 삽입
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CNavbar light color="light">
                        <h6>강의 예약</h6>
                      </CNavbar>
                      <CCardBody>
                        비디오
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        오디오
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        호스트 참여 전 접속 허용
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        입장시 참가자 음소거 설정
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        예정된 회의 알림
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        개인ID로 생성
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CNavbar light color="light">
                        <h6>회의 중(기본)</h6>
                      </CNavbar>
                      <CCardBody>
                        채팅
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        파일 전송
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        화면공유(호스트만/모두)
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        원격제어
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        화이트보드
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        참가자가 이름을 바꾸도록 허용
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CNavbar light color="light">
                        <h6>회의 중(고급)</h6>
                      </CNavbar>
                      <CCardBody>
                        가상 배경 이미지
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CCardBody>
                        비디오 필터
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                      <CNavbar light color="light">
                        <h6>이메일 알림</h6>
                      </CNavbar>
                      <CCardBody>
                        회의가 취소된 경우 이메일 알림
                        <CSwitch
                          className={"mx-1"}
                          variant={"3d"}
                          color={"success"}
                          defaultChecked
                        />
                      </CCardBody>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <CCardBody>
                        <CForm
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          <CFormGroup row>
                            <CCol md="1"></CCol>
                            <CCol xs="12" md="11">
                              <p className="form-control-static">
                                {" "}
                                **** 개선사항이나 문제점, 요구사항을 적어
                                보내주세요. ****
                              </p>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="email-input">E-mali</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput
                                type="email"
                                id="email-input"
                                name="email-input"
                                placeholder="Enter Email"
                                autoComplete="email"
                              />
                              <CFormText className="help-block">
                                답변 받을 e-mail을 적어주세요.
                              </CFormText>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="date-input">날짜</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInput
                                type="date"
                                id="date-input"
                                name="date-input"
                                placeholder="date"
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="select">종류</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CSelect custom name="select" id="select">
                                <option value="0">문제점</option>
                                <option value="1">불편사항</option>
                                <option value="2">개선사항</option>
                                <option value="3">기타의견</option>
                              </CSelect>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel htmlFor="textarea-input">문의사항</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CTextarea
                                name="textarea-input"
                                id="textarea-input"
                                rows="9"
                                placeholder="여기에 적어주세요..."
                              />
                            </CCol>
                          </CFormGroup>

                          <CFormGroup row>
                            <CCol md="10">
                              <CLabel>
                                문의 사항을 보내기 전 다시 한 번 생각해보세요.{" "}
                              </CLabel>
                            </CCol>
                            <CCol md="2">
                              <CFormGroup variant="checkbox">
                                <CInputRadio
                                  className="form-check-input"
                                  id="radio1"
                                  name="radios"
                                  value="option1"
                                />
                                <CLabel variant="checkbox" htmlFor="radio1">
                                  예
                                </CLabel>
                              </CFormGroup>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CLabel col md="3" htmlFor="file-input">
                              File input
                            </CLabel>
                            <CCol xs="12" md="9">
                              <CInputFile id="file-input" name="file-input" />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol md="3">
                              <CLabel>Multiple File input</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                              <CInputFile
                                id="file-multiple-input"
                                name="file-multiple-input"
                                multiple
                                custom
                              />
                              <CLabel
                                htmlFor="file-multiple-input"
                                variant="custom-file"
                              >
                                Choose Files...
                              </CLabel>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CLabel col md={3}>
                              Custom file input
                            </CLabel>
                            <CCol xs="12" md="9">
                              <CInputFile custom id="custom-file-input" />
                              <CLabel
                                htmlFor="custom-file-input"
                                variant="custom-file"
                              >
                                Choose file...
                              </CLabel>
                            </CCol>
                          </CFormGroup>
                        </CForm>
                      </CCardBody>
                      <CCardFooter>
                        <CRow>
                          <CCol xs="12" md="10"></CCol>
                          <CCol md="2">
                            <CButton type="submit" size="sm" color="primary">
                              <CIcon name="cil-scrubber" /> Submit
                            </CButton>
                          </CCol>
                        </CRow>
                      </CCardFooter>
                    </CTabPane>
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Mypage;