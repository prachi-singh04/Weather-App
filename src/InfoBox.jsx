import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL="https://plus.unsplash.com/premium_photo-1692449762171-8e338f79c967?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/179020346/photo/heatwave-in-the-city-and-hand-showing-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=USAT5snpA1UPAhZlR9qolkftWyXFYl8LZtUyr2bNePw=";
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1667981663831-c395f9505e1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaW4lMjBjaXR5fGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
             <CardMedia 
              sx={{ height: 140 }}
              image={info.humidity>80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
              title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} <nbsp/>
                        {info.humidity>80 ? <ThunderstormIcon/> : (info.temp > 15) ? <WbSunnyIcon/> : <SevereColdIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                        <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                        <p>Humidity= {info.humidity}</p>
                        <p>The weather can be described as {info.weather} and feels like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}