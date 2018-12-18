import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    const commentsList = comments.map((obj) => {
        return(
            <div key={obj.id}> 
                <p>{obj.comment}</p>
                <p>{obj.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(obj.date)))}</p>
            </div>
        );
    });
    return(
        <div className="col-12 col-md-5 m-1">
            {commentsList}
        </div>
        
    );
}

const DishDetail = (props) => {

    if(props.dish != null){
        return(
            <div className="container">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>     
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default DishDetail;