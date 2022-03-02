import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    // CardFooter,
    CardText,
    Button
} from 'reactstrap';
import {FaRegThumbsUp} from 'react-icons/fa'
import newyork from './newyork.jpeg';


const ContentCard = (props) => {
    const LikePost = (amount) => {
    props.numberOflikes += 1
        alert(`Liked Post! ${props.numberOflikes}`);
    };

    return(
        <Card className='my-3'>
            <CardBody>
                <CardTitle tag="h5" className='fw-bold'>
                {props.username}
                </CardTitle>
                <CardSubtitle tag="h6" className='text-muted mb-4'>
                {props.location}
                </CardSubtitle>
                <img style={{
                    width:"100%"
                }} className='rounded img-fluid' 
                src={newyork} 
                alt="user's content"
                />

                <CardText tag="h6" className='fw-bold mt-3'>
                {props.numberOflikes.toLocaleString()} Likes
                </CardText>
                <CardText>
                    <span className='fw-bold'>{props.username}</span> {props.caption}{" "}
                    {props.caption.length > 13 ? props.caption.slice(0,13)+ "..." : props.caption}
                </CardText>

                <Button 
                onClick={() => LikePost ()}
                color="danger" 
                className='d-flex justify-content-center align-items-center'>
                Like <FaRegThumbsUp className='mx-1'></FaRegThumbsUp>
                </Button>
            </CardBody>
        </Card>
    )
}

export default ContentCard;