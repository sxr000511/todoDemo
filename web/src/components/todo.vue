<template v-if="this.$route.params._id">
  <div class="page lists-show" v-show="!todo.isDelete">
    <!-- 1. 上面的头部模块 -->
    <nav>
      <!-- 当用户浏览车窗口尺寸小于40em时候，显示手机端的菜单图标 -->
      <div class="form list-edit-form" v-show="isUpdate">
        <!-- 当用户点击标题进入修改状态，就显示当前内容可以修改 -->
        <input
          type="text"
          v-model="todo.title"
          @keyup.enter="updateTitle"
          :disabled="todo.locked"
        />
        <div class="nav-group right">
          <a class="nav-item" @click="isUpdate = false">
            <span class="icon-close"> </span>
          </a>
        </div>
      </div>
      <div
        class="nav-group"
        @click="$store.dispatch('updateMenu')"
        v-show="!isUpdate"
      >
        <!-- 在菜单的图标下面添加updateMenu时间，他可以直接调用vuex actions.js里面的updateMenu方法 -->
        <a class="nav-item">
          <span class="icon-list-unordered"> </span>
        </a>
      </div>
      <!-- 显示标题和数字模块 -->
      <h1 class="title-page" v-show="!isUpdate" @click="isUpdate = true">
        <span class="title-wrapper">{{ todo.title }}</span>
        <!-- title:标题 绑定标题 -->
        <span class="count-list">{{ todo.count || 0 }}</span>
        <!-- count:数量 绑定代办单项熟练-->
      </h1>
      <!-- 右边显示删除图标和锁定图标的模块 -->
      <div class="nav-group right" v-show="!isUpdate">
        <div class="options-web">
          <a class="nav-item" @click="onlock">
            <!-- cicon-lock锁定的图标
                                                    icon-unlock：非锁定的图标
                                                    -->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else> </span>
          </a>
          <a class="nav-item">
            <span class="icon-trash" @click="onDelete"> </span>
          </a>
        </div>
      </div>
      <!-- 2. 用户新增代办事项的input模块 -->
      <div class="form todo-new input-symbol">
        <!-- 绑定disabled值，当todo.locked为绑定的时候，禁止input输入,双向绑定text,和监听input的回车事件@keyup.enter -->
        <input
          type="text"
          v-model="text"
          placeholder="请输入"
          @keyup.enter="onAdd"
          :disabled="todo.locked"
        />
        <span class="icon-add"></span>
      </div>
    </nav>
    <!-- 3. 列表主体模块 -->
    <div class="content-scrollable list-items">
      <div v-for="(item, index) in items" :key="index">
        <item
          :item="item"
          :index="index"
          :_id="todo._id"
          :init="init"
          :locked="todo.locked"
        ></item>
      </div>
    </div>
  </div>
</template>
<script>
import item from "./item";
import { addRecord, getTodo, editTodo } from "../api/api";
export default {
  data() {
    return {
      todo: {},
      items: [
        // 代办单项列表
      ],
      text: "", // 用户输入单项项绑定的输入-》todolist item新增
      isUpdate: false, // 新增修改状态
    };
  },
  components: {
    item,
  },
  watch: {
    "$route.params._id"() {
      // 监听$route.params.id的变化，如果这个id即代表用户点击了其他的待办项需要重新请求数据。
      console.log(this.$route.params._id);
      this.init();
    },
  },
  created() {
    // created生命周期，在实例已经创建完成，页面还没渲染时调用init方法。
    // 如果不调用，页面空数据（异步200ms请求回调和promise请求回调效果不同，可能是route和create的时间？）
    // 和库连接的话created的时候route有_id，
    this.init();
  },
  methods: {
    init() {
      const ID = this.$route.params._id;
      // console.log(ID);
      getTodo({ _id: ID }).then((res) => {
        // console.log(res.data.todo);
        let { _id, title, count, isDelete, locked, record } = res.data.todo;
        // record：menu item下的todo item
        this.items = record;
        this.todo = {
          _id: _id,
          title: title,
          count: count,
          locked: locked,
          isDelete: isDelete,
        };
      });
    },
    onAdd() {
      const ID = this.$route.params._id;
      addRecord({ _id: ID, text: this.text }).then(() => {
        this.text = "";
        this.init();
        this.$store.dispatch("getTodo");
      });
    },

    updateTitle() {
      this.isUpdate = false;
      this.updateTodo();
    },
    onDelete() {
      this.todo.isDelete = true;
      this.updateTodo();
    },
    onlock() {
      this.todo.locked = !this.todo.locked;
      this.updateTodo();
    },
    updateTodo() {
      let _this = this;
      // console.log(this.todo);
      // 更新后台
      editTodo({
        todo: this.todo,
      }).then(() => {
        // 更新vuex
        _this.$store.dispatch("getTodo");
        // 重新渲染
        _this.init();
      });
    },
  },
};
</script>

<style lang="less">
@import "../common/style/nav.less";
@import "../common/style/form.less";
@import "../common/style/todo.less";
</style>
