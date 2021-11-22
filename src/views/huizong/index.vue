<template>
  <div class="huizong-wrapper">
    <list-layout>
      <template slot="header">
        <div>汇总表</div>
      </template>
      <template slot="content">
        <al-table :column="formData.column" :data="formData.list" :pagination="true"></al-table>
      </template>
    </list-layout>
  </div>
</template>

<script>
  import { getHuizongList }   from "@/api/huizong.js";
  import ListLayout from "@/components/ListLayout/index.vue";
  import    AlTable          from "@/components/AlTable/index.vue";
  export default {
    components: {
      ListLayout,
      AlTable
    },
    data() {
      return {
        formData: {
          column: [
            {
              prop: 'name',
              label: '姓名',
            },
            {
              prop: 'xuehao',
              label: '学号',
            },
            {
              prop: 'phone',
              label: '手机',
            },
            {
              prop: 'age',
              label: '年龄',
            },
            {
              prop: 'xingbie',
              label: '性别',
            },
            {
              prop: 'subject',
              label: '科目',
            },
            {
              prop: 'job',
              label: '工作',
            },
            {
              prop: 'birthtime',
              label: '生日',
            },
          ],
          list: [],
        }
      }
    },

    created() {
      getHuizongList().then((res) => {
        const { code, data } = res;
        if(Number(code) === 20000) {
          const { items, total } = data;
          this.formData.list = items;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
