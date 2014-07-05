// JScript File
// global variables
var StoreLocation;

function GetDate(CtrlName)
{
/****************************************************

Use Javascript method (window.open) to PopUp a new window 
which contain a Calendar Control. In the meantime, we'll 
pass the Parent Form Name and Request Control Name in the QueryString!

*****************************************************/

ChildWindow = window.open('Calendar.aspx?FormName=' + document.forms[0].name + '&CtrlName=' + CtrlName, "PopUpCalendar", "width=270,height=300,top=200,left=200,toolbars=no,scrollbars=no,status=no,resizable=no");
}

function CheckWindow()
{
ChildWindow.close();
}

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}
function initialize(){
    preloadImages();
    localize();
}

function ccinitialize(){
    preloadImages();
    cclocalize();   
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}
function getlocationfromurl(){
    //this function looks for loc= in the calling url,
    //then pieces together the two letters representing the store location
    temp = new String(location.search);
    stringindex = temp.indexOf("loc=",0)    
    //letter1 = temp.charAt(stringindex+4);
    letter1 = 'r'
    //letter2 = temp.charAt(stringindex+5);
    letter2 = 'c'
    StoreLocation = letter1 + letter2;
    //alert(StoreLocation);
}

function localize(){

	//get store location code from URL
	getlocationfromurl();
		
	//These are the header image and the top image of the side menu with store location in text
	switch(StoreLocation){
	    case "rc":
	        //first localize the necessary graphics...
	        document['HeaderGraphic'].src="../../images/ranchocucamonga/graphics/header_loc_rc.jpg"
	        document['SideMenuHeader'].src = "../../images/ranchocucamonga/graphics/menus/smenu_rc1.jpg"
	        //These next five will probably be the same for all locations, but we'll do 'em this way
	        //any way
	        document['maplinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_map.jpg"
	        document['optionslinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_options.jpg"
	        document['schedulerlinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_schedule-over.jpg"
	        document['photolinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_photo.jpg"
	        document['downloadlinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_download.jpg"
	        //Now we change the accompanying links to match the store location...
	        document.getElementById('maplink').href="../../rancho_cucamonga/rancho_locmap.html"
	        document.getElementById('optionslink').href="../../rancho_cucamonga/rancho_options.html"
	        document.getElementById('schedulerlink').href="DateSchedule.aspx?loc=rc"
	        document.getElementById('photoslink').href="../../rancho_cucamonga/rancho_photos.html"
	        document.getElementById('downloadlink').href="../../rancho_cucamonga/rancho_otherstuff.html"
	    default:
	}
	
	SetCCBankAccount();
	
}

function cclocalize(){

	//get store location code from URL
	getlocationfromurl();
		
	//These are the header image and the top image of the side menu with store location in text
	switch(StoreLocation){
	    case "rc":
	        //first localize the necessary graphics...
	        document['HeaderGraphic'].src="../../images/ranchocucamonga/graphics/header_loc_rc.jpg"
	        document['SideMenuHeader'].src = "../../images/ranchocucamonga/graphics/menus/smenu_rc1.jpg"
	        //These next five will probably be the same for all locations, but we'll do 'em this way
	        //any way
	        document['maplinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_map.jpg"
	        document['optionslinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_options.jpg"
	        document['schedulerlinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_schedule-over.jpg"
	        document['photolinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_photo.jpg"
	        document['downloadlinkimage'].src="../../images/ranchocucamonga/graphics/menus/smenu_rc_download.jpg"
	        
	        //Now we change the accompanying links to match the store location...
	        document.getElementById('maplink').href="../../rancho_cucamonga/rancho_locmap.html"
	        document.getElementById('optionslink').href="../../rancho_cucamonga/rancho_options.html"
	        document.getElementById('schedulerlink').href="DateSchedule.aspx?loc=rc"
	        document.getElementById('photoslink').href="../../rancho_cucamonga/rancho_photos.html"
	        document.getElementById('downloadlink').href="../../rancho_cucamonga/rancho_otherstuff.html"
	            
            //lastly, we gotta strip off URL encoding so LinkPoint will process the credit card
	        //location.replace("processcreditcardstart.aspx")
	                
	    default:
	}
	
	SetCCBankAccount();	


}
function SetCCBankAccount(){
	//if this is the form to start credit card processing, set the Verisign
	//login variables
	    if (document.forms[0].id == "VerisignForm1"){
	    	//alert(document.forms[0].id);
	        switch (StoreLocation){
	            case "rc":
                    document.forms[0].Hidden1.value = "jum4813087379"
                    document.forms[0].Hidden2.value = "wfb"
                default:
            }
         }
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		JTop_home_over = newImage("../../images/JTop_home-over.jpg");
		JTop_whatis_over = newImage("../../images/JTop_whatis-over.jpg");
		JTop_sched_over = newImage("../../images/JTop_sched-over.jpg");
		JTop_location_over = newImage("../../images/JTop_location-over.jpg");
		JTop_gallery_over = newImage("../../images/JTop_gallery-over.jpg");
		preloadFlag = true;
	}	
}

var popUp; 

function OpenCalendar(idname, postBack)
{
	popUp = window.open('calendar.aspx?formname=' + document.forms[0].name + 
		'&id=' + idname + '&selected=' + document.forms[0].elements[idname].value + '&postBack=' + postBack, 
		'popupcal', 
		'width=170,height=240,left=200,top=250');
}

function SetDate(formName, id, newDate, postBack)
{
	eval('var theform = document.' + formName + ';');
	popUp.close();
	theform.elements[id].value = newDate;
	if (postBack)
		__doPostBack(id,'');
}		

