<template>
  <div class="edit-note">
    <add-edit-note
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <router-link to="/" class="button is-link is-light mr-2"
          >Cancel</router-link
        >
        <button
          :disabled="!noteContent"
          @click="handleSaveClicked"
          class="button is-link has-background-link"
        >
          Save Note
        </button>
      </template>
    </add-edit-note>
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

// router
const route = useRoute();
const router = useRouter();

// store
const storeNotes = useStoreNotes();

// note
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>