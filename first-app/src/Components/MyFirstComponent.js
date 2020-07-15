import React, {Component} from 'react';


class MyFirstComponent extends Component{

    render(){
        let libro = {
            nombre: 'El dia que se perdio la Cordura',
            personajes: ['jon','Kate','Mery'],
            num_pags: 400
            
        }
        return(
            /** o usar un div */
            <React.Fragment> 
                <h1>Hi, I'm first component</h1>
                <h3>{'Los personajes del libro '+ libro.nombre+ ' son: '+libro.personajes}</h3>

                <ol>
                    {
                        libro.personajes.map((personajes,i) => {
                            console.log(personajes)
                            return(
                                <li key="i">
                                    {personajes}
                                </li>
                            );
                        }
                        )
                    }
                </ol>
                
            </React.Fragment>
            
        )
    }

}

 export default MyFirstComponent;