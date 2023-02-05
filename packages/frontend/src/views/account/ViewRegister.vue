<template>
  <AppEntry>
    <template #AppAlert>
      <AppAlert :isDisappears="true" />
    </template>
    <template #TheDescription>
      <TheDescription />
    </template>
    <template #TheForm>
      <TheRegistrationForm />
    </template>
  </AppEntry>
</template>
