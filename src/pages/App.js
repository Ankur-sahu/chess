import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import { startGame } from './Redux/Actions';
// import bishop from './Images/whiteCamel.png'
import balckBishop from './Images/blackCamel.png'
import blckHAti from './Images/hati.png';
// import wtHati from './Images/whiteHati.png'
import blackGhoda from './Images/blackGhoda.png'
import whiteGhoda from './Images/whiteGhoda.png'
import blackKing from './Images/blackKing.png'
import blackWazir from './Images/blackWazir.png'
import whiteWazir from './Images/whiteWazir.png'
import whiteKing from './Images/whiteKing.png'
import whiteHati from './Images/whiteHati.png'
import whiteCamel from './Images/whiteCamel.png'
import blackpawn from './Images/blackPawn.png'
import whitePawn from './Images/whitePawn.png'

import ChessBlock from './Components/ChessBlock';

function App() {
const [blockSelected, setBlockSelected] = useState([]);
  const blocks = useSelector((state ) => state.chess.actionInitial);
  
  const dispatch = useDispatch()



  function chesStart (){
    const tempArr = [];
    let id = 0;

    let bgColor = "";
    let pce = {};


    for( let i =0; i<8; i++){
      for(let j=0; j<8; j++ ){
        id++;
        if((i + j) % 2 === 0){
          bgColor = "white";
        }else{
          bgColor = "black";
        }
     

        if(id ===1 ){
          pce= {pieceId: 1,
            img:blckHAti,
            player: 1
          };
        } else if( id===2){
          pce= {pieceId: 2,
            img:blackGhoda,
            player: 1
          };

        }else if(id ===3){
           pce= {pieceId: 3,
            img:balckBishop,
            player: 1
          };

        }
        else if(id ===4){
          pce= {pieceId: 4,
            img:blackWazir,
            player: 1
          };

        }
        else if(id ===5){
          pce= {pieceId: 5,
            img:blackKing,
            player: 1
          };
        }
        else if(id ===6){
          pce= {pieceId: 6,
            img:balckBishop,
            player: 1
          };
        }
        else if(id ===7){
          pce= {pieceId: 7,
            img:blackGhoda,
            player: 1
          };
        }
        else if(id ===8){
           pce= {pieceId: 8,
            img:blckHAti,
            player: 1
          };
        } 
        else if(id ===9){
          pce= {pieceId: 9,
            img:blackpawn,
            player: 1
          };
        } 
        
        else if(id ===10){
           pce= {pieceId: 10,
            img:blackpawn,
            player: 1
          };
        } 
        else if(id ===11){
           pce= {pieceId: 11,
            img:blackpawn,
            player: 1
          };
        } 
        else if(id ===12){
          pce= {pieceId: 12,
            img:blackpawn,
            player: 1
          };
        } 
        else if(id ===13){
           pce= {pieceId: 13,
            img:blackpawn,
            player: 1
          };
        } 
        else if(id ===14){
          pce= {pieceId: 14,
            img:blackpawn,
            player: 1
          };
        }
        else if(id ===15){
          pce= {pieceId: 15,
            img:blackpawn,
            player: 1
          };
        } else if(id ===16){
          pce= {pieceId:16,
            img:blackpawn,
            player: 1
          };
        }  
        else if (id===64){
          pce= {pieceId: 64,
            img:whiteHati,
            player: 2
          };
        }
        else if (id===63){
          pce= {pieceId: 63,
            img:whiteGhoda,
            player: 2
          };
        }else if (id===62){
          pce= {pieceId: 62,
            img:whiteCamel,
            player: 2
          };
        }else if (id===61){
          pce= {pieceId: 61,
            img:whiteKing,
            player: 2
          };
        }else if (id===60){
          pce= {pieceId: 60,
            img:whiteWazir,
            player: 2
          };
        }else if (id===59){
          pce= {pieceId: 59,
            img:whiteCamel,
            player: 2
          };
        }
        else if (id===58){
          pce= {pieceId: 58,
            img:whiteGhoda,
            player: 2
          };
        }
        else if (id===57){
          pce= {pieceId: 57,
            img:whiteHati,
            player: 2
          };
        }
        else if (id ===56){
          pce={pieceId : 56,
            img: whitePawn,
            player:2
          }
        }
        else if (id ===55){
          pce={pieceId : 55,
            img: whitePawn,
            player:2
          }
        }else if (id ===54){
          pce={pieceId : 54,
            img: whitePawn,
            player:2
          }
        }else if (id ===53){
          pce={pieceId : 53,
            img: whitePawn,
            player:2
          }
        }else if (id ===52){
          pce={pieceId : 52,
            img: whitePawn,
            player:2
          }
        }else if (id ===51){
          pce={pieceId : 51,
            img: whitePawn,
            player:2
          }
        }else if (id === 50){
          pce={pieceId : 50,
            img: whitePawn,
            player:2
          }
        }else if (id ===49){
          pce={pieceId : 49,
            img: whitePawn,
            player:2
          }
        }
        else{
          pce="";
        }
        // if (id===36){
        //   pce= {pieceId: 65,
        //     img:whiteKing,
        //     player: 2
        //   };
        // }
        // if (id ===17){
        //   pce={pieceId : 66,
        //     img: whitePawn,
        //     player:2
        //   }
        // }
        // if(id ===33){
        //    pce= {pieceId: 67,
        //     img:blckHAti,
        //     player: 1
        //   };
        // } 
        let obj ={
          id:id, //for block id
          backColor: bgColor, // block color
          piece: pce,// this is a object in which = {pieceid, player, img}
          active:false,// block click or not
          opponentPiece:false,//which piece have in oppe
          routes:false,// path acccording to piece
          previousStep:false,//prevstep of every piece
          currentStep:false
        }
        tempArr.push(obj);
        
      }
    }
    if(blocks.length === 0 ){
    dispatch(startGame(tempArr))
    }
   
  }

  useEffect(()=>{
   chesStart();
  },[])

  return (
    <div className="App">
    {blocks.map((data,index)=>  <ChessBlock key={index} dispatch={dispatch}  setBlockSelected={setBlockSelected} 
    blockSelected={blockSelected} data={data} index={index}/>)}

    </div>
  )
}

export default App;
