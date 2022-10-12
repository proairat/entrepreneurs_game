<template>
  <nav class="navbar">
    <div class="min-w-[40rem]">
      <Disclosure as="nav" v-slot="{ open }" class="bg-gray-50">
        <div class="max-w-7xl mx-auto px-3">
          <div class="flex flex-wrap items-center justify-start h-16">
            <div class="flex items-center sh-960:hidden h-[inherit] order-1">
              <!-- Mobile menu button-->
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 rounded-md text-indigo-900 hover:text-indigo-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex items-center justify-center h-[inherit] order-2">
              <div class="flex px-3">
                <img
                  class="h-11 w-[105px]"
                  :src="getImageUrl('academic-cap')"
                  alt="Логотип"
                />
              </div>
            </div>
            <AppCatalogButton class="flex order-3" />
            <AppSearch
              :search="search"
              @update:search="updateSearch"
              class="order-5 basis-full sh-960:flex-1 sh-960:order-4"
            />
            <div class="flex order-4 sh-960:order-5 ml-auto">
              <div
                class="flex items-center h-11 hover:bg-slate-200 mx-2 cursor-pointer rounded-md"
                v-for="item in navigation"
                :key="item.name"
              >
                <img class="h-7 w-5 mx-1" :src="item.src" :alt="item.alt" />
                <render :item="item" />
                <!--<template v-if="item.handlers">
                  <a
                    :href="item.href"
                    class="hidden lg:flex mr-1.5 rounded-md text-sm font-medium items-center text-slate-800"
                    :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                  >
                </template>
                <template v-else>
                  <div>Что за дела?</div>
                </template>-->
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 h-[56px] sh-960:hidden"></div>
        <DisclosurePanel class="min-w-[40rem] sh-960:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
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
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { reactive, ref, h, useAttrs } from "vue";
import AppSearch from "@/components/AppSearch.vue";
import AppCatalogButton from "@/components/AppCatalogButton.vue";
import { getImageUrl } from "@/helpers/commonFunctions";
import { eventListeners } from "@popperjs/core";

const test = ref("click");

function testFn() {
  console.log("Call testFn");
}

const props = defineProps<{
  logout: any;
}>();

/*<template v-if="item.handlers">
  <a
    :href="item.href"
    class="hidden lg:flex mr-1.5 rounded-md text-sm font-medium items-center text-slate-800"
    :aria-current="item.current ? 'page' : undefined"
  >{{ item.name }}</a
  >
</template>
<template v-else>
  <div>Что за дела?</div>
</template>*/

const render = (params: any) => {
  function constructObj() {
    return Object.fromEntries(
      Object.entries(params.item.handlers).map(([key, value]) => [
        "on" + key[0].toUpperCase() + key.substring(1),
        value,
      ])
    );
  }

  return h("div", [
    params.item.handlers
      ? h(
          "a",
          {
            href: params.item.href,
            class:
              "hidden lg:flex mr-1.5 rounded-md text-sm font-medium items-center text-slate-800",
            ariaCurrent: params.item.current ? "page" : undefined,
            ...constructObj(),
          },
          params.item.name
        )
      : h(
          "a",
          {
            href: params.item.href,
            class:
              "hidden lg:flex mr-1.5 rounded-md text-sm font-medium items-center text-slate-800",
            ariaCurrent: params.item.current ? "page" : undefined,
          },
          params.item.name
        ),
  ]);
};

const navigation = [
  {
    name: "Бонусы",
    href: "#",
    current: true,
    src: getImageUrl("star"),
    alt: "Бонусы",
  },
  {
    name: "Настройки",
    href: "#",
    current: false,
    src: getImageUrl("settings"),
    alt: "Настройки",
  },
  {
    name: "Выход",
    href: "#",
    current: false,
    src: getImageUrl("exit"),
    alt: "Выход",
    handlers: { click: props.logout },
  },
];

// console.log('что это такое? { click: props.logout }', { click: props.logout() });

const MenuMy = reactive([
  { id: 1, text: "Your Profile" },
  { id: 2, text: "Settings" },
  { id: 3, text: "Что-то ещё" },
  { id: 4, text: "Sign out" },
]);

const search = ref("");

function updateSearch(value: string) {
  search.value = value;
  console.log("search", search.value);
}
</script>
