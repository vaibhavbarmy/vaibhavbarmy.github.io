(function () {
  var FALLBACKS = {
    "/img/posts/hello-world-thumb.gif": "https://cdn.dribbble.com/users/1158215/screenshots/4050635/untitled-2.gif",
    "/img/posts/A-Memory-With-A-Rickshaw-Wala-thumb.jpg": "https://c1.staticflickr.com/3/2641/4016338526_66724229ec_b.jpg",
    "/img/posts/A-Memory-With-A-Rickshaw-Wala-banner.jpg": "https://c1.staticflickr.com/3/2641/4016338526_66724229ec_b.jpg",
    "/img/posts/A-Memory-With-A-Cab-Wala-thumb.jpg": "https://images.fineartamerica.com/images-medium-large-5/vintage-nyc-taxi-john-farnan.jpg",
    "/img/posts/A-Memory-With-A-Cab-Wala-banner.jpg": "https://images.fineartamerica.com/images-medium-large-5/vintage-nyc-taxi-john-farnan.jpg",
    "/img/posts/The-One-With-Complex-Memories-thumb.jpg": "https://churchleaders-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/2018/01/1.30.CC.CHILDREN.BibleMemoryGames.jpg",
    "/img/posts/The-One-With-Complex-Memories-banner.jpg": "https://churchleaders-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/2018/01/1.30.CC.CHILDREN.BibleMemoryGames.jpg",
    "/img/posts/A-Memory-With-A-Bhikhari-Wala-thumb.jpg": "https://www.roozrang.com/wp-content/uploads/2016/12/Jelly-London-Christmas-Crisis-Homeless-Animation-768x432.jpg",
    "/img/posts/A-Memory-With-A-Bhikhari-Wala-banner.jpg": "https://www.roozrang.com/wp-content/uploads/2016/12/Jelly-London-Christmas-Crisis-Homeless-Animation-768x432.jpg",
    "/img/posts/What-Death-Is-thumb.jpg": "https://f4.bcbits.com/img/0003960924_10.jpg",
    "/img/posts/What-Death-Is-banner.jpg": "https://f4.bcbits.com/img/0003960924_10.jpg",
    "/img/posts/A-Memory-With-A-Child-Labour-thumb.jpg": "https://i.pinimg.com/originals/40/7d/80/407d80e952fe5e6c16f7133338691cca.jpg",
    "/img/posts/A-Memory-With-A-Child-Labour-banner.jpg": "https://i.pinimg.com/originals/40/7d/80/407d80e952fe5e6c16f7133338691cca.jpg",
    "/img/posts/What-Life-Money-And-Friends-Are-thumb.jpg": "https://i.ytimg.com/vi/OEboG4LnUBI/maxresdefault.jpg",
    "/img/posts/What-Life-Money-And-Friends-Are-banner.jpg": "https://i.ytimg.com/vi/OEboG4LnUBI/maxresdefault.jpg",
    "/img/posts/A-Memory-With-The-3-Musketeers-thumb.jpg": "https://i2-prod.mirror.co.uk/incoming/article7460999.ece/ALTERNATES/s615b/PRODUCTION-Ayush-Mahesh-Khedekar-RUBIANA-ALI-AND-Azharuddin-Mohammed-Ismail.jpg",
    "/img/posts/A-Memory-With-The-3-Musketeers-banner.jpg": "https://i2-prod.mirror.co.uk/incoming/article7460999.ece/ALTERNATES/s615b/PRODUCTION-Ayush-Mahesh-Khedekar-RUBIANA-ALI-AND-Azharuddin-Mohammed-Ismail.jpg",
    "/img/posts/What-Does-A-Hero-Truly-Need-thumb.jpg": "https://rockinboys.com/wp-content/uploads/2013/01/superhero_valentine_printable1.jpg",
    "/img/posts/What-Does-A-Hero-Truly-Need-banner.jpg": "https://rockinboys.com/wp-content/uploads/2013/01/superhero_valentine_printable1.jpg",
    "/img/posts/What-Past-Is-thumb.jpg": "https://i.pinimg.com/736x/aa/92/7e/aa927e85f6be1dd887674e68bb0133d6--story-time-fine-art-photography.jpg",
    "/img/posts/What-Past-Is-banner.jpg": "https://i.pinimg.com/736x/aa/92/7e/aa927e85f6be1dd887674e68bb0133d6--story-time-fine-art-photography.jpg",
    "/img/posts/What-Hope-Is-thumb.png": "http://alzheimersocietyblog.ca/wp-content/uploads/hope-forget-me-not.png",
    "/img/posts/What-Hope-Is-banner.png": "http://alzheimersocietyblog.ca/wp-content/uploads/hope-forget-me-not.png",
    "/img/posts/What-Love-Is-thumb.jpg": "https://media.wired.com/photos/5b8477b61419cf3acdceed27/master/pass/How%20Technology%20Is%20Changing%20the%20Way%20We%20Love.jpg",
    "/img/posts/What-Love-Is-banner.jpg": "https://media.wired.com/photos/5b8477b61419cf3acdceed27/master/pass/How%20Technology%20Is%20Changing%20the%20Way%20We%20Love.jpg",
    "/img/posts/A-Memory-With-A-Chai-Wala-thumb.jpg": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c06dbe34740775.56dc4861ce44b.jpg",
    "/img/posts/A-Memory-With-A-Chai-Wala-banner.jpg": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c06dbe34740775.56dc4861ce44b.jpg",
    "/img/posts/What-Birth-Is-thumb.jpg": "https://bluebutterfliesandme.files.wordpress.com/2013/02/jonathan-lockwood-huie.jpg",
    "/img/posts/What-Birth-Is-banner.jpg": "https://bluebutterfliesandme.files.wordpress.com/2013/02/jonathan-lockwood-huie.jpg",
    "/img/posts/The-One-With-A-Dad-And-Son-thumb.jpg": "https://media.istockphoto.com/illustrations/father-and-son-riding-a-motorcycle-illustration-id163917913?k=6&m=163917913&s=612x612&w=0&h=F2LN4qDdCOJsLNiC1ek-u-BC0N2pugiFnZvbGYwEDeU=",
    "/img/posts/The-One-With-A-Dad-And-Son-banner.jpg": "https://media.istockphoto.com/illustrations/father-and-son-riding-a-motorcycle-illustration-id163917913?k=6&m=163917913&s=612x612&w=0&h=F2LN4qDdCOJsLNiC1ek-u-BC0N2pugiFnZvbGYwEDeU=",
    "/img/posts/What-Destiny-Is-thumb.jpg": "https://a.wattpad.com/cover/17686989-352-k572705.jpg",
    "/img/posts/What-Destiny-Is-banner.jpg": "https://a.wattpad.com/cover/17686989-352-k572705.jpg",
    "/img/posts/A-Memory-With-The-Sun-thumb.gif": "https://media.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif",
    "/img/posts/A-Memory-With-The-Sun-banner.gif": "https://media.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif",
    "/img/posts/What-A-Monster-Is-thumb.gif": "https://cdn.dribbble.com/users/410304/screenshots/2557499/green-monster-tubik-studio.gif",
    "/img/posts/What-A-Monster-Is-banner.gif": "https://cdn.dribbble.com/users/410304/screenshots/2557499/green-monster-tubik-studio.gif",
    "/img/posts/What-Decision-Is-thumb.jpg": "https://assets.teenvogue.com/photos/59960c52fc885e5cc9abaa32/16:9/w_1280,c_limit/TeenVogue_Bullying-huddled.jpg",
    "/img/posts/What-Decision-Is-banner.jpg": "https://assets.teenvogue.com/photos/59960c52fc885e5cc9abaa32/16:9/w_1280,c_limit/TeenVogue_Bullying-huddled.jpg",
    "/img/posts/A-Memory-With-A-Hockey-Team-thumb.gif": "https://i.gifer.com/7hao.gif",
    "/img/posts/A-Memory-With-A-Hockey-Team-banner.gif": "https://i.gifer.com/7hao.gif",
    "/img/posts/A-Startup-Of-Startup-Winters-thumb.gif": "https://cdn.dribbble.com/users/196525/screenshots/2781329/startup-dribbble.gif",
    "/img/posts/A-Startup-Of-Startup-Winters-banner.gif": "https://cdn.dribbble.com/users/196525/screenshots/2781329/startup-dribbble.gif",
    "/img/posts/What-Not-Having-A-Life-Is-thumb.jpg": "https://i.ytimg.com/vi/CAb_bCtKuXg/maxresdefault.jpg",
    "/img/posts/What-Not-Having-A-Life-Is-banner.jpg": "https://i.ytimg.com/vi/CAb_bCtKuXg/maxresdefault.jpg",
    "/img/posts/The-Lost-And-Found-Case-Of-The-Sanjeevani-Booti-thumb.jpg": "https://s3.envato.com/files/224027579/preview.jpg",
    "/img/posts/The-Lost-And-Found-Case-Of-The-Sanjeevani-Booti-banner.jpg": "https://s3.envato.com/files/224027579/preview.jpg",
    "/img/posts/The-cigarette-seller-who-has-a-side-business-of-eggs-thumb.gif": "https://i.gifer.com/K1MS.gif",
    "/img/posts/The-cigarette-seller-who-has-a-side-business-of-eggs-banner.gif": "https://i.gifer.com/K1MS.gif",
    "/img/posts/The-One-With-Lady-Vikram-Betal-thumb.jpg": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMQ_DVJt55T78rVIgSsF2C1m6EK_7oh3kwEUmvXDiUu4T-yTK0",
    "/img/posts/The-One-With-Lady-Vikram-Betal-banner.jpg": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMQ_DVJt55T78rVIgSsF2C1m6EK_7oh3kwEUmvXDiUu4T-yTK0",
    "/img/posts/The-One-With-A-Prophetic-Dream-thumb.jpg": "https://us.v-cdn.net/5021068/uploads/editor/d5/3ywa3wr6y9of.jpg",
    "/img/posts/The-One-With-A-Prophetic-Dream-banner.jpg": "https://us.v-cdn.net/5021068/uploads/editor/d5/3ywa3wr6y9of.jpg",
    "/img/posts/A-Memory-With-A-Disabled-Dog-thumb.jpg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/c0b07507-a839-4b06-8117-00682255e17a/d7qb54v-d1089e3f-bc54-4cad-91e9-a7ec9140a2e1.jpg/v1/fill/w_1024,h_832,q_70,strp/disabled_little_dog_in_wheelchair__by_sagadreams_d7qb54v-fullview.jpg",
    "/img/posts/A-Memory-With-A-Disabled-Dog-banner.jpg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/c0b07507-a839-4b06-8117-00682255e17a/d7qb54v-d1089e3f-bc54-4cad-91e9-a7ec9140a2e1.jpg/v1/fill/w_1024,h_832,q_70,strp/disabled_little_dog_in_wheelchair__by_sagadreams_d7qb54v-fullview.jpg",
    "/img/posts/The-One-With-The-Milk-thumb.gif": "https://i.pinimg.com/originals/64/31/98/643198891e8efa01b12c550f2740b496.gif",
    "/img/posts/The-One-With-The-Milk-banner.gif": "https://i.pinimg.com/originals/64/31/98/643198891e8efa01b12c550f2740b496.gif",
    "/img/posts/A-Memory-With-The-Safai-Wala-thumb.gif": "https://media0.giphy.com/media/8ciVamiwLL1Tk7VEn5/giphy.gif",
    "/img/posts/A-Memory-With-The-Safai-Wala-banner.gif": "https://media0.giphy.com/media/8ciVamiwLL1Tk7VEn5/giphy.gif",
    "/img/posts/Another-Memory-With-A-Cab-Wala-thumb.jpg": "https://i.ytimg.com/vi/ezuKIzXJuz8/maxresdefault.jpg",
    "/img/posts/Another-Memory-With-A-Cab-Wala-banner.jpg": "https://i.ytimg.com/vi/ezuKIzXJuz8/maxresdefault.jpg"
  };

  function pathOf(url) {
    if (!url) return "";
    try {
      if (url.charAt(0) === "/") return url.split("?")[0];
      return new URL(url, location.origin).pathname;
    } catch (e) {
      return url;
    }
  }

  function fallbackFor(src) {
    return FALLBACKS[pathOf(src)];
  }

  document.addEventListener(
    "error",
    function (e) {
      var t = e.target;
      if (!t || t.tagName !== "IMG") return;
      var fb = fallbackFor(t.getAttribute("src") || t.src);
      if (!fb || t.getAttribute("data-fell") === "1") return;
      t.setAttribute("data-fell", "1");
      t.src = fb;
    },
    true
  );

  document.querySelectorAll("[style*='url(']").forEach(function (el) {
    var st = el.getAttribute("style") || "";
    var m = st.match(/url\(['"]?([^'")]+)['"]?\)/);
    if (!m) return;
    var local = m[1];
    var fb = fallbackFor(local);
    if (!fb) return;
    var probe = new Image();
    probe.onerror = function () {
      el.style.backgroundImage = "url('" + fb.replace(/'/g, "%27") + "')";
    };
    probe.src = local;
  });
})();
