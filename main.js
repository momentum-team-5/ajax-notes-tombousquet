const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function (event) {
    event.preventDefault()
    createNote()
})

function renderNotesList() {
    fetch(url)
        .then(res => res.json())
        .then(notes => {
            let notesList = document.querySelector('#notesList')
                for (let note of notes) {
                    console.log(note)
                addedNote = document.createElement('div')
                    addedNote.classList.add('note-card')
                    addedNote.innerText = note.noteItem
                notesList.appendChild(addedNote)
                }
            })
        }

function createNote() {
    const noteInput = document.querySelector('#noteInput').value
    console.log(noteInput)

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            noteItem: noteInput,
        })
    })
        .then(res => res.json())
        .then(note => {
            const notesList = document.querySelector('#notesList')
            const addedNote = document.createElement('div')
                addedNote.classList.add('note-card')
                addedNote.innerText = note.noteItem
            notesList.appendChild(addedNote)
        })
    }

renderNotesList()

function existingNote() {
const notesList = document.querySelector('#notesList')
buttonSection = document.querySelector('#buttonSection')

notesList.addEventListener('click', function (event) {
    console.log(event.target)
    editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.innerText = 'Edit'
        buttonSection.appendChild(editButton)
    deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerText = 'Delete'
        buttonSection.appendChild(deleteButton)
//space to call delete and edit functions        
})
}

existingNote()

// function editNote() {

// }


// function deleteNote (noteId) {
//     fetch (url + '/' + noteId, {
//         method: 'DELETE'
//     })
//         .then(res => res.json())
//         .then(data => {
//             //const noteToRemove = document.querySelector()
//             noteToRemove.remove()
//         })
//}
