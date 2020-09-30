const url = 'http://localhost:3000/notes'
const notesList = document.querySelector('#notesList')
const buttonSection = document.querySelector('#buttonSection')
const editButton = document.createElement('button')
let deleteButton = document.createElement('button')

document.addEventListener('submit', function (event) {
    event.preventDefault()
    createNote()
})

notesList.addEventListener('click', function (event) {
    if (event.target.matches('.delete')) {
        console.log(event.target.parentElement.dataset.id)
        deleteNote(event.target.parentElement.dataset.id)
    }
    if (event.target.matches('.edit')) {
        console.log(event.target.parentElement.dataset.id)
        editNote(event.target.parentElement.dataset.id)
    }
})

function renderNotesList() {
    fetch(url)
        .then(res => res.json())
        .then(notes => {
            let notesList = document.querySelector('#notesList')
                for (let note of notes) {
                    renderNoteItem(note)
                }
            })
        }

function renderNoteItem (note) {
    const noteInput = document.querySelector('#noteInput').value
    const notesList = document.querySelector('#notesList')
        let addedNote = document.createElement('div')
            addedNote.dataset.id = note.id
            addedNote.id = `item-${note.id}`
            addedNote.classList.add('note-card')
            addedNote.innerText = note.noteItem
            notesList.appendChild(addedNote)
        let editButton = document.createElement('button')
            editButton.classList.add('edit')
            editButton.innerText = 'Edit'
            addedNote.appendChild(editButton)
        let deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.innerText = 'Delete'
            addedNote.appendChild(deleteButton)
        }

function createNote() {
    const noteInputField = document.querySelector('#noteInput')
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            noteItem: noteInputField.value,
        })
    })
        .then(res => res.json())
        .then(note => {
            noteInputField.value = ''
            renderNoteItem(note)
        })
    }

function editNote(noteId) {
    fetch (url + ':' + noteId, {
        method: 'PATCH'
    })
        .then(res => res.json())
        .then(data => {
            const noteToEdit = document.querySelector(`#item-${noteId}`)
            
        })

}

function deleteNote (noteId) {
    fetch (url + '/' + noteId, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            const noteToRemove = document.querySelector(`#item-${noteId}`)
            noteToRemove.remove()
        })
}

renderNotesList()