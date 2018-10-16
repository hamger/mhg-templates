export default [
  { title: '导航一',
    icon: 'el-icon-location',
    subMenu: [
      { title: '分组一',
        group: [
          { title: '选项一', path: '/123' },
          { title: '选项二', path: '/456' }
        ]},
      { title: '选项三',
        path: '/',
        subMenu: [
          { title: '选项一', path: '/789' }
        ] }
    ]
  },
  { title: '导航二',
    subMenu: [
      { title: '选项一', path: '/111' },
      { title: '选项二', path: '/222' },
      { title: '选项三',
        subMenu: [
          { title: '选项一', path: '/333' }
        ] }
    ]
  },
  { title: '选项四', path: '/444', icon: 'el-icon-location' }
]
