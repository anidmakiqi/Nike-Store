export function generateSocialMedias(){
    let SocialMediaHtml = 
    `<div class="row p-5 d-flex align-items-center main">
    <div class="col-md m-3 text-center">
    <img src="SocialMediaLogos/ig.jpg" alt="" class="rounded-circle" style="width:50px; height: 50px; object-fit: cover;">
    <p> Follow us on instagram</p>
    </div>
    <div class="col-md m-3 text-center">
    <img src="SocialMediaLogos/yt.png" alt="" class="rounded-circle" style="width:50px; height: 50px; object-fit: cover;">
    <p> Subscribe on Youtube</p>
    </div>
    <div class="col-md m-3 text-center">
    <img src="SocialMediaLogos/twitter.jpg" alt="" class="rounded-circle" style="width:50px; height: 50px; object-fit: cover;">
     <p>Follow us on Twitter</p>
    </div>
    <div class="col-md m-3 text-center">
      <img src="SocialMediaLogos/fb.png" alt="" class="rounded-circle" style="width:50px; height: 50px; object-fit: cover;">
       <p>Follow us on Facebook</p>
      </div>
    </div>`;
    document.querySelector('.social-medias').innerHTML = SocialMediaHtml;
}