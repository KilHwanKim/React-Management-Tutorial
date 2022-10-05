import { Component } from 'react';
import './App.css';
import Customer from './componets/Customer';
import { Table, TableRow } from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import {Paper} from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table:{
    minWidth:1080,

  }

})

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name': '김길환',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any2',
  'name': '황주영',
  'birthday': '961222',
  'gender': '여자',
  'job': '리더'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any3',
  'name': '이대규',
  'birthday': '961222',
  'gender': '남자',
  'job': '센터장'

}
]

class App extends Component {
  render(){
  return (
    <Paper className={this.props.root}>
    <Table className={this.props.table}>
      <TableRow>
        <TableCell>번호</TableCell>
        <TableCell>이미지</TableCell>
        <TableCell>이름</TableCell>
        <TableCell>생년월일</TableCell>
        <TableCell>성별</TableCell>
        <TableCell>직업</TableCell>
      </TableRow>

    <TableBody>
    {
      customers.map(c=> {
        return (
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job} />
        )
      })

    }
    </TableBody>
    </Table>
   </Paper>
    
  );  
  }
}

export default withStyles(styles)(App);
