function testNoteListInitialization() {
  var noteList = new NoteList;
  var note1 = new Note("test note");
  var note2 = new Note("another note");

  noteList.addNote(note1);
  noteList.addNote(note2);
  console.log(note1.text);
  console.log(note2.text);
  console.log(noteList);
  console.log(noteList.notes);
  console.log("hello2");
  assert.isTrue(noteList.notes === ["test note", "another note"]);
  console.log("hello3");
};
console.log("hello1");
testNoteListInitialization();
console.log("hello2");
