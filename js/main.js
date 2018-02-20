var navigationBox = document.getElementById("navigationBox");

function createObserver() {
  var observerNavigationBox;
  var observerBanner;

  var optionsNavigationBox = {
    root: null,
    rootMargin: "0px",
    threshold: [1]
  };

  var optionsBanner = {
  	root: null, //viewport
  	rootMargin:"-300px", //distance around the trigger threshold
  	threshold: [0] //  list of trigger points in floating point % 
  };

  observerNavigationBox = new IntersectionObserver(handleIntersect, optionsNavigationBox); // create intersection observer
  observerNavigationBox.observe(navigationBox); // makes it listen for intersection between viewport and element

  observerBanner = new IntersectionObserver(handleIntersectBanner, optionsBanner);
  observerBanner.observe(document.getElementById("Banner"));
}

function handleIntersect (eventList){
	var navigationBoxInfo = eventList[0];
	if (navigationBoxInfo.intersectionRatio < 1) {
		navigationBox.className = "display-2 fixed";
	}
	
};

function handleIntersectBanner (eventList){
	var bannerInfo = eventList[0];
	console.log(bannerInfo);
	if (bannerInfo.intersectionRatio > 0) {
		navigationBox.className = "display-2";
	}

};

createObserver();