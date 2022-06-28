import "../styles/Hero.css";
const HeroSlider = () => {
  return (
    <header class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
      <div class="content text-center">
        <div class="overlay"></div>

        {/* <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="school2.mp4" type="video/mp4">
        </video> */}

        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <div class="header-hero">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <h1 class="display-4 animate__animated animate__bounce animate__delay-2s">
                রবীন্দ্র বিশ্ববিদ্যালয়
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSlider;
