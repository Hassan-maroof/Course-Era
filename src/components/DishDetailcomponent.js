import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

   
 
    function RenderDish({dish}) {
    
        return(
            <Card key={dish.id}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                  <CardText>{dish.description}</CardText>
            </Card>
        );

    }

    function RenderComments({comments}) {
       return(

        <card>
                  <li><CardText>{comments.comment}</CardText></li>
                    <li>
                        <CardText>
                            {comments.author} 
                            {comments.date}
                        </CardText>
                    </li>
        </card>

       ) ;
    }

    const  DishDetail = (props) => {

        const renderComments = props.dish.comments.map((comments) => {
            return (
              <div className = "list-unstyled">
                  <RenderComments comments = {comments} />
              </div>
            );
        });


            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>  
                        </div>
                        <div  className="col-12 col-md-5 m-1" >
                            {renderComments}  
                        </div>
                    </div>
                </div>
            );
      
    }

export default DishDetail;