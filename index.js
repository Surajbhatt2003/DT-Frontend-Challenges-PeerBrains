
const toggleMenu = () => {
  const menu = document.getElementById('menu-icon')
  const nav = document.getElementById('vertical-nav')
  nav.classList.toggle('active')
  menu.classList.toggle('active-menu-icon')
}

// create assets cards 
const addCardsElements = (data) => {

  var container = document.getElementById('task-container')

  data.forEach((item, i) => {

      container.innerHTML += `
          <div class="task-card" id='task${i + 1}'>
              <div class="card-headding">
                  <p>${item.asset_title}</p>
              </div>

              <div class="card-body">
                  <div class="asset">
                  ${item.asset_content_type === 'threadbuilder' ? (`<p>${item.asset_description}</p>`) : ''}
                      ${item.asset_content_type === 'video' ? (`<iframe src=${item.asset_content} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`) : ''}
                      ${item.asset_content_type === 'article' ? (`<iframe src=${item.asset_content} frameborder="0"></iframe>`) : ''}
                  </div>
                  <div class="more" id="more">
                  <p><span>Description: </span>${item.asset_description}</p> 
                      <p><span>Content: </span>${item.asset_content}</p> 
                      <p><span>ID: </span>${item.asset_id}</p> 
                      <p><span>Type: </span>${item.asset_type}</p> 
                  </div>
                  <hr>
              </div>
              <div class="card-footer">
                  <div class="arrow" id="arrow" onClick="seeMore(${i})">
                      <i class="fa-solid fa-arrow-down"></i>
                  </div>
              </div>
          </div>
      `
  })
}

// fetch data from json file
const fetchData = async () => {
  fetch('./data.json')
      .then((response) => response.json())
      .then((data) => addCardsElements(data.tasks[0].assets))
      .catch(error => console.log('Request failed', error))
}

window.onload = fetchData;

// see more button
const seeMore = (i) => {
  const more = document.getElementsByClassName('more')
  more[i].classList.toggle('more-active')
}

function toggleNoticeBoard() {
  var noticeBoard = document.getElementById('notice-board');
  if (noticeBoard.style.display === 'none' || noticeBoard.style.display === '') {
      noticeBoard.style.display = 'block';
  } else {
      noticeBoard.style.display = 'none';
  }
}
