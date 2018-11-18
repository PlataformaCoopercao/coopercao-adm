<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link
        :to="{}">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span>{{'Administração'}}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-statistics"></span>
          <span>Estatística</span>
        </span>
        <sidebar-link
          :to="{ name: 'statsPasseador' }">
          <span slot="title">
            <span>Estatística Passeadores</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'statsPasseio' }">
          <span slot="title">
            <span>Estatística Passeio</span>
          </span>
        </sidebar-link>
        <sidebar-link
          :to="{ name: 'statsCliente' }">
          <span slot="title">
            <span>Estatística Cliente</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>

      <sidebar-link
          :to="{ name: 'clients' }">
          <span slot="title">
            <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-user"></span>
            <span>Clientes</span>
          </span>
        </sidebar-link>

      <sidebar-link
          :to="{ name: 'passeadores' }">
          <span slot="title">
            <span class="sidebar-menu-item-icon fa fa-users"></span>
            <span>Funcionários</span>
          </span>
        </sidebar-link>

      <sidebar-link
          :to="{ name: 'passeios' }">
          <span slot="title">
            <span class="sidebar-menu-item-icon fa fa-paw"></span>
            <span>Passeios</span>
          </span>
        </sidebar-link>

      <sidebar-link
          :to="{ name: 'finances' }">
          <span slot="title">
            <span class="sidebar-menu-item-icon fa fa-money"></span>
            <span>Finanças</span>
          </span>
        </sidebar-link>

    </template>
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}

</script>
