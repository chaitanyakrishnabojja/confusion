import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader(props){
    if(props.leader != null){
        return(
                <Media tag="li">
                        <Media left middle>
                            <Media object src={props.leader.image} alt={props.leader.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{props.leader.name}</Media>
                             <p>{props.leader.designation}</p>
                             <p>{props.leader.description}</p>
                         </Media>
                   </Media>
        );
    }else{
        return(
            <div></div>
        );    
    }
}

export default RenderLeader;