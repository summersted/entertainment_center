import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './mainPage.css';
const items = [
  {
    src: '/media/cinema.jpg',
    altText: 'Slide 1',
    caption: 'Цікаві фільми!',
    header: 'Кінотеатр Cinema',
    key: '1'
  },
  {
    src: '/media/games.jpg',
    altText: 'Slide 2',
    caption: 'Клич друзів!',
    header: 'Ігрові автомати!',
    key: '2'
  },
  {
    src: '/media/cafe.jpg',
    altText: 'Slide 3',
    caption: 'Потіш себе смакотою!',
    header: 'Кафе',
    key: '3'
  }
];

const MainPage = () => {
    return(
        <>
            <div className='carousel-block'>
                <UncontrolledCarousel items={items} />
            </div>
            <div className='d-flex content'>
                <div className='description'>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, quia.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, non dolores obcaecati tempora accusamus culpa sit veritatis nisi doloribus consequatur minus quisquam eveniet corrupti quos facilis ipsa sapiente recusandae. Illo ad suscipit sed facere? Ut inventore, quia vitae repellat quas qui animi quod non obcaecati sequi, blanditiis ex quae, hic facere? Molestiae, explicabo magnam maxime nihil non hic omnis id? Assumenda earum et totam hic eligendi, deleniti quos dolore iste accusantium soluta numquam adipisci quo saepe consequuntur mollitia velit provident. Vero aut temporibus qui quidem nemo tempora harum sint minima architecto unde ut nam provident, delectus quae voluptatem rerum dicta magni! Ea animi ratione assumenda ipsam? Odio eos possimus deleniti provident omnis aliquam repudiandae cum saepe fugiat voluptatem odit quam laboriosam quo, hic voluptatibus maxime quibusdam cumque. Modi est eveniet aperiam id alias vitae eaque, corrupti commodi molestiae quis laborum rerum praesentium consequuntur in sint ratione ipsam quas eum. Maiores earum eius vero expedita sed impedit, fugit libero est magni similique doloremque repellat distinctio tempore fuga sit nemo fugiat voluptatum blanditiis animi illum quidem, optio, a numquam veniam? Quis enim id vero quas? Quo blanditiis eveniet laudantium minima eligendi sit, nam nisi deleniti dicta ut dolor ad porro, in totam facilis itaque cupiditate. Exercitationem dignissimos quisquam deleniti quibusdam error saepe, ducimus temporibus aliquam iusto nemo maiores fugit fugiat quidem. Corrupti sunt est perferendis sed molestias fugit, similique magni quos hic optio minima amet recusandae harum vitae, ea quas suscipit accusamus labore quam neque molestiae, quaerat id. Dolorem voluptate fuga reprehenderit odio doloremque porro, earum deleniti voluptas perspiciatis. Cumque modi id asperiores nisi necessitatibus placeat non reiciendis minus ut? Excepturi ad voluptatum a hic dolorum, facilis laborum possimus culpa autem fuga qui molestias esse voluptatem explicabo cupiditate quis aperiam debitis accusantium quod maxime architecto. Esse iste nobis vitae inventore? Eos, culpa.</p>
                </div>
                <div className='socials-list-block'>
                    <div className='socials-list-block-item'>a</div>
                    <div className='socials-list-block-item'>a</div>
                    <div className='socials-list-block-item'>a</div>
                    <div className='socials-list-block-item'>a</div>
                </div>
            </div>
           
        </>
           
    )
}

export default MainPage;