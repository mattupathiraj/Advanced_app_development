
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Home = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage: 'url("")', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>
<NavBar/>
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://kwpkochieventmanagementhome.files.wordpress.com/2019/10/birthday-party-organizer.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Birthday Party Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Having a birthday party is a big deal. This is especially the case for teenagers and parents trying to ingrain the idea into their young ones.
 But often in trying to do it all ourselves, we are unable to do justice to it. A birthday party planner can easily help make it a grand success.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
           <center>Share</center> 
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://img-c.udemycdn.com/course/750x422/5524436_4ee0_2.jpg"
        
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Social Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is true that social event planning is not rocket science, but it is amazing how the simplest of tasks sometimes are more challenging than we expected. We assure 100% assistance and world-class competence in getting the best alternative executed for you.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Special Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Special event planning is always among the most challenging. Along with the challenges of event planning, you have to live to the demands of a special occasion.We try to achieve mix of perfection and unique in our special event paying attention to every detail of the event 
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.mazeevents.in/wp-content/uploads/2023/12/event-management-companies-in-bangalore.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Music Event Plannner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Music events are always challenging. Whether indoors or outdoors, an experienced event planner can help save the day.From finalizing venue to installing the right acoustic levels. A music event planner always makes sure that every bit is well cared for.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.i-eventplanner.com/wp-content/uploads/2015/07/graduate.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Graduation Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Graduation is a major life-altering event, and graduation event planners help you add sheen to this very special day. From offering ideas on how to throw an event to the food and the ceremony flow, we walk you through every bit making it a memorable event for you.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small"></Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/08/18111726/LSA-hero-TL-feature-TL-inline-AD-hero--1600x900.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <center>Concert Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Concerts are live music shows, and often the dynamics of hosting them are very different. Concert planner is a very challenging and exciting job.Unlike most other events, concert event is extremely infrastructure heavy and requires acoustic friendly locations.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small"></Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/type-of-event.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Fundraising Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fundraising event always has a special aspect about it. Not only is it an exercise in planning a major event but also one which is bound to give you a sense of purpose and fulfilment, given the cause which it represents.we pay attention to every detail of the event.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg"size="small"></Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.squarespace-cdn.com/content/v1/5901090d20099e50e4011fc8/1641609447727-0CENB2EZJXMC5F1HOPYC/38BE6EB1-42D6-4568-BC28-BB7C502DBA59.jpeg?format=1000w"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          <center>Wedding Event Planner</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Wedding planners are professionals whose work it is to ensure that your wedding goes according to plan. In most cases, wedding planners will often be found on the call with the bride trying to ensure that the logistical support for the wedding is up to par.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        <Button style={{color:'green'}} size="small">
         
         </Button>
      
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;