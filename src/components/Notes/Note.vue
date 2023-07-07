<template>
	<div class="card mb-4">
		<div class="card-content">
			<div class="content mb-1">{{ note.content }}</div>
			<div class="has-text-right has-text-grey-light">
				<small>{{ characterLength }}</small>
			</div>
		</div>
		<footer class="card-footer">
			<router-link
				:to="`/editNote/${note.id}`"
				href="#"
				class="card-footer-item"
				>Edit</router-link
			>
			<a
				@click.prevent="modals.deleteNote = true"
				href="#"
				class="card-footer-item"
				>Delete</a
			>
		</footer>
		<ModaDeleteNote
			v-if="modals.deleteNote"
			v-model="modals.deleteNote"
			:noteId="note.id" />
	</div>
</template>

<script setup>
// imports
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import ModaDeleteNote from "@/components/Notes/ModaDeleteNote.vue";

// store
const storeNotes = useStoreNotes();

// props
const props = defineProps({
	note: {
		type: Object,
		required: true,
	},
});

// character length
const characterLength = computed(() => {
	let length = props.note.content.length;
	let description = length > 1 ? "characters" : "character";
	return `${length} ${description}`;
});

// modals

const modals = reactive({
	deleteNote: false,
});
</script>
