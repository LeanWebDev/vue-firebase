<template>
  <b-card no-body class="p-2">
    <a href="#" @click="$emit('close')">close</a>
    <p>add a comment</p>
    <form @submit.prevent>
      <b-textarea v-model.trim="comment"></b-textarea>
      <b-button
        variant="primary"
        @click="addComment()"
        :disabled="comment == ''"
        class="mt-1"
      >
        add comment
      </b-button>
    </form>
  </b-card>
</template>
<script>
import { commentsCollection, postsCollection, auth } from "@/plugins/firebase";

export default {
  props: ["post"],
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    async addComment() {
      // create comment
      await commentsCollection.add({
        createdOn: new Date(),
        content: this.comment,
        postId: this.post.id,
        userId: auth.currentUser.uid,
        userName: this.$store.state.userProfile.name,
      });

      // update comment count on post
      await postsCollection.doc(this.post.id).update({
        comments: parseInt(this.post.comments) + 1,
      });

      // close modal
      this.$emit("close");
    },
  },
};
</script>
