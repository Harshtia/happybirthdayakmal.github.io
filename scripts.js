const entriesDiv = document.getElementById('entries');
const entryTextarea = document.getElementById('entry');

function addEntry() {
    const entryText = entryTextarea.value.trim();
    if (entryText === '') {
        alert('Please write something before adding an entry.');
        return;
    }
    
    const newEntryDiv = document.createElement('div');
    newEntryDiv.className = 'entry';
    newEntryDiv.textContent = entryText;
    entriesDiv.appendChild(newEntryDiv);
    
    entryTextarea.value = '';
}
