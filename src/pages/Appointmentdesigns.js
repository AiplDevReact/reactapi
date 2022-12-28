/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom';

const Appointmentdesigns = () => {   

   const sites = [
    {
        "status": 200,
        "message": "Login Successful",
        "error": false,
        "data": {
            "salon": "DEMO2",
            "username": "TestManager",
            "token": "ca4cd1200f80a5829146d208f33d8889a856ef1b",
            "branch": "HS04",
            "backendauthorization": false,
            "foc": 0,
            "currency": "RM",
            "role": "ADMINISTRATOR",
            "sites": [
                {
                    "id": 22,
                    "itemsite_code": "HS01",
                    "itemsite_desc": "HEALSPA AMARA (HS01)"
                },
                {
                    "id": 29,
                    "itemsite_code": "HS04",
                    "itemsite_desc": "LIANGYI HEALTH TECHNOLOGY (HS04)"
                },
                {
                    "id": 31,
                    "itemsite_code": "HQ",
                    "itemsite_desc": "MICRODERME AESTHETICS PTE LTD (HQ)"
                },
                {
                    "id": 32,
                    "itemsite_code": "HS05",
                    "itemsite_desc": "LIANGYI SELETAR MALL (HS05)"
                },
                {
                    "id": 33,
                    "itemsite_code": "HS06",
                    "itemsite_desc": "HEALSPA FUNAN MALL (HS06)"
                },
                {
                    "id": 34,
                    "itemsite_code": "HS07",
                    "itemsite_desc": "LIANGYI HEALTH TECHNOLOGY (HS07)"
                },
                {
                    "id": 35,
                    "itemsite_code": "HS08",
                    "itemsite_desc": "LIANGYI TCM HILLION (HS08)"
                }
            ],
            "controlsite": "HS01",
            "session_id": "vifv37ia8usk182zsliel928nuepcjz3"
        }
    }
   ]

  return (
    <>
    {sites.map(item => {
        return(
           
        <div key={item}>
            <div style={{backgroundColor:'rgb(12,63,116)',color:'white',padding:'10px 0',display:'flex',justifyContent:'center'}}>
                <div style={{textAlign:'center',fontSize:'35px',margin:'0 auto',fontWeight:'bold'}}>
                    SUCCESSFULLY LOGGED IN!
                </div>
                <Link to={'/Appointment'}>
                    <div style={{marginRight:'20px',padding:'5px'}}>
                        
                        <button style={{display:'flex',alignItems:'center',background:'rgb(214,158,46)'}} className="px-3 py-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25.000000pt" height="25.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                
                                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                <path d="M426 2344 c-12 -31 -7 -329 6 -342 7 -7 30 -12 53 -12 23 0 46 5 53 12 13 13 18 311 6 342 -9 23 -109 23 -118 0z"/>
                                <path d="M956 2344 c-12 -31 -7 -329 6 -342 7 -7 30 -12 53 -12 23 0 46 5 53 12 13 13 18 311 6 342 -9 23 -109 23 -118 0z"/>
                                <path d="M1486 2344 c-12 -31 -7 -329 6 -342 7 -7 30 -12 53 -12 23 0 46 5 53 12 13 13 18 311 6 342 -9 23 -109 23 -118 0z"/>
                                <path d="M2016 2344 c-12 -31 -7 -329 6 -342 7 -7 30 -12 53 -12 23 0 46 5 53 12 13 13 18 311 6 342 -9 23 -109 23 -118 0z"/>
                                <path d="M180 2015 l0 -145 1100 0 1100 0 0 145 0 145 -99 0 -99 0 -3 -86 c-5 -106 -20 -124 -104 -124 -84 0 -99 18 -104 124 l-3 86 -158 0 -158 0 -3 -86 c-5 -106 -20 -124 -104 -124 -84 0 -99 18 -104 124 l-3 86 -158 0 -158 0 -3 -86 c-4 -76 -7 -88 -28 -105 -23 -19 -100 -26 -136 -13 -28 11 -45 60 -45 134 l0 70 -160 0 -160 0 0 -80 c0 -73 -3 -83 -25 -105 -20 -20 -34 -25 -78 -25 -86 0 -101 18 -106 124 l-3 86 -99 0 -99 0 0 -145z"/>
                                <path d="M180 1780 l0 -50 1100 0 1100 0 0 50 0 50 -1100 0 -1100 0 0 -50z"/>
                                <path d="M180 945 l0 -745 1100 0 1100 0 0 745 0 745 -1100 0 -1100 0 0 -745z m970 615 c18 -18 20 -33 20 -140 0 -115 -1 -122 -25 -145 -23 -24 -30 -25 -140 -25 -110 0 -117 1 -140 25 -24 23 -25 30 -25 145 0 162 -2 160 165 160 112 0 127 -2 145 -20z m550 0 c18 -18 20 -33 20 -140 0 -115 -1 -122 -25 -145 -23 -24 -30 -25 -140 -25 -110 0 -117 1 -140 25 -24 23 -25 30 -25 145 0 162 -2 160 165 160 112 0 127 -2 145 -20z m550 0 c18 -18 20 -33 20 -140 0 -115 -1 -122 -25 -145 -23 -24 -30 -25 -140 -25 -110 0 -117 1 -140 25 -24 23 -25 30 -25 145 0 162 -2 160 165 160 112 0 127 -2 145 -20z m-1651 -476 c18 -23 21 -41 21 -139 0 -98 -3 -116 -21 -139 -20 -26 -23 -26 -142 -26 -110 0 -123 2 -144 22 -22 20 -23 29 -23 142 0 109 2 122 22 143 20 22 29 23 144 23 120 0 123 0 143 -26z m550 0 c18 -23 21 -41 21 -139 0 -98 -3 -116 -21 -139 -20 -26 -23 -26 -142 -26 -110 0 -123 2 -144 22 -22 20 -23 29 -23 142 0 109 2 122 22 143 20 22 29 23 144 23 120 0 123 0 143 -26z m548 4 c22 -20 23 -29 23 -142 0 -109 -2 -122 -22 -143 -20 -22 -29 -23 -142 -23 -109 0 -122 2 -143 22 -21 20 -23 29 -23 138 0 104 2 120 21 144 20 26 23 26 142 26 110 0 123 -2 144 -22z m550 0 c22 -20 23 -29 23 -142 0 -109 -2 -122 -22 -143 -20 -22 -29 -23 -142 -23 -109 0 -122 2 -143 22 -21 20 -23 29 -23 138 0 104 2 120 21 144 20 26 23 26 142 26 110 0 123 -2 144 -22z m-1646 -477 c16 -20 19 -40 19 -142 0 -161 2 -159 -165 -159 -167 0 -165 -2 -165 156 0 63 5 124 11 135 17 32 47 39 167 36 106 -2 115 -4 133 -26z m550 0 c16 -20 19 -40 19 -142 0 -161 2 -159 -165 -159 -167 0 -165 -2 -165 156 0 63 5 124 11 135 17 32 47 39 167 36 106 -2 115 -4 133 -26z m550 0 c16 -20 19 -40 19 -142 0 -161 2 -159 -165 -159 -167 0 -165 -2 -165 156 0 63 5 124 11 135 17 32 47 39 167 36 106 -2 115 -4 133 -26z m550 0 c16 -20 19 -40 19 -142 0 -161 2 -159 -165 -159 -167 0 -165 -2 -165 156 0 63 5 124 11 135 17 32 47 39 167 36 106 -2 115 -4 133 -26z"/>
                                <path d="M882 1418 l3 -123 120 0 120 0 0 120 0 120 -123 3 -123 3 3 -123z"/>
                                <path d="M1434 1527 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 3 123 3 122 -121 0 c-90 0 -122 -3 -126 -13z"/>
                                <path d="M1984 1527 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 3 123 3 122 -121 0 c-90 0 -122 -3 -126 -13z"/>
                                <path d="M334 1057 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 0 120 0 120 -118 3 c-91 2 -119 0 -123 -11z"/>
                                <path d="M884 1057 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 0 120 0 120 -118 3 c-91 2 -119 0 -123 -11z"/>
                                <path d="M1434 1057 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 0 120 0 120 -118 3 c-91 2 -119 0 -123 -11z"/>
                                <path d="M1984 1057 c-2 -7 -3 -62 -2 -123 l3 -109 120 0 120 0 0 120 0 120 -118 3 c-91 2 -119 0 -123 -11z"/>
                                <path d="M337 593 c-4 -3 -7 -60 -7 -125 l0 -118 125 0 125 0 0 119 c0 99 -3 120 -16 125 -21 8 -219 8 -227 -1z"/>
                                <path d="M887 593 c-4 -3 -7 -60 -7 -125 l0 -118 125 0 125 0 0 119 c0 99 -3 120 -16 125 -21 8 -219 8 -227 -1z"/>
                                <path d="M1443 594 c-10 -4 -13 -39 -13 -125 l0 -119 125 0 126 0 -3 123 -3 122 -110 2 c-60 1 -116 -1 -122 -3z"/>
                                <path d="M1993 594 c-10 -4 -13 -39 -13 -125 l0 -119 125 0 126 0 -3 123 -3 122 -110 2 c-60 1 -116 -1 -122 -3z"/>
                                </g>
                            </svg>
                            <div style={{marginLeft:'10px'}}><b>Appointment</b></div>
                        </button>
                    </div>
                </Link>
            </div>
            
            
        
            {/* <div style={{textAlign:'center',fontSize:'25px',margin:'25px 0'}} className="">
                <b><h1>SITES LIST ITEMS</h1></b>
            </div> */}
            <div style={{display:'flex',margin:' 45px',alignItems:'center'}}>
                <div 
                    // style={{width:'100%'}}
                >
                    <div style={{borderRadius:'15px',padding:'25px',flexWrap:'wrap',display:'flex',justifyContent:'center',margin:'25px auto'}}>
                    {/* <div style={{width:'70%',borderRadius:'15px',padding:'25px',flexWrap:'wrap',display:'flex',justifyContent:'end',margin:'25px auto'}}> */}
                        
                            <div className="text-center" style={{fontSize:'35px',margin:'auto auto 25px auto',display:'flex'}}><b>User Profile</b></div>
                            <div style={{display:'flex',textAlign:'center',justifyContent:'center',marginRight:'-15px'}}>
                                <div className="rounded-lg" style={{width:'30%',padding:'5px',border:'3px solid rgb(173,18,95)'}}>
                                    <img src="../../../images/r4copy1.jpg" width="100%" className=""/>
                                </div>
                                <div style={{fontSize:'20px',background:'rgb(173,18,95)',padding:'25px',color:'white',width:'50%'}} className="rounded-lg">
                                    <div className='mb-3' style={{display:'flex',alignItems:'center',justifyContent:'space-center'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'auto'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                        
                                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M1110 2544 c-30 -8 -93 -33 -140 -56 -104 -50 -227 -167 -283 -268 -61 -111 -82 -197 -82 -335 0 -138 21 -224 82 -335 56 -101 179 -218 283 -268 115 -56 183 -72 310 -72 194 0 340 59 475 194 92 91 141 170 177 286 33 107 33 283 0 390 -36 114 -86 195 -176 286 -64 64 -99 90 -166 122 -47 23 -112 49 -145 57 -75 19 -261 19 -335 -1z"/>
                                        <path d="M930 1045 c-395 -87 -695 -402 -765 -804 -23 -127 -20 -193 8 -219 l23 -22 1086 0 1087 0 20 26 c26 33 27 95 6 215 -56 324 -265 599 -559 734 -159 74 -187 78 -531 81 -240 3 -325 0 -375 -11z"/>
                                        </g>
                                        </svg>
                                        <b>{item.data.username}</b>
                                    </div>
                                    <div className='mb-3' style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'auto'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                        
                                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                        <path d="M1173 2445 c-109 -30 -192 -91 -253 -187 -104 -160 -90 -373 35 -515 l37 -43 288 0 288 0 35 40 c132 145 141 373 21 547 -90 130 -295 202 -451 158z m332 -238 c38 -32 44 -93 15 -130 -13 -16 -34 -33 -49 -39 l-26 -10 34 -17 c55 -29 74 -81 49 -136 -13 -29 -55 -55 -87 -55 -56 0 -105 55 -99 113 5 48 -18 46 -158 -14 -121 -50 -125 -51 -144 -34 -42 38 -23 65 73 106 34 14 62 30 64 35 2 5 -28 22 -67 38 -80 33 -95 46 -86 81 11 43 42 40 170 -15 65 -28 126 -48 135 -45 13 4 16 14 13 45 -3 33 1 44 26 70 39 38 97 42 137 7z"/>
                                        <path d="M332 2338 c-9 -9 -12 -95 -12 -325 l0 -313 270 0 c149 0 270 2 270 4 0 3 -13 26 -30 53 -98 159 -102 350 -11 519 l40 74 -257 0 c-187 0 -261 -3 -270 -12z"/>
                                        <path d="M1714 2325 c9 -14 22 -35 30 -47 24 -38 54 -140 61 -208 4 -45 1 -89 -10 -144 -16 -76 -63 -187 -85 -201 -33 -21 11 -25 260 -25 l270 0 0 313 c0 230 -3 316 -12 325 -9 9 -83 12 -271 12 l-259 0 16 -25z"/>
                                        <path d="M100 1545 l0 -55 1180 0 1180 0 0 55 0 55 -1180 0 -1180 0 0 -55z"/>
                                        <path d="M210 761 l0 -630 22 -15 c16 -12 47 -16 110 -16 l88 0 0 439 c0 286 4 450 11 468 5 15 24 42 41 60 45 46 101 56 298 51 183 -4 210 -12 252 -70 l23 -33 3 -457 3 -458 622 0 c547 0 625 2 645 16 l22 15 0 630 0 629 -1070 0 -1070 0 0 -629z m1795 348 c22 -6 53 -23 69 -37 47 -44 56 -78 56 -220 0 -158 -17 -203 -90 -240 -45 -22 -48 -23 -402 -20 -344 3 -358 4 -385 24 -15 11 -38 36 -50 54 -21 30 -23 44 -23 177 0 113 4 153 16 179 19 40 62 74 108 84 51 13 656 11 701 -1z"/>
                                        <path d="M1298 1009 c-16 -9 -18 -27 -18 -152 0 -98 4 -147 12 -155 9 -9 103 -12 359 -12 303 0 350 2 363 16 13 12 16 41 16 149 0 127 -1 135 -22 149 -19 14 -70 16 -358 16 -209 0 -342 -4 -352 -11z"/>
                                        <path d="M547 1002 c-15 -17 -17 -63 -17 -460 l0 -442 215 0 215 0 0 450 c0 434 -1 450 -19 460 -12 6 -94 10 -199 10 -161 0 -181 -2 -195 -18z"/>
                                        </g>
                                        </svg>
                                        <b>{item.data.salon}</b>
                                    </div>
                                    <div className='mb-3' style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'auto'}} version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                        
                                            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1048 2544 c-261 -47 -496 -173 -685 -367 -106 -109 -167 -193 -228 -313 -93 -181 -135 -365 -135 -584 0 -364 127 -668 383 -917 109 -106 193 -167 313 -228 181 -93 365 -135 584 -135 219 0 403 42 584 135 120 61 204 122 313 228 197 192 321 426 368 693 19 112 19 336 0 448 -33 186 -112 375 -221 527 -67 92 -213 237 -305 302 -144 102 -336 181 -515 212 -108 19 -350 18 -456 -1z m347 -268 c92 -7 200 -38 302 -86 217 -102 379 -261 484 -475 80 -165 94 -230 94 -435 0 -153 -3 -185 -23 -255 -84 -290 -273 -517 -537 -646 -121 -58 -225 -88 -345 -97 -193 -16 -354 14 -525 97 -215 105 -373 266 -475 484 -72 152 -85 218 -85 417 0 153 3 185 23 255 82 282 265 507 521 639 48 25 127 57 177 71 84 24 239 45 294 39 14 -2 57 -5 95 -8z"/>
                                            <path d="M1095 2126 c-297 -68 -535 -282 -636 -574 -33 -96 -34 -99 -34 -272 0 -172 1 -177 33 -270 47 -135 111 -239 212 -340 102 -101 205 -165 340 -212 93 -32 98 -33 270 -33 172 0 177 1 270 33 135 47 238 111 340 212 101 102 165 205 212 340 32 93 33 98 33 270 0 172 -1 177 -33 270 -47 135 -111 238 -212 340 -102 101 -206 166 -340 211 -87 30 -107 33 -245 35 -101 3 -169 -1 -210 -10z m255 -306 l0 -79 38 -10 c20 -6 41 -11 46 -11 5 0 42 -16 82 -35 l74 -36 -26 -52 c-41 -81 -38 -80 -103 -47 -120 60 -248 64 -303 10 -50 -50 -30 -131 39 -158 15 -7 81 -28 147 -47 145 -44 182 -62 229 -114 41 -46 51 -84 45 -175 -7 -111 -85 -192 -210 -218 l-58 -12 0 -88 0 -88 -70 0 -70 0 0 89 0 88 -67 17 c-74 17 -213 81 -213 97 0 7 45 94 65 126 1 2 33 -13 71 -32 155 -78 310 -86 364 -18 28 36 26 79 -7 112 -30 30 -63 43 -219 90 -184 56 -250 124 -241 251 8 131 83 212 235 256 8 2 12 28 12 84 l0 80 70 0 70 0 0 -80z"/>
                                            </g>
                                        </svg>
                                        <b>{item.data.currency}</b>
                                    </div>
                                    <div className='mb-3' style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                                        <svg style={{marginRight:'auto'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                
                                            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                            <path d="M1815 2401 c-7 -45 -13 -51 -74 -74 -43 -16 -46 -16 -78 3 -19 11 -39 20 -46 20 -6 0 -39 -28 -74 -62 l-62 -61 25 -43 25 -42 -25 -55 c-22 -51 -27 -55 -65 -62 l-41 -7 0 -109 0 -109 95 0 95 0 -10 26 c-6 14 -10 56 -10 94 0 103 29 171 104 246 75 75 143 104 246 104 103 0 171 -29 246 -104 75 -75 104 -143 104 -246 0 -103 -29 -171 -104 -246 -75 -75 -143 -104 -246 -104 -38 0 -80 4 -94 10 l-26 10 0 -103 0 -102 78 0 c42 0 89 -3 104 -8 26 -7 27 -5 39 48 14 62 16 65 78 88 43 16 46 16 78 -3 19 -11 39 -20 46 -20 6 0 39 28 74 62 l62 61 -25 43 -25 42 25 55 c22 51 27 55 65 62 l41 7 0 98 0 98 -41 7 c-38 7 -43 11 -65 62 l-25 55 21 35 c11 19 20 39 20 46 0 15 -111 127 -127 127 -6 0 -27 -9 -46 -20 -32 -19 -35 -19 -78 -3 -61 23 -67 29 -74 74 l-7 39 -98 0 -98 0 -7 -39z"/>
                                            <path d="M1804 2181 c-59 -27 -109 -75 -138 -133 -21 -42 -26 -67 -26 -125 0 -90 17 -133 63 -162 20 -12 46 -38 58 -58 29 -46 72 -63 162 -63 166 0 276 112 277 281 0 61 -5 85 -26 127 -50 101 -135 152 -254 152 -52 0 -88 -6 -116 -19z m204 -90 c67 -34 102 -93 102 -171 0 -111 -79 -190 -190 -190 -111 0 -190 79 -190 190 0 111 77 189 188 190 33 0 67 -7 90 -19z"/>
                                            <path d="M1834 2006 c-30 -30 -34 -40 -34 -86 0 -46 4 -56 34 -86 30 -30 40 -34 86 -34 75 0 120 45 120 120 0 46 -4 56 -34 86 -30 30 -40 34 -86 34 -46 0 -56 -4 -86 -34z"/>
                                            <path d="M154 1686 l-34 -34 0 -446 0 -446 40 0 40 0 0 395 c0 441 2 453 60 474 53 18 1280 15 1324 -3 46 -19 56 -55 56 -208 l0 -130 40 32 40 32 0 150 0 150 -34 34 -34 34 -732 0 -732 0 -34 -34z"/>
                                            <path d="M280 1160 l0 -400 160 0 160 0 0 200 0 200 120 0 120 0 0 -200 0 -200 40 0 40 0 0 280 0 280 120 0 120 0 0 -280 0 -280 40 0 40 0 0 360 0 360 120 0 120 0 0 -360 0 -360 40 0 40 0 0 400 0 400 -640 0 -640 0 0 -400z m480 120 l0 -40 -200 0 -200 0 0 40 0 40 200 0 200 0 0 -40z"/>
                                            <path d="M1320 1080 l0 -320 40 0 40 0 0 320 0 320 -40 0 -40 0 0 -320z"/>
                                            <path d="M1775 1301 c-87 -40 -135 -120 -135 -223 1 -142 97 -238 240 -238 144 0 240 96 240 240 0 104 -53 187 -142 224 -52 22 -153 20 -203 -3z"/>
                                            <path d="M1000 1000 l0 -240 40 0 40 0 0 240 0 240 -40 0 -40 0 0 -240z"/>
                                            <path d="M680 920 l0 -160 40 0 40 0 0 160 0 160 -40 0 -40 0 0 -160z"/>
                                            <path d="M1752 753 c-13 -2 -22 -10 -19 -16 2 -7 35 -123 72 -259 38 -137 71 -248 75 -248 8 0 151 513 144 519 -7 7 -243 11 -272 4z"/>
                                            <path d="M1633 708 c-26 -13 -27 -18 -12 -107 10 -58 17 -72 56 -112 l45 -46 -22 -42 -21 -42 67 -117 c75 -132 72 -127 80 -120 6 7 -157 598 -165 597 -3 0 -16 -5 -28 -11z"/>
                                            <path d="M2011 424 c-70 -253 -86 -325 -67 -303 2 2 33 57 70 121 l67 117 -21 42 -22 42 45 46 c39 40 46 54 56 112 15 90 15 94 -14 107 -14 7 -27 12 -29 12 -1 0 -40 -133 -85 -296z"/>
                                            <path d="M120 634 c0 -39 5 -51 34 -80 l34 -34 574 0 574 0 17 29 c9 15 37 51 63 80 l46 51 -671 0 -671 0 0 -46z"/>
                                            <path d="M1485 602 c-109 -107 -165 -241 -165 -391 l0 -91 60 0 60 0 0 160 0 160 40 0 40 0 0 -160 0 -160 109 0 110 0 -69 121 -70 120 19 37 19 37 -38 41 c-32 35 -39 50 -45 103 -4 33 -10 63 -14 66 -5 2 -29 -17 -56 -43z"/>
                                            <path d="M2217 643 c-3 -4 -8 -35 -12 -67 -6 -49 -14 -66 -45 -100 l-38 -41 19 -37 19 -37 -70 -120 -69 -121 110 0 109 0 0 160 0 160 40 0 40 0 0 -160 0 -160 60 0 60 0 0 91 c0 162 -64 302 -192 417 -14 13 -28 20 -31 15z"/>
                                            <path d="M640 360 l0 -80 305 0 305 0 6 28 c11 50 25 103 31 118 4 12 -42 14 -321 14 l-326 0 0 -80z"/>
                                            <path d="M400 160 l0 -40 420 0 420 0 0 40 0 40 -420 0 -420 0 0 -40z"/>
                                            </g>
                                        </svg>
                                        <b>{item.data.role}</b>
                                    </div>
                                <div><b>{item.branch}</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',width:'100%',background:'rgb(29,112,29)',margin:'25px',borderLeft:'15px solid rgb(214,158,46)'}} className="rounded-lg">
                {/* <div style={{display:'flex',justifyContent:'center',width:'100%',background:'rgb(29,112,29)'}}> */}
                <div style={{margin:'auto'}}><h1 style={{textAlign:'center',fontSize:'35px',fontWeight:'bold',color:'white'}}>Sites List Items</h1></div>
                    <div style={{display:'flex',justifyContent:'center',width:'100%',borderRadius:'15px',padding:'25px',flexWrap:'wrap'}}>
                        
                        {item.data.sites.map(items =>
                            <div style={{background:'rgb(214,158,46)',width:'200px',height:'220px',color:'white',padding:'10px',margin:'15px',border:'2px solid #fff'}} className="rounded-lg shadow-xl" key={items.id}>
                                
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="56.000000pt" height="56.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                                    <path d="M280 2360 l0 -120 66 0 67 0 -7 92 c-3 50 -6 104 -6 120 0 28 -1 28 -60 28 l-60 0 0 -120z"/>
                                    <path d="M640 2360 l0 -120 66 0 67 0 -7 92 c-3 50 -6 104 -6 120 0 28 -1 28 -60 28 l-60 0 0 -120z"/>
                                    <path d="M1640 2360 l0 -120 66 0 67 0 -7 92 c-3 50 -6 104 -6 120 0 28 -1 28 -60 28 l-60 0 0 -120z"/>
                                    <path d="M2000 2360 l0 -120 66 0 67 0 -7 92 c-3 50 -6 104 -6 120 0 28 -1 28 -60 28 l-60 0 0 -120z"/>
                                    <path d="M120 2200 l0 -120 1080 0 1080 0 0 120 0 120 -40 0 c-39 0 -40 -1 -40 -35 0 -88 -42 -125 -142 -125 -97 0 -138 38 -138 126 0 33 -1 34 -40 34 -39 0 -40 -1 -40 -34 0 -89 -41 -126 -140 -126 -99 0 -140 37 -140 126 l0 34 -360 0 -360 0 0 -34 c0 -88 -41 -126 -138 -126 -100 0 -142 37 -142 125 0 34 -1 35 -40 35 -39 0 -40 -1 -40 -35 0 -88 -42 -125 -142 -125 -97 0 -138 38 -138 126 0 33 -1 34 -40 34 l-40 0 0 -120z"/>
                                    <path d="M202 1163 l3 -838 593 -3 c325 -1 592 0 592 3 0 3 -7 21 -14 40 l-15 35 -520 0 c-508 0 -522 1 -541 20 -20 20 -20 33 -20 740 0 707 0 720 20 740 20 20 33 20 900 20 867 0 880 0 900 -20 19 -19 20 -33 20 -381 l0 -360 35 -15 c19 -7 37 -14 40 -14 3 0 5 196 5 435 l0 435 -1000 0 -1000 0 2 -837z"/>
                                    <path d="M360 1160 l0 -680 491 0 c458 0 491 1 485 17 -4 9 -7 58 -7 108 0 326 264 586 593 586 54 0 102 -3 108 -6 7 -4 10 104 10 324 l0 331 -840 0 -840 0 0 -680z m940 580 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m-1280 -320 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -109 0 -120 11 -120 120 0 109 11 120 120 120 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c23 -23 27 -86 7 -114 -20 -27 -50 -16 -62 22 -8 29 -13 32 -47 32 -34 0 -38 -3 -38 -26 0 -36 -17 -64 -40 -64 -26 0 -40 29 -40 84 0 71 21 86 120 86 67 0 83 -3 100 -20z m-1280 -320 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -109 0 -120 11 -120 120 0 109 11 120 120 120 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m-640 -320 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -67 0 -83 3 -100 20 -17 17 -20 33 -20 100 0 109 11 120 120 120 67 0 83 -3 100 -20z m320 0 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -17 -17 -33 -20 -100 -20 -109 0 -120 11 -120 120 0 67 3 83 20 100 17 17 33 20 100 20 67 0 83 -3 100 -20z m251 10 c42 -23 12 -70 -45 -70 -23 0 -26 -4 -26 -38 0 -34 3 -39 32 -47 66 -20 40 -75 -34 -75 -62 0 -78 24 -78 120 0 67 3 83 20 100 22 22 97 28 131 10z"/>
                                    <path d="M1777 1105 c-173 -47 -316 -193 -362 -366 -17 -63 -19 -204 -4 -269 40 -173 193 -328 370 -375 63 -17 204 -19 269 -4 174 40 339 205 379 379 13 58 13 202 0 260 -40 174 -205 339 -379 379 -62 14 -215 12 -273 -4z m326 -114 c88 -42 165 -119 209 -208 32 -65 33 -73 33 -183 0 -111 -1 -118 -34 -184 -162 -329 -620 -329 -782 0 -33 66 -34 73 -34 184 0 110 2 119 32 180 41 83 78 127 147 175 88 60 144 76 261 72 89 -3 107 -7 168 -36z"/>
                                    <path d="M1780 938 c-38 -15 -74 -40 -116 -82 -78 -78 -104 -143 -104 -256 0 -113 26 -178 104 -256 78 -78 143 -104 256 -104 113 0 178 26 256 104 78 78 104 143 104 256 0 113 -26 178 -104 256 -79 79 -143 104 -259 103 -58 0 -98 -6 -137 -21z m338 -158 c44 -27 67 -80 52 -124 -13 -42 -215 -242 -253 -251 -47 -12 -78 4 -159 83 -93 90 -110 128 -83 186 34 72 119 88 180 34 l36 -31 52 50 c82 80 115 90 175 53z"/>
                                    <path d="M1985 669 c-86 -87 -87 -87 -139 -39 -52 48 -90 53 -108 15 -11 -24 -7 -30 62 -100 43 -43 83 -75 94 -75 24 0 216 189 216 212 0 22 -27 48 -49 48 -9 0 -43 -27 -76 -61z"/>
                                    </g>
                                    </svg>
                                </div>
                                <div style={{fontSize:'35px',textAlign:'center'}}>{items.itemsite_code}</div>
                                <div style={{float:'right',fontWeight:'bold'}}>{items.itemsite_desc}</div>
                            </div> 
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
    })}
    </>
  )
}

export default Appointmentdesigns