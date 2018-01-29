import React, { Component } from 'react';
import './Dashboard.css';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardHeader,CardTitle} from 'material-ui/Card';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Home from 'material-ui/svg-icons/action/home';
import QueryBuilder from 'material-ui/svg-icons/action/query-builder';
import Storage from 'material-ui/svg-icons/device/storage';
import SupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import TagFaces from 'material-ui/svg-icons/image/tag-faces';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function handleClick() {
  window.location.reload();
}

const leftouter={
                 display:'inline-block',
                 marginTop:'0px',
                 marginLeft:'60px',
                 width:'250px',
                 cursor:'pointer',
                 float:'left',
                 position:'relative'
                 }

const middleouter={
                   display:'inline-block',
                   width:'600px',
                   marginTop:'0px',
                   marginLeft:'20px',
                   cursor:'pointer',
                   position:'relative',
                   float:'left'


                  }

const container={ 
              height: 35,
              backgroundColor: '#5BC5A7',
                width:'wrap-content',
                margin:'auto',
                position:'relative'
                };


const buttonlinks={
                  fontFamily:'Sans-serif',
                  fontWeight:'Bold',
                  marginTop:'4px',
                  display: 'inline-block',
                  textAlign:'center',
                  paddingTop:'15px',
                  height: '100%',
                  color:'white',
                  textDecoration:'none'
                  }

 const friends = [
  'A','B','C','D','E'
];
 
   


class Dashboard extends React.Component {
   state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

    state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
     const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose}/>,
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleClose}/>,
    ];
    return (
      <MuiThemeProvider>
      <div>
      <Card zDepth={1}>
        <Toolbar style={container}>


            <ToolbarGroup firstChild={true} style={{marginLeft:'50px'}}>
               
                <a style={buttonlinks}>S  P  L  I  T  W  I  S  E</a>
                
            </ToolbarGroup>

        
             <ToolbarGroup>
             <List style={{display:'inline-block'}}>
             <ListItem disabled={true} style={{color:'white'}}leftAvatar={<Avatar style={{paddingTop:'5px'}}size={30} src="./avatar.jpeg"/>}><a>Sachin Singla</a> </ListItem>
             </List>
             </ToolbarGroup>
            </Toolbar>
            </Card>

      <div style={leftouter}>
             
              <br/>              
              <Card>
                <List>
                  <ListItem primaryText="Dashboard" leftIcon={<Home/>} style={{color:'#5BC5A7',fontWeight:'Bold'}} onClick={handleClick}/>
                  <ListItem primaryText="Recent Activity" leftIcon={<QueryBuilder/>} style={{color:'#5BC5A7',fontWeight:'Bold'}} href='/RecentActivity'/>
                  <ListItem primaryText="All Expenses" leftIcon={<Storage/>} style={{color:'#5BC5A7',fontWeight:'Bold'}} href='/AllExpenses'/>
                </List>
               </Card>
               <Card>
                <CardTitle style={{fontWeight:'Bold', marginTop:'18px'}}>Groups</CardTitle>
                <List>
                  <ListItem primaryText="My Group" leftIcon={<SupervisorAccount/>} style={{color:'#5BC5A7',fontWeight:'Bold'}}/>
                </List>
               </Card>
                <Card>
               <CardTitle style={{fontWeight:'Bold', marginTop:'18px'}}>Friends</CardTitle>
                 <List>
                  <ListItem primaryText="A" leftIcon={<TagFaces/>} style={{color:'#5BC5A7',fontWeight:'Bold'}}/>
                   <ListItem primaryText="B" leftIcon={<TagFaces/>} style={{color:'#5BC5A7',fontWeight:'Bold'}}/>
                  </List>
               </Card>
           </div>



      <div style={middleouter}>

        <Card style={{height:'470px'}}>
        <CardTitle style={{fontWeight:'Bold', marginTop:'18px',fontSize:25}}>Dashboard</CardTitle>
        <div>
        <RaisedButton label="Add Bill" backgroundColor='#FF652F' style={{marginLeft:'15px'}}labelStyle={{fontWeight:'Bold',color:'white'}} onClick={this.handleOpen} />
        <Dialog title="Add Bill" titleStyle={{color:'#5BC5A7'}}actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
         <div>
        <AutoComplete hintText="With Whom?" searchText={this.state.searchText} onUpdateInput={this.handleUpdateInput} onNewRequest={this.handleNewRequest} dataSource={friends} filter={(searchText, key) => (key.indexOf(searchText) !== -1)} openOnFocus={true}/>
      </div>
        </Dialog>
        </div>
        <br/>
        <Divider/>
        <Card>

        </Card>
        </Card>
      
       </div>

          
        </div>
        </MuiThemeProvider>
    );
  }
}
export default Dashboard;