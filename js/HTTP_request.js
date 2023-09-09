fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((element) => {
      let ul_item = document.createElement("ul");
      let li_item = document.createElement("li");
      let span_item = document.createElement("span");
      span_item.textContent = element.id;
      let h4_item = document.createElement("h4");
      h4_item.textContent = element.title;
      let p_item = document.createElement("p");
      p_item.textContent = element.body;
      let a_item = document.createElement("a");
      a_item.textContent = "Read more";
      document.body.appendChild(ul_item);
      ul_item.appendChild(li_item);
      li_item.append(span_item, h4_item, p_item, a_item);
    })
  );
