const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/icon.webp" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="product.html"><img src="img/user1.png" alt=""></a>
                <a href="404.html"><img src="img/icon1.png" alt=""></a>
                <a href="signup.html"><button class="signup">Register</button></a>
                <a href="login.html"><button class="login">Login</button></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="women.html" class="link">women</a></li>
            <li class="link-item"><a href="men.html" class="link">men</a></li>
            <li class="link-item"><a href="kid.html" class="link">kids</a></li>
            <li class="link-item"><a href="accessories.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();