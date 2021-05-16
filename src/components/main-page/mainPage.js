import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './mainPage.css';
const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
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