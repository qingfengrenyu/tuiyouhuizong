const list =[
  {
    name: '张三',
    xuehao: '0001',
    phone: 1861861868886,
    age:  21,
    xingbie: '男',
    subject: '数学',
    job: '工程师',
    birthtime: '1997-03-25',
    },
    {
      name: '李毅',
      xuehao: '00011',
      phone: 186,
      age:  2,
      xingbie: '女',
      subject: '英语',
      job: '教师',
      birthtime: '2007-01-26',
      },
      {
        name: '张er',
        xuehao: '0002',
        phone: 18999997,
        age:  20,
        xingbie: '男',
        subject: '学化',
        job: '助理工程师',
        birthtime: '1999-12-04',
        }
]
module.exports = [
  {
    url: '/vue-admin-template/huizong/list',
    type: 'get',
    response: config => {
      
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
