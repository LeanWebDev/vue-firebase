<template>
  <b-row>
    <b-col md="4">
      <b-card class="mt-4" fluid no-body>
        <b-card-header>
          Profile
        </b-card-header>
        <b-card-body
          ><ul>
            <li>{{ userProfile.name }}</li>
            <li>{{ userProfile.title }}</li>
          </ul></b-card-body
        >
      </b-card>
      <b-card class="mt-4" fluid no-body>
        <b-card-header>
          New Post
        </b-card-header>
        <b-card-body
          ><b-form @submit.prevent="newPost"
            ><b-form-group>
              <b-form-textarea v-model.trim="post.content"> </b-form-textarea
              ><b-button @click="createPost" :disabled="post.content === ''"
                >Post</b-button
              ></b-form-group
            ></b-form
          ></b-card-body
        >
      </b-card>
    </b-col>
    <b-col class="pt-5" md="8">
      <transition name="fade">
        <CommentModal
          v-if="showCommentModal"
          :post="selectedPost"
          @close="toggleCommentModal()"
        ></CommentModal>
      </transition>
      <transition name="fade">
        <div v-if="showPostModal" class="p-modal">
          <div class="p-container">
            <a @click="closePostModal()" class="close">close</a>
            <div class="post">
              <h5>{{ fullPost.userName }}</h5>
              <span>{{ fullPost.createdOn | formatDate }}</span>
              <p>{{ fullPost.content }}</p>
              <ul>
                <li>
                  <a>comments {{ fullPost.comments }}</a>
                </li>
                <li>
                  <a>likes {{ fullPost.likes }}</a>
                </li>
              </ul>
            </div>
            <div v-show="postComments.length" class="comments">
              <div
                v-for="comment in postComments"
                :key="comment.id"
                class="comment"
              >
                <p>{{ comment.userName }}</p>
                <span>{{ comment.createdOn | formatDate }}</span>
                <p>{{ comment.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="post">
          <h5>{{ post.userName }}</h5>
          <span>{{ post.createdOn }}</span>
          <p>{{ post.content | trimLength }}</p>
          <ul>
            <li>
              <a href="#" @click="toggleCommentModal(post)"
                >comments {{ post.comments }}</a
              >
            </li>
            <li>
              <a href="#" @click="likePost(post.id, post.likes)"
                >likes {{ post.likes }}</a
              >
            </li>
            <li><a href="#" @click="viewPost(post)">view full post</a></li>
          </ul>
        </div>
      </div>
      <div v-else>
        <p class="no-results">There are currently no posts</p>
      </div></b-col
    >
  </b-row>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import CommentModal from "@/components/CommentModal.vue";
import { commentsCollection } from "@/plugins/firebase";

export default {
  components: {
    CommentModal,
  },
  data() {
    return {
      post: {
        content: "",
      },
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: [],
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"]),
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", { content: this.post.content });
      this.post.content = "";
    },
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;

      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
      }
    },
    likePost(id, likesCount) {
      this.$store.dispatch("likePost", { id, likesCount });
    },
    // create viewPost and closePostModal methods
    async viewPost(post) {
      const docs = await commentsCollection
        .where("postId", "==", post.id)
        .get();

      docs.forEach((doc) => {
        let comment = doc.data();
        comment.id = doc.id;
        this.postComments.push(comment);
      });

      this.fullPost = post;
      this.showPostModal = true;
    },
    closePostModal() {
      this.postComments = [];
      this.showPostModal = false;
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }

      let date = val.toDate();
      return moment(date).fromNow();
    },
    trimLength(val) {
      if (val.length < 200) {
        return val;
      }
      return `${val.substring(0, 200)}...`;
    },
  },
};
</script>

<style></style>
