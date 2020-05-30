import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle , Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

   
 
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
        <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
            
                <ul className="list-unstyled">
                        {comments.map((comments) => {
                            return(
                                <li key = {comments.id}>
                                <p>{comments.comment}</p>
                                <p>{comments.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
            
        </div>
       ) ;
    }

    const  DishDetail = (props) => {

        const renderComments = props.comments.map((comments) => {
            return (
              <div className = "list-unstyled">
                  <RenderComments comments = {comments} />
                  {console.log("fdsf")}
              </div>
            );
        });


            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                   
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>  
                            <RenderComments comments = {props.comments} />
                             
                        </div>
                    </div>
                </div>
            );
      
    }

export default DishDetail;