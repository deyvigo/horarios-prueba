import './../css/style.css'
import cicles from './../json/cursos.json'

window.addEventListener('load', () => {

  setCourses()

})

const setCourses = () => {

  const table = document.querySelector('#courses-container')

  const sortedCicles = cicles.sort((a, b) => a.cicle - b.cicle)

  sortedCicles.forEach(cicle => {
    let element = ''
    let span = cicle.courses.length
    element += `
    <tr class="p-2">
      <td rowspan="${span}" class="text-white p-2 border-2 border-purple-600 text-center">${cicle.cicle}</td>
    `
    cicle.courses.forEach(course => {
      element += `
        <td class="text-white p-2 border-2 border-purple-600">${course.name}</td>
        <td class="text-white p-2 border-2 border-purple-600">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" checked>
        </td>
        </tr>
      `
    })
    table.innerHTML += element
  })
}
