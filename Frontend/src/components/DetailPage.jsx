import React from 'react'

const DetailPage = () => {
    return (
        <div>

            <div class="container shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center detail-page">
                <div class="row main">
                    <div class="col-4 column-1">
                        <img className='detail-img' src={require("../assests/images/CardsImage/alia.jpg")}></img>
                        <p className='person-name'>Alia Bhatt</p>
                        <button className='detail-book-btn'>Book Now</button>
                    </div>
                    <div class="col-8 column-2">
                        <div class="row">
                            <div class="col">
                                <p className='request-heading'>Request for</p>
                            </div>
                           
                            <div class="col">
                                <button className='ask-btn'>Ask Us</button>
                            </div>
                        </div>
                        <div className='column-2-data'>
                            <p className='column-2-detail'>Book a Personalised Video msg With Alia Bhatt</p>
                            <p className='info'>Alia Bhatt is a British actress of Indian descent who predominantly works in Hindi films.</p>
                        </div>
                        <div>
                            <p className='random-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam aspernatur laborum temporibus doloribus laboriosam error at praesentium voluptatem sequi labore voluptas, architecto, dolores explicabo molestiae molestias rerum illo repellendus quos voluptatum quam exercitationem soluta! Porro minima adipisci vero eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugiat. Tempora reprehenderit laboriosam sapiente ipsa voluptates enim nam sint quam animi illum officiis at qui, incidunt reiciendis perspiciatis atque deserunt commodi nisi dolores suscipit consequatur consectetur? Aliquid maxime doloremque a?</p>
                        </div>
                        <div>
                            <p className='videos-section'>Videos</p>

                            <video width="150px" height="auto" autoplay>
  <source src={require('../assests/vedeo/random.mp4')} type="video/ogg"/>
Your browser does not support the video tag.
</video>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default DetailPage
