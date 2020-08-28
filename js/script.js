function changeTemplate(number_of_columns) {
	$(".map-grid__icon").removeClass("map-grid__icon_active");
	switch (number_of_columns) {
		case 1:
			$(".map-grid__icon_one").addClass("map-grid__icon_active");
			$(".map-grid__item").removeClass("col-6");
			$(".map-grid__item").removeClass("col-4");
			$(".map-grid__item").addClass("col-12");
			//------------------------------------------------------
			$(".map-grid__item").css("flex-direction", "row");
			$(".map-grid__item").css("align-items", "center");
			$(".map-grid__item").css("transform", "scale(1)");
			//-----------------
			$(".map-grid__image").css("width", "333px");
			$(".map-grid__image").css("height", "270px");
			$(".map-grid__image").css("background-size", "cover");
			//-----------------
			$(".map-grid__text>ul").css("display", "block");
			$(".map-grid__text>button").css("width", "40%");
			//------------------
			$(".map-grid__text").css("padding-left", "3rem");
			break;
		case 2:
			$(".map-grid__icon_two").addClass("map-grid__icon_active");
			$(".map-grid").css("justify-content", "space-around");
			$(".map-grid__item").removeClass("col-12");
			$(".map-grid__item").removeClass("col-4");
			$(".map-grid__item").addClass("col-6");
			//------------------------------------------------------
			$(".map-grid__item").css("flex-direction", "column");
			$(".map-grid__item").css("align-items", "flex-start");
			$(".map-grid__item").css("transform", "scale(0.95)");
			//-----------------
			$(".map-grid__text>ul").css("display", "block");
			$(".map-grid__text>button").css("width", "90%");
			//-----------------
			$(".map-grid__image").css("width", "100%");
			$(".map-grid__image").css("height", "167px");
			$(".map-grid__image").css("background-size", "100%");
			//-------------------
			$(".map-grid__text").css("margin-top", "20px");
			$(".map-grid__text").css("margin-bottom", "20px");
			$(".map-grid__text").css("padding-left", "1rem");
			break;
		case 3:
			$(".map-grid__icon_three").addClass("map-grid__icon_active");
			$(".map-grid__item").removeClass("col-12");
			$(".map-grid__item").removeClass("col-6");
			$(".map-grid__item").addClass("col-4");
			//------------------------------------------------------
			$(".map-grid__item").css("flex-direction", "column");
			$(".map-grid__item").css("transform", "scale(0.95)");
			//-----------------
			$(".map-grid__image").css("width", "100%");
			$(".map-grid__image").css("height", "167px");
			$(".map-grid__image").css("background-size", "100%");
			//-------------------
			$(".map-grid__text>ul").css("display", "none");
			$(".map-grid__text>h5").css("font-size", "17px");
			$(".map-grid__text>h5").css("font-weight", "500");
			$(".map-grid__text").css("margin-top", "20px");
			$(".map-grid__text").css("margin-bottom", "20px");
			//-----------------
			$(".map-grid__text>button").css("width", "50%");
			break;
	}

}
function popup(visibility, window) {
	switch (visibility) {
		case 1:
			$(".popup").css("display", "flex");
			if (window == "register") {
				$(".popup__register").show();
				$(".popup__login").hide();
			}
			if (window == "login") {
				$(".popup__login").show();
				$(".popup__register").hide();
			}
			break;
		case 0:
			$(".popup").hide();
			if (window == "register") {
				$(".popup__register").hide();
			}
			if (window == "login") {
				$(".popup__login").hide();
			}
			break;
	}
}