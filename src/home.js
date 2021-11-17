import React from 'react'
import './home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            
            <Banner/>
            <div className='home_section'>
                <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                desc="Unique activities we can do together, led by a world of hosts."/>
                <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                desc="Spaces that are more than just a place to sleep."/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                desc="Comfortable private places, with room for friends or family."/>
            </div>
            <div className='home_section'>
                <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Goa"
                desc="Superhost with a stunning view of the beachside in Sunny Goa"
                price="&#8377; 2600/night"/>
                <Card  src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Mumbai"
                desc="Enjoy the amazing sights of Mumbai with this stunning penthouse"
                price="&#8377; 3400/night"/>
                <Card src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                desc="Superhost with great amenities and a fabolous shopping complex nearby"
                price="&#8377; 800/night"/>
            </div>
        </div>
    )
}

export default Home
