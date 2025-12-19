const viewFilmsBtn = document.getElementById('view-films-btn')
const createFilmBtn = document.getElementById('create-film-btn')
const findFilmBtn = document.getElementById('find-film-btn')
const toggleFilmStatusBtn = document.getElementById('toggle-film-status-btn')
const filmDisplay = document.getElementById('film-display')

const movies = [
{ title: 'Inception', isAvailable: true },
{ title: 'The Dark Knight', isAvailable: true },
{ title: 'Avatar', isAvailable: false },
{ title: 'Titanic', isAvailable: true },
{ title: 'Avengers: Endgame', isAvailable: false },
]

function viewFilms() {
  clearFilmDisplay()

  const ul = document.createElement('ul')

  movies.forEach((movie, index) => {
    const li = document.createElement('li')

    li.innerHTML = `
      <span>
        <b>${movie.title}</b> — 
        ${movie.isAvailable ? 'Доступен' : 'Выдан'}
      </span>
      <span>
        <button class="edit-btn" onclick="editFilm(${index})">
          Редактировать
        </button>
        <button class="remove-btn" onclick="removeFilm(${index})">
          Удалить
        </button>
      </span>
    `

    ul.appendChild(li)
  })

  filmDisplay.appendChild(ul)
}

function createFilm() {
  clearFilmDisplay()

  const input = document.createElement('input')
  input.placeholder = 'Название фильма'

  const btn = document.createElement('button')
  btn.textContent = 'Добавить'

  btn.onclick = () => {
    const title = input.value.trim()
    if (!title) return

    movies.push({
      title,
      isAvailable: true
    })

    viewFilms()
  }

  filmDisplay.append(input, btn)
}

function findFilm() {
  clearFilmDisplay()

  const input = document.createElement('input')
  input.placeholder = 'Введите название фильма'

  const btn = document.createElement('button')
  btn.textContent = 'Найти'

  btn.onclick = () => {
    clearFilmDisplay()

    const value = input.value.toLowerCase()

    const foundMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(value)
    )

    if (foundMovies.length === 0) {
      filmDisplay.textContent = 'Фильмы не найдены'
      return
    }

    const ul = document.createElement('ul')

    foundMovies.forEach(movie => {
      const li = document.createElement('li')
      li.textContent = `${movie.title} — ${movie.isAvailable ? 'Доступен' : 'Выдан'}`
      ul.appendChild(li)
    })

    filmDisplay.appendChild(ul)
  }

  filmDisplay.append(input, btn)
}

function toggleFilmStatus() {
  clearFilmDisplay()

  const input = document.createElement('input')
  input.placeholder = 'Название фильма'

  const btn = document.createElement('button')
  btn.textContent = 'Изменить статус'

  btn.onclick = () => {
    const movie = movies.find(
      m => m.title.toLowerCase() === input.value.toLowerCase()
    )

    if (!movie) {
      alert('Фильм не найден')
      return
    }

    movie.isAvailable = !movie.isAvailable
    viewFilms()
  }

  filmDisplay.append(input, btn)
}

function editFilm(index) {
  clearFilmDisplay()

  const input = document.createElement('input')
  input.value = movies[index].title

  const btn = document.createElement('button')
  btn.textContent = 'Сохранить'

  btn.onclick = () => {
    const newTitle = input.value.trim()
    if (!newTitle) return

    movies[index].title = newTitle
    viewFilms()
  }

  filmDisplay.append(input, btn)
}

function removeFilm(index) {
  movies.splice(index, 1)
  viewFilms()
}

viewFilmsBtn.onclick = viewFilms
createFilmBtn.onclick = createFilm
findFilmBtn.onclick = findFilm
toggleFilmStatusBtn.onclick = toggleFilmStatus