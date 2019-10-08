import React from 'react';
import Contact from './Contact'

const users = [
{
avatar: "https://icon-library.net/images/avatar-icon-png/avatar-icon-png-25.jpg",
name: "JOE",
online : true
}, 

{
avatar: "http://www.web-soluces.net/webmaster/avatar/GetAvataaarsCom-Femme.png",
name: "AL",
online : false

},
{
avatar: "https://i.dlpng.com/static/png/1686552--avatar-png-512_512_preview.png",
name: "FLO",
online : true,
    
    },
    {
avatar: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
name: 'WILLY',
online : false,
        
    },
    {
avatar: "https://cdn3.iconfinder.com/data/icons/flat-avatars-3/512/Flat_avatars_svg-10-512.png",
name: 'AIGHT',
online : true
            
            }, ];

function makeList() {
    return (
      
        
          users.map(member => <Contact {...member}/>)
        
    
    );
  }
  



  export default makeList;
