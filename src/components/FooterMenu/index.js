import React from 'react';
import './styles.css';

function FooterMenu() {
    return (
        <div className='FooterMenu'>
            <div className='FooterDescription'>
                <h1>IV SEMINÁRIO CIENTÍFICO DE ACARI</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis neque, consectetur non purus eget, pellentesque viverra massa. 
                    Nulla facilisi. Maecenas placerat congue tellus nec aliquet. Proin ipsum sem, scelerisque dignissim posuere at, faucibus sed justo.
                    Morbi euismod tincidunt convallis. Vivamus sagittis ante ac eros blandit, et hendrerit libero consequat. Nam feugiat vel mauris et iaculis. 
                    Aliquam erat volutpat. Nulla cursus non felis nec aliquam. Vivamus tempus diam id nunc pellentesque porta.
                </p>
            </div>
            <div>
                <h1>Contatos</h1>
                <ul>
                    <li>site</li>
                    <li>email</li>
                    <li>redes sociais</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterMenu;