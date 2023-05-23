import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
	state: () => {
		return {
			notes: [
				{
					id: "id1",
					content:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,ducimus dolores dignissimos fugiat at quisquam dolor quidem possimus",
				},
				{
					id: "id2",
					content: "This is a shorter note!",
				},
			],
		};
	},
	actions: {
		addNote(newNote) {
			let currentDate = new Date().getTime();
			let id = currentDate.toString();

			let note = {
				id: id,
				content: newNote,
			};

			this.notes.unshift(note);
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter((note) => note.id !== idToDelete);
		},
		updateNote(id, content) {
			const index = this.notes.findIndex((note) => note.id === id);
			this.notes[index].content = content;
		},
	},
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter((note) => note.id === id)[0].content;
			};
		},
		getTotalNotesCount: (state) => {
			return state.notes.length;
		},
		getTotalCharactersCount: (state) => {
			let count = 0;

			state.notes.forEach((note) => {
				count += note.content.length;
			});
			return count;
		},
	},
});
