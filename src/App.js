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

class App extends Component {
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
    <center>
    <div style={{marginTop:25}}>
			     
			        
					<CardHeader title="Split expenses with friends."
						titleStyle={{fontSize: '58px', fontFamily: 'Sans-serif', fontWeight: 'bold', color:"#444444"}}
						avatar={<span> <img style={{width:64,height:64}} src="images/logo.png" alt="logo "/> </span>}
					/>
					<CardHeader
						title={<span><b>Share bills</b> and IOUs.<b> Make sure</b> everyone gets paid back.<b> Totally free</b> for web,iPhone & Android.</span>}
						titleStyle={{ fontSize: '21px', fontFamily: 'lato', color:"#444444", marginTop: "-20px"}}
					/>
	                
	</div>
    </center>
                    <img style={{height:'50%',width:'50%',marginLeft:'15%' }} src="images/ada.png" alt=""/>
                    <img style={{height:'400px'}} src="images/iphone.png" alt=""/>

    <br/>
    <br/>
	<center>
					    
						<FlatButton style={{width: 250,height:80, borderRadius:5,border:'1px solid #de0000',boxShadow:'25px'}} labelStyle={{textTransform: 'none',color: '#FFFFFF',fontSize: 28}} backgroundColor='#FF5216' hoverColor='#FF5266' rippleColor='#efefef' label= "Get started  now!!(it's free!!)" href="/Signup" />
                        
    </center>
    <br/>
    <center>
    <Card style={{height:125,paddingTop:40}}>
			        
			        <span style={{paddingLeft:10}}>
						<a href="https://lifehacker.com/5936301/splitwise-keeps-track-of-your-split-bills-settles-them-via-paypal"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/lifehacker.png" alt=""/></a>
						<a href="https://bucks.blogs.nytimes.com/2011/04/28/a-new-tool-splittherent-com-for-roommates/"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/newyorktimes.png" alt=""/></a>
						<a href="https://www.aol.com/"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/aoinews.png" alt=""/></a>
						<a href="https://www.buzzfeed.com/alannaokun/tricks-to-make-living-with-roommates-so-much-better?utm_term=.wcVLa7KLM#.vfglKjpl5"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/buzzfeed.png" alt=""/></a>
						<a href="https://www.businessinsider.in/This-Startup-Is-Trying-To-Solve-The-Most-Annoying-Part-About-Going-Out-To-Eat-With-Friends/articleshow/21491792.cms"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/bussinessinsider.png" alt=""/></a>
						<a href="https://www.msn.com/en-us/money"><img  style={{marginLeft: 15,cursor:'pointer'}} height="36" src="images/msnmoney.png" alt=""/></a>
					</span>	
						
    </Card>                  
     </center>	
     <br/>
     <br/>
     
     <CardHeader title="IOUs made easy."
						titleStyle={{fontSize: '58px', fontFamily: 'Sans-serif', fontWeight: 'bold', color:"#444444"}} style={{marginLeft:'15%'}}/>
	<center>
	<CardHeader title={<span>Splitwise takes the trouble out of sharing expenses – with friends, with roommates, with anyone.</span>}
						titleStyle={{ fontSize: '21px', fontFamily: 'lato', color:"#444444", marginTop: "-20px"}}/>

    
    <img src="images/wedothemath.jpg" alt=""/>		
    <br/>
    <br/> 			
    <img src="images/friendly.jpg" alt=""/>
	<br/>
    <br/> 			
    <img src="images/wearefairnessexperts.jpg" alt=""/>
	<br/>
    <br/> 			
    <img src="images/bring.jpg" alt=""/>
	<br/>
	<br/>
	
	<CardHeader style={{backgroundColor:'#eee', border:'1px solid #ccc', marginLeft:'15%',marginRight:'15%' }} title={<span><b>NEW!</b> Check out <a href='plates.splitwise.com'>Plates</a>, our free iPhone app to help you split restaurant bills. <a href='plates.splitwise.com'>Learn more</a></span>}
						titleStyle={{ fontSize: '21px', fontFamily: 'lato', color:"#444444"}}/>
    

    <br/>
    <br/>
    </center>
    <CardHeader title="And best of all? It's totally free."
						titleStyle={{fontSize: '45px', fontFamily: 'Sans-serif', fontWeight: 'bold', color:"#444444"}} style={{marginLeft:'15%'}} />
	
	<CardHeader title={<span>Ready to give a splitwise spin?</span>} style={{marginLeft:'15%'}} titleStyle={{ fontSize: '21px', fontFamily: 'lato', color:"#444444"}}/>
    <br/>
    <br/>

    <Card style={{backgroundColor:'#666'}}>
    <CardTitle title='Made with ☻ in Providence, RI, USA' titleStyle={{marginLeft:'15%',color:'white',float:'left'}}>
    </CardTitle>
    <img src='images/fb.png' alt='Facebook' style={{marginLeft:'20%'}}/>
    <img src='images/twitter.png' alt='Twitter' style={{marginLeft:'1%'}}/>
    <img src='images/mixpanel.png' alt='Mixpanel' style={{marginLeft:'1%',marginRight:'15%'}}/>
    <CardTitle title='Copyright © 2018 Splitwise, Inc. All rights reserved.' titleStyle={{fontSize:'18px',marginLeft:'15%',color:'white'}}>
    </CardTitle>
    </Card>
    </MuiThemeProvider>
    );
  }
}

export default App;
