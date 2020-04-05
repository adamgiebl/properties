
  fetch("http://nikivyski.eu/properties/wp-json/wp/v2/property")
    .then(response => response.json())
    .then(handleData);

function handleData(property){
    property.forEach(showProperties)
}

function showProperties(property) {
  console.log(property);
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = property.address;
     copy.querySelector("span.bed").textContent = property.bed;
     copy.querySelector("span.bath").textContent = property.bath;
     copy.querySelector("span.squares").textContent = property.sq_feet;
     copy.querySelector(".img").src = property.picture.guid;


    document.querySelector("main").appendChild(copy);

}
