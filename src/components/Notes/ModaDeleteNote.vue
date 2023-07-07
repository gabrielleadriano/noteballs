<template>
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Delete note?</p>
				<button class="delete" aria-label="close" @click="closeModal"></button>
			</header>
			<section class="modal-card-body">
				Are you sure you want to delete this note?
			</section>
			<footer class="modal-card-foot is-justify-content-flex-end">
				<button class="button" @click="closeModal">Cancel</button>
				<button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
					Delete
				</button>
			</footer>
		</div>
	</div>
</template>
<script setup>
// imports
import { useStoreNotes } from "@/stores/storeNotes";

// props
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	noteId: {
		type: String,
		required: true,
	},
});

// emits
const emit = defineEmits(["update:modelValue"]);

// store
const storeNotes = useStoreNotes();

// close modal
const closeModal = () => {
	emit("update:modelValue");
};
</script>
