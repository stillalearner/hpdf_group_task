import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card,CardHeader,CardTitle,CardMedia,CardActions} from 'material-ui/Card';
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

const container={ 
              height: 55,
              backgroundColor: '#5BC5A7',
                width:'wrap-content',
                margin:'auto',
                position:'relative'
                };

const text={
                  fontFamily:'Times-New-Roman',
                  marginTop:'8px',
                  display: 'inline-block',
                  textAlign:'center',
                  paddingTop:'25px',
                  height: '100%',
                  color:'white',
                  textDecoration:'none',
                  fontSize:'24px'
                  };

const button={
             border:'5px solid black',
             }

class Signup extends Component {
  render() {
    return (
    
    
    <MuiThemeProvider>
    <Card zDepth={2}>
        <Toolbar style={container}>


            <ToolbarGroup firstChild={true} style={{marginLeft:'50px'}}>
               
                <a href='/' style={text}>S  P  L  I  T  W  I  S  E</a>
                
            </ToolbarGroup>

        
             <ToolbarGroup style={{marginRight:'20px'}}>
             
             <Card zDepth={2} style={{margin:'10px'}}>
             <FlatButton style={{button}} backgroundColor='#48BE9D' hoverColor='#48C89D' rippleColor='#efefef' marginRight="100sp" label="Log in" href="/Login" labelStyle={{color:'white',fontWeight:'Bold'}} />
             </Card>
             <Card zDepth={3}>
              <FlatButton style={{button}} backgroundColor='#FF5216' hoverColor='#FF526F' rippleColor='#efefef' label="Sign up" href="/Signup" labelStyle={{color:'white',fontWeight:'Bold'}}/>
              </Card>
             
             </ToolbarGroup>
        
        </Toolbar>
    </Card>
    <Divider/>
		<div style={{display:'flex', flexDirection:'row'}}>
                <div style={{marginLeft:470, marginTop:100, marginRight:60}} >
					<a href='/'><img style={{height:200,width:200}} src="images/logo.png" alt=" "/></a>
                </div>
               
                    <form style={{marginTop:90,marginLeft:-25}}>
                        
                        <h3 style={{color:'#333333',marginTop:25, fontWeight:100}}>Here’s my <b>email address:</b></h3>
                        <TextField 
                            underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} type="email"/>
                        <h3 style={{color:'#333333',marginTop:25, fontWeight:100}}>And here’s my<b> password:</b></h3>
                        <TextField
                            underlineShow={false} style={{border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25,marginTop:-10, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'}} type="password"/><br/><br/>
                        <FlatButton style={{height:50, fontSize:30, borderRadius:5, marginTop:5, border:'1px solid #de0000',
                    boxShadow: '0px 0px 3px #bfbfbf'}} labelStyle={{textTransform: 'none', color: '#FFFFFF', fontSize:20,fontFamily:'lobo',
                    textShadow: '0px -1px 0px #5d5d5d'}}
                        backgroundColor='#ff6200' hoverColor='#ff4500' rippleColor='#efefef' 
                        label="Login!"  href="#LoginButtonRequest" />
                                                
                        <p style={{color:'#333333',fontSize:14,marginTop:10}}>Don't use USD for currency?
                        
                        <a style={{color:'#005580',fontSize:14,textDecoration: 'none', cursor:'pointer',}} href='#USDRequest'>Click here.</a>
                        
                        </p>
                    </form>
         </div>
      
     </MuiThemeProvider>    
      
    );
  }
}

export default Signup;
