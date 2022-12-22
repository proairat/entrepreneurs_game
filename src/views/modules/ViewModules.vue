<template>
  <AppTitleLine>
    <AppTitle> Базовый курс </AppTitle>
  </AppTitleLine>
  <AppListOfModules type="modules" />
  <AppTitleLine>
    <AppTitle> Углубленный курс </AppTitle>
  </AppTitleLine>
  <AppListOfModules type="modulesAdvanced" />
  <AppPadding :padding="{ paddingTop: '1.5rem' }" />
</template>
