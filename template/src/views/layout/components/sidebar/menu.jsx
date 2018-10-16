import Vue from 'vue'
export default Vue.extend({
  name: 'sidebarMenu',
  props: {
    menu: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    isCollapse: {
      type: Boolean,
      required: true,
      default () {
        return false
      }
    }
  },
  render (h) {
    const { menu, $route, isCollapse } = this
    const emtpyIcon = <i class="el-icon-none" />
    function createMenu (prefix, m, index) {
      // 2. 如果是第一次调用，prefx是空
      // 4. 以后每次调用，prefx都不为空
      const linkIndex = prefix === null ? `${index}` : `${prefix}-${index}`
      if (m.subMenu) {
        return createSubMenu(m, linkIndex)
      } if (m.group) {
        return createGroupItem(m, linkIndex)
      } else {
        return createMenuItem(m, m.path || linkIndex)
      }
    }
    function createSubMenu ({ icon, title, subMenu }, index) {
      // 3. 创建子菜单，递归创建子子菜单，把当前index作为前缀
      return (<el-submenu props-index={index}>
        <div slot="title">
          {icon ? <i class={icon}></i> : emtpyIcon }
          <span>{ title }</span>
        </div>
        {subMenu.map(createMenu.bind(this, index))}
      </el-submenu>)
    }
    function createGroupItem ({ title, group }, index) {
      return (<el-menu-item-group>
        <div slot="title">{ title }</div>
        {group.map(createMenu.bind(this, index))}
      </el-menu-item-group>)
    }
    function createMenuItem ({ icon, title, path }) {
      return (<el-menu-item props-index={path}>
        <router-link props-to={path} >
          { icon ? <i class={icon}></i> : emtpyIcon }
          <span>{ title }</span>
        </router-link></el-menu-item>)
    }
    // 1. 从这里开始读，通过menu创建菜单， prefix是空
    const subMenus = menu.map(createMenu.bind(this, null))
    const menuProps = { props: { mode: 'vertical',
      'show-timeout': 200,
      'default-active': $route.path,
      collapse: isCollapse,
      'background-color': '#42485b',
      'text-color': '#fff',
      'active-text-color': '#fff' }}
    return (
      <el-menu
        {...menuProps}
      >
        { subMenus }
      </el-menu>
    )
  }
})
