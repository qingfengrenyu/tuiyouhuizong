<template>
	<el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
		
	  <el-form-item 
	  label="姓名" 	  
	 :rules="[
	   { required: true, message: '姓名不能为空'},]"
	   >
	    <el-input type="xingming" v-model="sizeForm.name"></el-input>
	  </el-form-item>
	  
	  <el-form-item label="籍贯">
	    <el-select v-model="sizeForm.region" placeholder="请选择">
	      <el-option label="河南" value="henan"></el-option>
	      <el-option label="郑州" value="zhengzhou"></el-option>
	    </el-select>		
	  </el-form-item>
	  
	   <el-form-item
	      label="年龄"
	     prop="age"
	      :rules="[
	        { required: true, message: '年龄不能为空'},
	        { type: 'number', message: '年龄必须为数字值'}
	      ]"
	    >
		<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
		  </el-form-item>
		  
	  <el-form-item label="出生时间">
	    <el-col :span="11">
	      <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
	    </el-col>
	    <el-col class="line" :span="2">-</el-col>
	    <el-col :span="11">
	      <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
	    </el-col>
	  </el-form-item>
	  
	  <el-form-item label="政治面貌">
	    <el-checkbox-group v-model="sizeForm.type">
	      <el-checkbox-button label="党员" name="type"></el-checkbox-button>
	      <el-checkbox-button label="团员" name="type"></el-checkbox-button>
	      <el-checkbox-button label="民主党派" name="type"></el-checkbox-button>
		  <el-checkbox-button label="群众" name="type"></el-checkbox-button>
	    </el-checkbox-group>
	  </el-form-item>
	  
	  <el-form-item label="性别">
	    <el-radio-group v-model="sizeForm.resource" size="medium">
	      <el-radio border label="男"></el-radio>
	      <el-radio border label="女"></el-radio>
	    </el-radio-group>
	  </el-form-item>
	  
	  <el-form-item label="自我评价" >
	      <el-input type="textarea" v-model="sizeForm.desc"></el-input>
	    </el-form-item>
	  
	  <el-form-item size="large">
	    <el-button type="primary" @click="onSubmit">立即提交</el-button>
	    <el-button>取消</el-button>
	  </el-form-item>
	</el-form>
</template>


<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
		numberValidateForm: {
		          age: ''
		        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>