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
        <div class="h-[56px] sh-960:hidden"></div>
        <DisclosurePanel class="min-w-[35rem] sh-960:hidden">
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { ref, h } from "vue";
import { getImageUrl } from "@/helpers/commonFunctions";

const props = defineProps<{
  logout: any;
}>();

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
