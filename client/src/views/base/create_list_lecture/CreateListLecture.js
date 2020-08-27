// import React, { useState, Component } from "react";
// import { Link } from "react-router-dom"; //****
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CListGroup,
//   CListGroupItem,
//   CRow,
// } from "@coreui/react";

// const { Component } = require("react");

// import usersData from "../../users/UsersData";

// const CreatedLecture = usersData.map((usersData) => (
//   <Link to="create_list_room/ListRoom">
//     <CListGroupItem key={usersData.id}>{usersData.name}</CListGroupItem>
//   </Link>
// ));

// const AttendingCourse = usersData.map((usersData) => (
//   <CListGroupItem disabled key={usersData.id}>
//     {usersData.name}
//   </CListGroupItem>
// ));

// class CreateListLecture extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <CRow>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="6">
//             <CCard>
//               <CCardHeader align="center">
//                 000 님이 개설중인 Class 목록입니다.
//                 <small> </small>
//               </CCardHeader>
//               <CCardBody>
//                 <CListGroup align="center">
//                   {/* 1. usersData 이름 동적으로 배열추가
//                       2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
//                   {CreatedLecture}
//                 </CListGroup>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="3"></CCol>
//           <CCol sm="12" xl="6">
//             <CCard>
//               <CCardHeader align="center">
//                 000 님이 수강중인 Class 목록입니다.
//                 <small> </small>
//               </CCardHeader>
//               <CCardBody>
//                 <CListGroup align="center">
//                   {/* 1. usersData의 이름만이라도 리스트업 해보기
//                     2. 각 itme 클릭 시 -> ListLecture로 이동시키기 */}
//                   {AttendingCourse}
//                   {/* 지금은 생성하기 탭이니까 수강하는 거는 안보이게? */}
//                 </CListGroup>
//               </CCardBody>
//             </CCard>
//           </CCol>
//           <CCol sm="12" xl="3"></CCol>
//         </CRow>
//       </>
//     );
//   }
// }

// export default CreateListLecture;

// import React, { Component } from "react";
// import userData from "../../users/UsersData";
// import LectureAdd from "./ClassAdd";
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3) * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 1080,
//   },
//   progress: {
//     magin: theme.spacing(2) * 2,
//   },
// });

// class CreateListLecture extends Component {
//   state = {
//     usersDatas: "",
//     completed: 0,
//   };

//   componentDidMount() {
//     this.timer = setInterval(this.progress, 20);
//     this.callApi()
//       .then((res) => this.setState({ usersDatas: res }))
//       .catch((err) => console.log(err));
//   }

//   //동기식으로 실행
//   callApi = async () => {
//     const response = await fetch("/api/usersDatas"); //추가해야함
//     const body = await response.json();
//     return body;
//   };
//   //애니메이션
//   progress = () => {
//     const { completed } = this.state;
//     this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
//   };
//   render() {
//     const { classes } = this.props;
//     return (
//       <div>
//         <LectureAdd />
//         <Paper className={classes.root}>
//           <Table className={classes.table}>
//             <TableHead>
//               <TableRow>
//                 <TableCell>번호</TableCell>
//                 <TableCell>개설중인 수업 목록</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.usersDatas ? (
//                 this.state.usersDatas.map((c) => {
//                   return (
//                     <usersData
//                       key={c.id} //map을 이용해 다수의 정보 출력할 때는 key사용해야함
//                       id={c.id}
//                       classtitle={c.classtitle}
//                     />
//                   );
//                 })
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan="6" align="center">
//                     <CircularProgress
//                       className={classes.progress}
//                       variant="determinate"
//                       value={this.state.completed}
//                     />
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </Paper>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(CreateListLecture);

// import React, { Component } from "react";
// import Lecture from "../../../components/Lecture"; //Lecture 목록 불러오기
// import Paper from "@material-ui/core/Paper";
// import Table from "@material-ui/core/Table";
// import TableHead from "@material-ui/core/TableHead";
// import TableBody from "@material-ui/core/TableBody";
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell";
// import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 1080,
//   },
// });

// const lectures = [
//   {
//     num: 1,
//     title: "시플밍",
//   },
//   {
//     num: 2,
//     title: "컴시관",
//   },
//   {
//     num: 3,
//     title: "객지플",
//   },
// ];
// class CreateListLecture extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>번호</TableCell>
//               <TableCell>수업명</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {lectures.map((c) => {
//               return <Lecture key={c.num} num={c.num} title={c.title} />;
//             })}
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }
// }
// export default withStyles(styles)(CreateListLecture);