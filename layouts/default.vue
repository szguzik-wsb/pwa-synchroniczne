<template>
  <TopInfoBar>
    <template v-slot:title>
      Telefon
    </template>
    <template v-slot:content>
      111 222 333
    </template>
  </TopInfoBar>

  <TopInfoBar>
    <template v-slot:title>
      Email
    </template>
    <template v-slot:content>
      szymon.guzik@gdansk.merito.pl
    </template>
  </TopInfoBar>

  <TopNav />
  <slot />
  <Footer />
</template>