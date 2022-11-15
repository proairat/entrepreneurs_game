<template>
  <nav class="navbar fixed z-50 top-0 w-full">
    <div class="min-w-[35rem]">
      <Disclosure as="nav" v-slot="{ open }">
        <div class="px-6 max-w-6xl mx-auto">
          <div class="flex flex-wrap items-center justify-start h-16">
            <div class="flex items-center sh-960:hidden h-[inherit] order-1">
              <!-- Mobile menu button-->
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 rounded-md text-indigo-900 hover:text-indigo-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              >
                <span class="sr-only">Открыть основное меню</span>
                <Bars3Icon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <router-link
              class="flex items-center justify-center h-[inherit] order-2"
              :to="{
                path: `/modules`,
                name: 'ViewModules',
              }"
              ><div class="flex px-3">
                <img class="h-11 w-[105px]" :src="logo" alt="Логотип" />
              </div>
            </router-link>
            <AppCatalogButton class="flex order-3" />
            <AppSearch
              :search="search"
              @update:search="updateSearch"
              class="order-5 basis-full sh-960:flex-1 sh-960:order-4"
            />
            <NavbarNavigation /><!-- render function -->
          </div>
        </div>
        <div class="h-[56px] sh-960:hidden"></div>
        <DisclosurePanel class="min-w-[35rem] sh-960:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :to="item.to"
              :class="[
                item.current
                  ? 'bg-indigo-100 text-indigo-900'
                  : 'hover:bg-slate-200',
                'block px-3 py-2 rounded-md text-base font-medium text-slate-800',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "AppNavbar",
};
</script>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { ref, h, reactive, resolveComponent } from "vue";
import { getImageUrl } from "@/helpers/commonFunctions";
import type { INavigation } from "@/types/interfaces";

const props = defineProps<{
  logout: any;
}>();
const logo = await getImageUrl("academic-cap");

function NavbarNavigation() {
  function constructObj(
    item: INavigation & {
      handlers?: undefined | { click: () => any };
    }
  ): { [k: string]: () => number } | undefined {
    if (item.handlers) {
      return Object.fromEntries(
        Object.entries(item.handlers).map(([key, value]) => [
          "on" + key[0].toUpperCase() + key.substring(1),
          value,
        ])
      );
    }
  }

  return h(
    "div",
    {
      class: "flex order-4 sh-960:order-5 ml-auto",
    },
    navigation.map((item) => {
      return h(
        "div",
        {
          class:
            "flex items-center h-11 hover:bg-slate-200 mx-2 cursor-pointer rounded-md",
          key: item.name,
          ...constructObj(item),
        },
        [
          h("img", {
            class: "h-7 w-5 mx-1",
            src: item.src,
            alt: item.alt,
          }),
          h(
            resolveComponent("router-link"),
            {
              to: { path: item.to, name: item.componentName },
              class:
                "hidden lg:flex mr-1.5 rounded-md text-sm font-medium items-center text-slate-800",
              ariaCurrent: item.current ? "page" : undefined,
            },
            () => item.name
          ),
        ]
      );
    })
  );
}

const navigation = reactive([
  {
    name: "Бонусы",
    to: "login",
    componentName: "AppLogin",
    current: true,
    src: await getImageUrl("star"),
    alt: "Бонусы",
  },
  {
    name: "Настройки",
    to: "login",
    componentName: "AppLogin",
    current: false,
    src: await getImageUrl("settings"),
    alt: "Настройки",
  },
  {
    name: "Выход",
    to: "login",
    componentName: "AppLogin",
    current: false,
    src: await getImageUrl("exit"),
    alt: "Выход",
    handlers: { click: props.logout },
  },
]);

const search = ref("");

function updateSearch(value: string) {
  search.value = value;
  console.log("search", search.value);
}
</script>

<style scoped lang="scss">
.navbar {
  background-color: $white;
}
</style>
