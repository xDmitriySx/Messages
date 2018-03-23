	
var div = document.getElementById("input");



    //Main function, with checking condition about empty textarea
    function start(){

    	if (document.getElementById('textarea').value !== ''){
    		user_name();
    		time_determine();
    		create_message();			
    	}
    }



	//Function for sending messages with "Ctrl+Enter"
	function ctrlEnter(event, formElem) 
	{
		if ((event.ctrlKey) && ((event.keyCode == 0xA) || (event.keyCode == 0xD))) {
			start();
		}
	}

	//Functions for scrollbar's appear and disappear
	function scrollAppear() {
		var scrollField = document.getElementById("input");
		scrollField.style.overflowY = "scroll";
	}

	function scrollDisappear() {
		var scrollField = document.getElementById("input");
		scrollField.style.overflowY = "hidden";
	}


	//creating div which contain the Username
	function user_name(){
		var name = document.createElement("div");
		name.textContent = "NAME";
		name.setAttribute("class", "user_name");
		div.appendChild(name);
	}

	//creating div which contain the information about a time above message
	function time_determine(){
		
		var arr = ["января", "февраля", "марта", "апреля",
		"мая", "июня", "июля", "августа",
		"сентября", "октября", "ноября", "декабря"
		];

		var date = new Date();
		var time = date.getDate() + " " + arr[date.getMonth()] + " " + date.getFullYear();
		/*date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();*/
		var dt = document.createElement("div");
		dt.textContent = time;
		div.appendChild(dt);
	}

	//creating div which contain text(message) written by user in textarea
	function create_message(){
		var message = document.createElement("div");
		var comment = document.getElementById("textarea").value;
		message.textContent = comment;
		message.setAttribute("class", "commentscreating");
		div.appendChild(message);
		// clear comment-field 
		document.getElementById('textarea').value = '';
		div.scrollTop += 10000000; 
	}


	var button = document.getElementById("done");
	button.addEventListener("click", start);



