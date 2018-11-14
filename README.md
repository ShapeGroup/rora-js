![](https://i.imgur.com/o8BGMf3.jpg)


# Welcome to Rora Js


Rora (wheel / gear) is a small but powerful javascript library that allows you to manage all the common actions you would do on a user interface.

The main task of the framewrok is to manage, more quickly, the problems inherent in the actions and requests the front-end. From loops to actions.



GitPage: [LINK](https://shapegroup.github.io/rora-js/)
DOWNLOAD RORA.JS : [LINK](https://github.com/ShapeGroup/rora-js/blob/master/rora.min.js)



### Exemple

retrieve elements from the dom and cycle them in a simple way:

```
doc.find(".test").loop((node,collection) => {
  my loop...
});

```
a simple click action:


```
doc.find(".test").on("click", (node,collection)=>{

    var clickedEl = node.html.innerHTML;

    collection.loop((node)=>{
        node.html.innerHTML = "looped";
    });

    clickedEl.innerHTML = "looped - CLICK!";

});

```

or, for example, a more complex action on a swipe and the modification of the Dom:

```
var mytarget = doc.find("body");
doc.on(mytarget, "swipe", () => {
    doc.find(".testTouch").mods("write", ("you swiper on "+swipedirection));
});
```



### Difference to differences between rora js and other famous frameworks
Most non-mvc frameworks are based on the collection of an element and determine it as "this" with the natural consequence of continuous page refresh and the probability of losing the subject being processed. In Rora, on the other hand, objects and arrays of elements are processed according to need (or taste).

For example, it is possible to work the array list of the colletion object with the framwork modifiers:

```
doc.find(".button").on( "click", (collection) => {
    collection.mods("write", "wow! you click!"));
});
```

or extrapolate the child html node by entering the object itself to work it with pure javascript.

```
doc.find(".button").on( "click", (collection) => {
    collection.html.innerHTML = "wow! you click!";
});
```




### Other info:
Rora, is the alternate for every basic action on the frontend-dev and design.
We're going to implement the wiki and all the features.

Stay tuned.
