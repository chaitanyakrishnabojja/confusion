import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.dish){
            const comments = this.props.dish.comments.map((obj) => {
                return(
                    <div key={obj.id}> 
                        <p>{obj.comment}</p>
                        <p>{obj.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(obj.date)))}</p>
                    </div>
                );
            });
            return(

                <div className="container">
                    
                        <div className="col-12 col-md-5">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5">
                            {comments}
                        </div>
                    
                    
                </div>     
                
            );
        }else{
            return(
                <div></div>
            );
        }

    }
}

export default DishDetail;