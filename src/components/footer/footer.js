import React from 'react';
import './footer.css';

const Footer = () =>{
    return(
        <footer class="footer">
            <div class="footer-wrap">
                <div class="footer_logo landing-logo">
                    <p>ДонНУ<span>ім. Василя Стуса</span></p>
                </div>
                <p class="footer_text">
                    Виконав студент 2го курсу,
                    групи Б19_Д/122Д
                    Сидорчук Роман Володимирович
                </p>
                <span class="footer-cr">
                Факультет інформаційних та прикладних технологій
                Кафедра комп’ютерних наук та інформаційних технологій
                </span>
            </div>
        </footer>
    )
}

export default Footer;