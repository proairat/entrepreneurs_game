<template>
  <LayoutContainer>
    <template #AppAlert>
      <AppAlert :isDisappears="true" />
    </template>
    <template #TheDescription>
      <TheDescription />
    </template>
    <template #TheForm>
      <TheLoginForm />
    </template>
  </LayoutContainer>
</template>
