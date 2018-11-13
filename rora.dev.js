
////// define window states

onDomTreeReading = (X) => {

    var DocReading = document.onreadystatechange;
    document.onreadystatechange = () => {
        if (DocReading) { DocReading(); }; X();
        console.debug("▒▒▒ rora : dom three status colling >>> Dom Tree under reading (load and reload)\n▒▒▒        └[info: low cpu and doesn't consider the extra fires called]");
    }

}

onDomTreeReaded = (X) => {

    var DocReady = document.onreadystatechange;
    document.onreadystatechange = () => {

        if (document.readyState === "complete")
        {
            if (DocReady) { DocReady(); };  X();
            console.log("▒▒▒ rora : dom three status colling >>> after Dom Tree is Ready and loaded\n▒▒▒        └[info: low cpu and doesn't consider the extra fires called]");
        }

    }

}

onContentIsLoaded = (X) => {

    var winload = window.onload;
    window.onload = () => {
        
        if (winload) { winload(); }; X();

        console.log("▒▒▒ rora : content status colling >>> after all Content is Loaded \n▒▒▒        └[info: all images, css, scripts, etc. are loaded, final page rendered]");

    }

}

onWindowUnload = (X) => {

    var WinUn = window.onunload;
    window.onunload = () => {
        if (WinUn) { WinUn(); };
        X();
        console.log("▒▒▒ rora : content status colling >>> window start or exit \n▒▒▒└ (info: perfect to intercept hystory frame etc.)\n\n");

    }

}



/* rora haguruma */ onDomTreeReaded(() => {



    console.log("▒▒▒ rora : starting...")
    console.time("▒▒▒ rora : ready | loaded in:");

    ////// define the multiElem of doc

    doc =  window.document;
       
    var finder = { list: "no elements or targets" };        //delete var for global passing
    var node = { html: "no html element" };                 //delete var for global passing
    var collection = { html: "no html collection" };        //delete var for global passing


    ////// define the (doc/finded) target
    

    doc.find = (subjectName) => {

        let name, El, ElLast, nameNumber, childSelected, elements,
            F = new RegExp(":first-child"), isFEl = F.test(subjectName),
            L = new RegExp(":last-child"), isLEl = L.test(subjectName),
            N = new RegExp(":nth"), isNEl = N.test(subjectName);

        if (subjectName === "window") { alert("▒▒▒ ERROR ▒▒▒\n\n -''window'' is not available target for find.\n\n"); }
        else if (subjectName === "document") { alert("▒▒▒ ERROR ▒▒▒\n\n -''document'' is not available target for find.\n\n - Remember: the ''doc.'' is the document!\n - If you are looking for the general contentin your viewport, try with body.\n\n"); }

        else if (subjectName === "body")
        {
            elements = Array.from(document.querySelectorAll("BODY"));
        }
        else if (isFEl)
        {
            name = subjectName.split(":")[0];
            El = document.querySelectorAll(name)[0];
            elements = [];
            elements.push(El)
        }
        else if (isLEl)
        {
            name = subjectName.split(":")[0];
            El = document.querySelectorAll(name);
            ElLast = El[El.length - 1];
            elements = [];
            elements.push(ElLast)
        }
        else if (isNEl)
        {
            name = subjectName.split(":")[0];
            nameNumber = subjectName.split(":nth-child(")[1]; childSelected = nameNumber.split(")")[0];
            El = document.querySelectorAll(name)[(childSelected-1)];
            elements = [];
            elements.push(El)
        }
        else
        {
            elements = Array.from(document.querySelectorAll(subjectName));
        }

        if (!Array.isArray(elements)) { alert("▒▒▒ ERROR ▒▒▒\n\n -The type of find is not an array!\n\n") };

        finder.list = elements;

        return finder;
    }

    finder.find = () => { alert("▒▒▒ ERROR ▒▒▒\n\n - bad pratic on find.\nIs Not good create a follow of follow [...] of follow finded element\n\n"); };


    ////// work the target property


    doc.loop = (target, back) => {

        let List;
        if (target == "[object Object]")
        {
            List = Object.values(target)[0];
            //alert("loop target is [object Object]... transformed: \n"+List);
        }
        else if (!Array.isArray(target)) {
            List = [target];
            //alert("loop target isn't Array... transformed: \n" + List);
        }
        else
        {
            //alert("loop target isn't conformed... get the last finder: \n" + List);
            List = finder.list;
        }

        for (let i = 0; i < List.length; i++)
        {
            var el = List[i], elList = List;
            CreateLooper(el, elList);
            back(node,collection);
        }

        return finder;
    };

    finder.loop = (back) => {
        let List = finder.list;
        for (let i = 0; i < List.length; i++)
        {
            var el = List[i], elList = List;
            CreateLooper(el, elList);
            back(node, collection);
        }

        return finder;
    };

    node.loop = () => {
        let el = [node.html];
        CreateLooper(el, elList);
        return result;
    };

    collection.loop = (back) => {
        let List = Object.values(collection.html)[0];
        for (let i = 0; i < List.length; i++)
        {
            var el = List[i], elList = List;
            CreateLooper(el, elList);
            back(node, collection);
        }

        return finder;

    };

    function CreateLooper(el, elList)
    {
        node.html = el,
        collection.html = elList;
    }


    ////// create dom modders


    doc.mods = (target, todo, what) => {
        let List; "[object Object]" == target ? List = Object.values(target)[0] : Array.isArray(target) ? List = finder.list : List = [target];
        DocModder(List, todo, what);
        return (finder, result);
    };

    finder.mods = (todo, what) => {
        let List = finder.list;
        DocModder(List, todo, what);
        return(finder, result);
    };

    node.mods = (todo, what) => {
        let List = [node.html];
        DocModder(List, todo, what);
        return result;
    };

    collection.mods = (back) => {
        let List = Object.values(collection.html)[0];
        DocModder(List, back);
        return result;
    };

    function DocModder(List, todo, what) {

        for (let i = 0; i < List.length; i++) {
            
            let el = List[i];
            
            switch (todo) {

                case "get-css":
                    result = window.getComputedStyle(el, null).getPropertyValue(what)
                    break;

                case "get-attribute":
                    result =  el.getAttribute(what);
                    break;

                case "set-attribute":
                    result = el.setAttribute(what[0], what[1]);
                    break;

                case "remove-attribute":
                    result = el.removeAttribute(what);
                    break;

                case "new-style":
                    result = el.style.cssText = what;
                    break;

                case "addClass":
                    result = el.classList.add(what);
                    break;

                case "removeClass":
                    result = el.classList.remove(what);
                    break;

                case "replaceClass":
                    result = el.classList.replace(what[0], what[1]);
                    break;

                case "toggleClass":
                    result = el.classList.toggle(what);
                    break;

                case "write":
                    result = (el.textContent = what);
                    break;

                case "unWrap":
                    result = (el.outerHTML = el.innerHTML);

                case "code-override":
                    result = el.innerHTML = what;
                    break;

                case "code-prepend":
                    result = el.insertAdjacentHTML('afterbegin', what);
                    break;

                case "code-append":
                    result = el.insertAdjacentHTML('beforeend', what);
                    break;

                case "code-beforeElement":
                    result = el.insertAdjacentHTML('beforebegin', what);
                    break;

                case "code-afterElement":
                    result = el.insertAdjacentHTML('afterend', what);
                    break;

                default: document.do(alert("▒▒▒ ERROR ▒▒▒\n\n -n .mods: type of modder not recognized or non-existent!\n\n"));
            }

        }
        return (result);

    }


    ////// create an actor


    doc.actor = (target, fname, back) => {

        let List;
        if (target == "[object Object]") {
            List = Object.values(target)[0];
        }
        else if (!Array.isArray(target)) {
            List = [target];
        }
        else {
            List = finder.list;
        }

        CallActor(List, fname, back);
        return finder;

    };

    finder.actor = (fname, back) => {
        let List = finder.list;

        CallActor(List, fname, back);
        return finder;
    };

    node.actor = (fname, back) => {
        let List = [node.html];
        CallActor(List, fname, back);
        return finder;
    };

    collection.actor = (back) => {
        let List = Object.values(collection.html)[0];
        CallActor(List, fname, back);
        return finder;
    };

    function CallActor(List, fname)
    {
        for (var i = 0; i < List.length; i++)
        {
            fname.call(List[i])(back);
        };

    };


    ////// create on action event


    doc.on = (target, actiontype, back) => {

        let List;
        if (target == "[object Object]") { List = Object.values(target)[0]; }
        else if (!Array.isArray(target)) { List = [target]; }
        else { List = finder.list; }

        CreateEvent(List, actiontype, back);

        return finder;

    };

    finder.on = (actiontype, back) => {
        let List = finder.list;
        CreateEvent(List, actiontype, back);
        return finder;
    };

    node.on = (actiontype, back) => {
        let List = [node.html];
        CreateEvent(List, actiontype, back);
        return (finder, result);
    };

    collection.on = (back) => {
        let List = Object.values(collection.html)[0];
        CreateEvent(List, actiontype, back);
        return finder;
    };

    function CreateEvent(List, actiontype, back) {

        for (let i = 0; i < (List.length); i++) {

            let el = List[i];

            switch (actiontype) {

                case "click":
                    el.addEventListener('click', (e) => {
                        e.stopPropagation();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);

                    },false);
                    break;

                case "doubleclick":
                    el.addEventListener('dblclick', (e) => {
                        e.stopPropagation();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);
                    }, false);
                    break;

                case "middleclick":
                    el.addEventListener('auxclick', (e) => {
                        e.stopPropagation();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);
                    }, false);
                    break;

                case "short-tap":

                    var shortTapTimer = 0;
                    el.addEventListener('touchstart', function (e) {
                        e.preventDefault();

                        shortTapTimer = setTimeout(function () {

                            clearTimeout(shortTapTimer);

                            node.html = List[i];
                            collection.html = [List];

                            clicker = List[i];

                            back(node, collection, clicker);

                        }, 700);

                    },false);
                    el.addEventListener('touchend', function (e) {
                        e.preventDefault();
                        clearTimeout(shortTapTimer);
                    },false);

                    break;

                case "long-tap":

                    var longTapTimer = 0;
                    el.addEventListener('touchstart', function (e) {
                        e.preventDefault();
                        longTapTimer = setTimeout(function () {
                            clearTimeout(longTapTimer);

                            node.html = List[i];
                            collection.html = [List];

                            clicker = List[i];

                            back(node, collection, clicker);
                        }, 1300);
                    }, false);
                    el.addEventListener('touchend', function (e) {
                        e.preventDefault();
                        clearTimeout(longTapTimer);
                    }, false);

                    break;
                    
                case "mouse-enter":
                    el.addEventListener('mouseover', (e) => {
                        e.preventDefault();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);
                    });
                    break;

                case "mouse-exit":
                    el.addEventListener('mouseout', (e) => {
                        e.preventDefault();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);
                    });
                    break;

                case "stop-drag":
                    ['mouseout', 'mouseup', 'touchend'].forEach(function (e) {
                        el.addEventListener(e, () => {

                            node.html = List[i];
                            collection.html = [List];

                            clicker = List[i];

                            back(node, collection, clicker);
                        });
                    });
                    break;

                case "mouse-move":
                    el.addEventListener('mousemove', (e) => {
                        e.preventDefault();

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker);
                    });
                    break;

                case "scroll":
                    window.addEventListener('scroll', (el) => {

                        var viewportdistance = {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right:0
                        };
                        var eldistance = {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0
                        };

                        viewportdistance.top = window.pageYOffset;
                        viewportdistance.left = window.pageXOffset;
                        viewportdistance.bottom = window.pageYOffset + window.innerHeight;
                        viewportdistance.right = window.pageXOffset + window.innerWidth;

                        eldistance.top = List[i].offsetTop;
                        eldistance.left = List[i].offsetLeft;
                        eldistance.right = List[i].offsetRight;
                        eldistance.bottom = List[i].offsetBottom;
                        
                        ViewportDistance = viewportdistance;
                        ElementDistance = eldistance;

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, ViewportDistance, ElementDistance);
                       
                    });
                    break;

                case "swipe":
                case "drag":
                case "drag-left":
                case "drag-right":
                case "drag-down":
                case "drag-up":

                    let swipedir,
                        touchArea,
                        startX, startY,
                        distX, distY,
                        threshold = 150, //required min distance traveled to be considered swipe
                        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
                        allowedTime = 300, // maximum time allowed to travel that distance
                        elapsedTime,
                        startTime;

                    var drg = {
                        axis: { x: 0, y: 0 },
                        direction: { up: 0, down: 0, left: 0, right: 0 }
                    };

                    el.addEventListener('touchmove', function (e) {

                        if (actiontype != "drag") { e.preventDefault() /* prevent swipe scrolling */ }

                        touchArea = e.changedTouches[0];
                        movementX = touchArea.pageX,
                        movementY = touchArea.pageY;

                        if (actiontype == "drag") {

                            drg.axis.x = movementX;
                            drg.axis.y = movementY;

                        }
                        if (actiontype == "drag-left") {

                            if (startX - movementX >= 0) {
                                drg.direction.left = (startX - movementX);
                            }
                            else { drg.direction.left = 0; }
                        }
                        else if (actiontype == "drag-right") {

                            if (startX - movementX <= 0) {
                                drg.direction.right = (startX - movementX) * -1;
                            }
                            else { drg.direction.right = 0; }
                        }
                        else if (actiontype == "drag-down") {

                            if (startY - movementY <= 0) {
                                drg.direction.up = (startY - movementY) * -1;
                            }
                            else { drg.direction.up = 0; }
                        }
                        else if (actiontype == "drag-up") {

                            if (startY - movementY >= 0) {
                                drg.direction.up = (startY - movementY);
                            }
                            else { drg.direction.up = 0; }
                        }
                        if (actiontype.startsWith("drag"))
                        {
                            drag = drg;
                            node.html = List[i];
                            collection.html = [List];

                            clicker = List[i];

                            back(node, collection, clicker, drag);
                        }

                        e.preventDefault();

                    }, false);

                    el.addEventListener('touchstart', function (e) {
                        
                        touchArea = e.changedTouches[0];
                        swipedir = 'none',
                        dist = 0,
                        startX = touchArea.pageX,
                        startY = touchArea.pageY,
                        startTime = new Date().getTime();
                        
                        e.preventDefault()
                    }, false);

                    el.addEventListener('touchend', function (e) {

                        touchArea = e.changedTouches[0],
                        distX = touchArea.pageX - startX,
                        distY = touchArea.pageY - startY,
                        elapsedTime = new Date().getTime() - startTime;

                        let stop = elapsedTime <= allowedTime, act = actiontype; //rewrited short vars

                        if (act == "swipe" && stop) {
                            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                                swipedir = (distX < 10) ? 'left' : 'right'
                            }
                            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                                swipedir = (distY < 10) ? 'up' : 'down'
                            }
                        }
                        else if (act == "swipe-x" && stop) {
                            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                                swipedir = (distX < 10) ? 'left' : 'right'
                            }
                        }
                        else if (act == "swipe-y" && stop) {
                            if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                                swipedir = (distY < 10) ? 'up' : 'down'
                            }
                        }
                        else if (act == "swipe-up" && stop) {
                            if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                                if (distY < 10) { swipedir = 'up' };
                            }
                        }
                        else if (act == "swipe-down" && stop) {
                            if (elapsedTime <= allowedTime) {
                                if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                                    if (distY > 10) { swipedir = 'down' };
                                }
                            }
                        }
                        else if (actiontype == "swipe-left" && stop) {
                            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                                if (distX < 10) { swipedir = 'left' };
                            }
                        }
                        else if (actiontype == "swipe-right" && stop) {
                            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                                if (distX > 10) { swipedir = 'right' };
                            }
                        }

                        if (swipedir){
                            swipedirection = swipedir;
                        }

                        node.html = List[i];
                        collection.html = [List];

                        clicker = List[i];

                        back(node, collection, clicker, swipedirection);

                        e.preventDefault();

                    }, false)

                    break;

                default: document.do(alert("▒▒▒ ERROR ▒▒▒\n\n - Error in ''.on'': type or target of event not recognized or non-existent.\n\n"));

            }

        }

    };


    ////// create on include event


    doc.include = (target, path) => {

        let List;
        if (target == "[object Object]") { List = Object.values(target)[0]; }
        else if (!Array.isArray(target)) { List = [target]; }
        else { List = finder.list; }
        include(List, path);
        return finder;

    };

    finder.include = (path) => {
        let List = finder.list;
        include(List, path);
        return finder;
    };

    node.include = (path) => {
        let List = [node.html];
        include(List, path);
        return finder;
    };

    collection.include = (path) => {
        let List = Object.values(collection.html)[0];
        include(List, path);
        return finder;
    };

    var FromDataInclude = document.querySelectorAll('div[data-include]');
    for (i = 0; i < FromDataInclude.length; i++) {
        let List = [...FromDataInclude];
        include(List);
    };

    function include(List, path) {

        console.info("▒▒▒ rora : include Tecnique >>> The tecnique of include wait the server repons...  for including action.");

        var data = path;

        for (let i = 0; i < List.length; i++) {

            let el = List[i];

            if (path == undefined) {
                //var directinclude = true;
                data = List[i].getAttribute("data-include");
            }

            if (data) {

                //check the path error
                if (data.startsWith("/")) {
                    alert("▒▒▒ ERROR ▒▒▒\n\n -n include file path: do not use the ' / ' as initial.\n\n\Follow the example below:\n<div include='myfolder/.../file.html'></div>\n\n");
                    let mex = '<p style="background:white !important; padding:20px !important; border: 1px solid red !important; color:red !important; font-weight:bold !important;"> !! ERROR: WRONG PATH FOR INCLUDE</p>';
                    el.innerHTML = mex;
                };

                //create HTTP request
                let request = new XMLHttpRequest();
                request.onload = function ()
                //request.onreadystatechange = function ()  //simple alternative
                {

                    if (this.status == 200) // if ok
                    {
                        console.log("▒▒▒ rora : included file >>> " + data + " | request status: " + this.status + " | data printed:(for see active line 813)" /* \n\n+ this.responseText*/);
                        el.innerHTML = this.responseText;
                        if (el.matches('[data-include]')) {
                            // unwrap
                            el.outerHTML = el.innerHTML;
                        }
                    }
                    else if (this.status == 404) // if ok... but not found
                    {
                        alert("▒▒▒ ERROR ▒▒▒\n\n -n include file path or server:\n404 file not founded.\n\n");
                    }
                    else if (this.status != (404 && 0 && 200)) // if... wtf!??
                    {
                        alert("▒▒▒ ERROR ▒▒▒\n\n -n include: undefined server error on include js.\n\n");
                    }

                }

                // send all... and exit
                request.open("GET", data, false);
                request.send();
            }

        }

        //if(directinclude) { return this; }
    };

    onContentIsLoaded(() => {  // create on include injection action

        setTimeout(() => {

            console.info("▒▒▒ rora : injection Tecnique >>> The tecnique of inject wait 150ms extra  (only once) for loading all including.");

            var injector = doc.find("[data-injector]");
            doc.loop(injector, () => {

                var roles = node.mods("get-attribute", "data-injector"),
                    RoleAction = roles.split(",")[0],
                    RoleTarget = roles.split(",")[1],
                    RolePath = roles.split(",")[2];

                node.on(RoleAction, () => {
                    doc.find("" + RoleTarget).include("" + RolePath);
                    console.log("▒▒▒ rora : injection Tecnique >>> action: " + RoleAction + " > on target " + RoleTarget + " > calling " + RolePath);
                });

            });

        }, 150); // 4 what?

    });


    ////// create an ajax calling


    doc.talk = (sendType, asyncMode, responsType, pageAddress, back ) => {

       let respons = {
            start: false + "status undefined",
            data: "data request undefined",
            success: false + "status undefined"
        };

        if (pageAddress) {

            let request = new XMLHttpRequest();

            request.onload = function () {

                if (this.readyState == 4) {
                    respons.start = true;

                    if (this.status == 200) {
                        if (responsType == "output-xml") {
                            respons.data = this.responseXML;
                        }
                        else if (responsType == "output-text") {
                            respons.data = this.responseText;
                        }

                        respons.success = true;

                    }

                }
                else if (this.readyState == 0) {
                    respons.status = "error";
                    alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: Server not repond\n\n");
                }
                else if (this.status == 403) // if ok... but adios
                {
                    respons.status = "forbidden";
                    alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: forbidden requests\n\n");
                }
                else if (this.status == 404) // if ok... but not found
                {
                    respons.status = "404 not found";
                    alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: server 404 not found.\n\n");
                }
            }


            // send all...
            if (asyncMode == "mode-server") { asyncMode = false }
            else if (asyncMode == "mode-unlinear") { asyncMode = true }
            else { alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: you can us mode-server or mode-unlinear.\n\n- server is syncronus server request, unlinear = unsync page request.\n\n"); }
            if (sendType == "type-get") { sendType = "Get" }
            else if (sendType == "type-post") { sendType = "Post" }
            else { alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: you can us type-get or type-post.\n\n- Get is for small data, Post is for complex data.\n\n"); }
            request.open(sendType, pageAddress, asyncMode);
            request.send();


        }
        else{  alert("▒▒▒ ERROR ▒▒▒\n\n - Error // talking fail: page, server or path not recognized.\n\n"); };

        back(respons);

    };

    console.timeEnd("▒▒▒ rora : ready | loaded in:");

});