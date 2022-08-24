export function weightFunction(weight) {
  if (weight <= 7) {
    return {
      name: "a small dog!",
      image:
        "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016__480.jpg",
    };
  } else if (weight === 8) {
    return {
      name: "a gallon of water",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUAi0W0vlFzp7j3wg1bA2v0zRsAmgwGXcpw&usqp=CAU",
    };
  } else if (weight >= 9 && weight <= 20) {
    return {
      name: "a watermelon",
      image:
        "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
    };
  } else if (weight > 20 && weight <= 50) {
    return {
      name: "a small bale of hay",
      image:
        "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/small-hay-bale~13610821",
    };
  } else if (weight > 50 && weight <= 75) {
    return {
      name: "a baby crib",
      image:
        "https://assets.pkimgs.com/pkimgs/rk/images/dp/wcm/202223/0175/sloan-acrylic-convertible-crib-c.jpg",
    };
  } else if (weight > 75 && weight <= 100) {
    return {
      name: "a twin-size mattress",
      image:
        "https://www.ikea.com/us/en/images/products/haugesund-spring-mattress-medium-firm-dark-beige__0857498_pe607525_s5.jpg?f=s",
    };
  } else if (weight > 100 && weight <= 120) {
    return {
      name: "a toilet",
      image:
        "http://mobileimages.lowes.com/productimages/d74173ba-4af0-4809-84d7-0335a58f334e/03153673.jpg",
    };
  } else if (weight > 120 && weight <= 150) {
    return {
      name: "a cheetah",
      image:
        "https://cdn.britannica.com/52/152452-050-9C11AEDD/Cheetah-running.jpg",
    };
  } else if (weight > 150 && weight <= 160) {
    return {
      name: "a beer keg",
      image:
        "https://image.made-in-china.com/2f0j00LpBfduwcEeog/Customized-Euro-Type-50L-Stainless-Steel-Beer-Keg-Empty-Barrel.jpg",
    };
  } else if (weight > 160 && weight <= 200) {
    return {
      name: "a kangaroo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/1200px-Kangaroo_Australia_01_11_2008_-_retouch.JPG",
    };
  } else if (weight > 200 && weight <= 300) {
    return {
      name: "a mule deer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mule_buck_elk_creek_m_myatt_%285489214303%29.jpg",
    };
  } else if (weight > 300 && weight <= 400) {
    return {
      name: "a reindeer",
      image:
        "https://www.osc.org/wp-content/uploads/2019/12/reindeer-4278119_960_720-e1576687205827.jpg",
    };
  } else if (weight > 400 && weight <= 530) {
    return {
      name: "a wild boar",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Wildschwein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg",
    };
  } else if (weight > 530 && weight <= 640) {
    return {
      name: "a black bear",
      image:
        "https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/black_bear_louisiana_clint_turnage_fws.jpg?itok=jVz3OFA_",
    };
  } else if (weight > 640 && weight <= 1060) {
    return {
      name: "a brown bear",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg",
    };
  } else if (weight > 1060 && weight <= 1300) {
    return {
      name: "a polar bear",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Polar_bear_on_ice_in_Svalbard_Norway_WW294883/hero_small/85px6g3dhv_Polar_bear_on_ice_in_Svalbard_Norway_WW294883.jpg",
    };
  } else if (weight > 1300 && weight <= 2000) {
    return {
      name: "a bison",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg",
    };
  } else if (weight > 2000 && weight <= 3300) {
    return {
      name: "a Honda Civic",
      image:
        "https://images.hgmsites.net/lrg/2020-honda-civic-sport-manual-angular-front-exterior-view_100751892_l.jpg",
    };
  } else if (weight > 3300 && weight <= 4200) {
    return {
      name: "a male giraffe",
      image:
        "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2020/11/Giraffe.jpg",
    };
  } else if (weight > 4200 && weight <= 6000) {
    return {
      name: "a rhinocerus",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_WW1106963/hero_small/5snbg63sls_Black_Rhino_WW1106963.jpg",
    };
  } else if (weight > 6000 && weight <= 8000) {
    return {
      name: "a hippo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Portrait_Hippopotamus_in_the_water.jpg",
    };
  } else if (weight > 8000 && weight <= 10000) {
    return {
      name: "a southern elephant seal",
      image:
        "https://cdn.britannica.com/96/99696-050-061C37CD/Northern-elephant-seal.jpg",
    };
  } else if (weight > 10000 && weight <= 15000) {
    return {
      name: "a T-rex",
      image: "https://cdn.mos.cms.futurecdn.net/aaYjPnEgnqGYFndmnpShWZ.jpg",
    };
  } else if (weight > 15000 && weight <= 20000) {
    return {
      name: "an African elephant",
      image:
        "https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_16x9.jpg",
    };
  } else if (weight > 20000 && weight <= 25000) {
    return {
      name: "The Beast - A Presidential Limo",
      image:
        "https://asset-cache.spyscape.com/5c0e9889898796ef30e9d756/621608a4a865b361ce602cc4_The%20Beast%2C%20President%20Biden%27s%20LimoScreenshot%202022-02-20%20at%2017.22.22%20(1).jpg",
    };
  } else if (weight > 20000 && weight <= 25000) {
    return {
      name: "school bus",
      image:
        "https://chalkbeat.brightspotcdn.com/dims4/default/2ea9bf1/2147483647/strip/true/crop/7360x4201+0+711/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fjo1iolvhiW5TF8XDi82TWqza_oY%3D%2F0x0%3A7360x4912%2F7360x4912%2Ffilters%3Afocal%284707x3488%3A4708x3489%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F19648441%2FNYC_Uncommon_Schools_Brooklyn_East_Collegiate_05.jpg",
    };
  } else if (weight > 25000 && weight <= 338000) {
    return {
      name: "13.5 school buses",
      image:
        "https://www.gannett-cdn.com/-mm-/799200a2ec10fc76d7f88c45cc2d44ae1780f713/c=0-278-4879-3022/local/-/media/2020/09/10/Newport/ghows-PJ-200729648-fc16b596.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
    };
  } else {
    return "YOU DIDN'T LIFT!";
  }
}
