import { useState } from 'react';
import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'
import moment from 'moment'

const TodoItem = (props) => {

    
    return (
        <Card className='my-2'>
            <CardBody>
                <div className="d-flex justify-content-between">
                    <div>
                        <CardTitle tag="h5" className='fw-bold'>{moment(props.dates).format("DD-MMMM-YYYY")}</CardTitle>
                        <CardText>{props.action}</CardText>
                    </div>
                    <div>
                    {
                        props.status ?
                        <Button onClick={props.edit} color='success'>Done</Button>
                        :
                        <Button onClick={props.edit} color='warning'>On Going</Button>
                        
                    }
                        <Button onClick={props.delete} color='danger'>Delete</Button>
                        </div>
                </div>      
            </CardBody>
        </Card>
    )
}

export default TodoItem;