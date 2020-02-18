<template>
  <div>
    <el-table v-loading="loading" :data="blogList" stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="content" label="内容" />
      <el-table-column prop="nickName" label="发布人" />
      <el-table-column label="操作">
        <template>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/blog'
export default {
  data() {
    return {
      blogList: [],
      count: 50,
      loading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      fetchList({
        start: this.blogList.length,
        count: this.count
      }).then(res => {
        console.log(res)
        const data = res.data
        const _blogList = []
        for (let i = 0; i < data.length; i++) {
          _blogList.push(JSON.parse(data[i]))
        }
        this.blogList = this.blogList.concat(_blogList)
        this.loading = false
      })
    }
  }
}
</script>

<style></style>
