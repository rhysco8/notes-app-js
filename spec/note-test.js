function testNoteInitialization() {
  var note = new Note("test note");
  assert.isTrue(note.text === "test note");
};
testNoteInitialization();
